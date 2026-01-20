package com.allied.spring.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

//web mvc configuration for thymeleaf
@Configuration
public class MyWeb extends WebMvcConfigurerAdapter {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("website/index.html");
        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
    }
}