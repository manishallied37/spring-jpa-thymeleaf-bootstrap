package com.allied.spring.service;

import com.allied.spring.configuration.KongConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class KongService {

    private final Logger log = LoggerFactory.getLogger(KongService.class);

    private final KongConfig kongConfig;

    public KongService(KongConfig kongConfig) {
        this.kongConfig = kongConfig;
    }

    @PostConstruct
    public void init() {
        getKongStatus();
    }

    public void getKongStatus() {
        try {
            String kongInfo = kongConfig.getKongInfoAsync().join();
            log.info("Kong Info: {}", kongInfo);
        } catch (Exception e) {
            log.error("Kong Connection Failed: {}", e);
        }

    }

}
