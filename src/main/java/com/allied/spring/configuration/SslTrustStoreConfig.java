package com.allied.spring.configuration;

import javax.annotation.PostConstruct;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

@Configuration
public class SslTrustStoreConfig {

    @PostConstruct
    public void init() throws Exception {
        Resource r = new ClassPathResource("tradconnect.jks");

        System.setProperty(
            "javax.net.ssl.trustStore",
            r.getFile().getAbsolutePath()
        );
        System.setProperty(
            "javax.net.ssl.trustStorePassword",
            "changeit"
        );
    }
}