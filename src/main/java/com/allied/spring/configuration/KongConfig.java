package com.allied.spring.configuration;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.net.http.HttpClient;
import java.time.Duration;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.atomic.AtomicReference;

@Configuration
public class KongConfig {

    private final Logger logger = LoggerFactory.getLogger(KongConfig.class);
    private final RestTemplate restTemplate;
    private final AtomicReference<String> cachedKongInfo = new AtomicReference<>();
    @Getter
    private final HttpClient httpClient = HttpClient.newHttpClient();
    @Value("${kong.admin.url}")
    private String kongAdminUrl;
    private volatile long lastFetchTime = 0;

    public KongConfig(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder
                .setConnectTimeout(Duration.ofSeconds(10))
                .setReadTimeout(Duration.ofSeconds(60))
                .build();
    }

    public CompletableFuture<String> getKongInfoAsync() {
        long now = System.currentTimeMillis();
        long CACHE_DURATION_MS = 60_000;
        if (cachedKongInfo.get() != null && (now - lastFetchTime) < CACHE_DURATION_MS) {
            return CompletableFuture.completedFuture(cachedKongInfo.get());
        }

        return CompletableFuture.supplyAsync(() -> {
            logger.info("Starting Kong Admin connection to {} ...", kongAdminUrl);
            long startTime = System.currentTimeMillis();
            try {
                ResponseEntity<String> response = restTemplate.exchange(kongAdminUrl + "/", HttpMethod.GET, null, String.class);
                long duration = System.currentTimeMillis() - startTime;
                logger.info("Fetched Kong info in {} ms", duration);

                String kongInfoJson = response.getBody();
                if (kongInfoJson != null) {
                    ObjectMapper mapper = new ObjectMapper();
                    JsonNode root = mapper.readTree(kongInfoJson);
                    String version = root.path("version").asText("N/A");
                    String nodeId = root.path("node_id").asText("N/A");
                    String compactInfo = "version=" + version + ", nodeId=" + nodeId;

                    cachedKongInfo.set(compactInfo);
                    lastFetchTime = System.currentTimeMillis();

                    logger.info("Kong Info: {}", compactInfo);
                    return compactInfo;
                } else {
                    logger.warn("Kong returned empty response");
                    return "EMPTY RESPONSE";
                }
            } catch (Exception e) {
                long duration = System.currentTimeMillis() - startTime;
                logger.error("Failed to fetch Kong info after {} ms: {}", duration, e.getMessage(), e);
                return "CONNECTION FAILED: " + e.getMessage();
            }
        });
    }
}
