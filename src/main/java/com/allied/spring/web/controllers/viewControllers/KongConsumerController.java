package com.allied.spring.web.controllers.viewControllers;

import com.allied.spring.service.KongConsumerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
public class KongConsumerController {

    private static final Logger logger = LoggerFactory.getLogger(KongConsumerController.class);

    private final KongConsumerService kongConsumerService;

    public KongConsumerController(KongConsumerService kongConsumerService) {
        this.kongConsumerService = kongConsumerService;
    }

    @PostMapping("/consumer")
    public String createConsumerWithKey(Authentication authentication) {

        String username = authentication.getName();

        logger.info("Creating Kong consumer for username={}", username);
        
        kongConsumerService.ensureKeyAuthPluginExists();

        kongConsumerService.createConsumerIfNotExists(username);

        String apiKey = kongConsumerService.createKeyAuthIfNotExists(username);

        logger.info("Generated API key for {}: {}", username, apiKey);

        return apiKey;
    }

}

