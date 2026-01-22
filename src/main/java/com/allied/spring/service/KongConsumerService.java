package com.allied.spring.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class KongConsumerService {

    private static final Logger logger = LoggerFactory.getLogger(KongConsumerService.class);

    @Value("${kong.admin.url}")
    private String kongAdminUrl;
    private final RestTemplate restTemplate = new RestTemplate();
    
    public void ensureKeyAuthPluginExists() {

        String url = kongAdminUrl + "/plugins?name=key-auth";

        ResponseEntity<Map> response =
                restTemplate.getForEntity(url, Map.class);

        Map body = response.getBody();

        if (body != null && body.containsKey("data")) {
            List<?> plugins = (List<?>) body.get("data");
            if (!plugins.isEmpty()) {
                logger.info("key-auth plugin already enabled");
                return;
            }
        }

        Map<String, Object> pluginBody = new HashMap<>();
        pluginBody.put("name", "key-auth");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        restTemplate.postForEntity(
                kongAdminUrl + "/plugins",
                new HttpEntity<>(pluginBody, headers),
                String.class
        );

        logger.info("key-auth plugin enabled globally");
    }

    public void createConsumerIfNotExists(String username) {

        String url = kongAdminUrl + "/consumers";

        Map<String, Object> body = new HashMap<>();
        body.put("username", username);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        try {
            restTemplate.postForEntity(
                    url,
                    new HttpEntity<>(body, headers),
                    String.class
            );
            logger.info("Kong consumer created for {}", username);

        } catch (HttpClientErrorException.Conflict ex) {
            logger.info("Kong consumer already exists (race-safe) for {}", username);
        }
    }


    public String createKeyAuthIfNotExists(String username) {

        String existingKey = getExistingApiKey(username);
        if (existingKey != null) {
            logger.info("Existing API key found for {}", username);
            return existingKey;
        }

        String url = kongAdminUrl + "/consumers/" + username + "/key-auth";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> body = new HashMap<>();

        ResponseEntity<Map> response =
                restTemplate.postForEntity(
                        url,
                        new HttpEntity<>(body, headers),
                        Map.class
                );

        String newKey = response.getBody().get("key").toString();
        logger.info("New API key generated for {}", username);

        return newKey;
    }

    
    public boolean consumerExists(String username) {

        String url = kongAdminUrl + "/consumers/" + username;

        try {
            restTemplate.getForEntity(url, String.class);
            return true;
        } catch (HttpClientErrorException.NotFound ex) {
            return false;
        }
    }
    
    public String getExistingApiKey(String username) {

        String url = kongAdminUrl + "/consumers/" + username + "/key-auth";

        try {
            ResponseEntity<Map> response =
                    restTemplate.getForEntity(url, Map.class);

            Map body = response.getBody();

            if (body == null || !body.containsKey("data")) {
                return null;
            }

            @SuppressWarnings("unchecked")
			List<Map<String, Object>> keys =
                    (List<Map<String, Object>>) body.get("data");

            if (keys.isEmpty()) {
                return null;
            }

            return keys.get(0).get("key").toString();

        } catch (HttpClientErrorException.NotFound ex) {
            return null;
        }
    }


}