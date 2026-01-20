package com.allied.spring.web.controllers.viewControllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.allied.spring.service.ApiPricingService;

@RestController
@RequestMapping("/api/pricing")
public class ApiPricingController {

    @Autowired
    private ApiPricingService service;

    @GetMapping
    public Map<String, Long> getPricing(
            @RequestParam(name = "apiNames") List<String> apiNames) {

        return service.getPrices(apiNames);
    }
}