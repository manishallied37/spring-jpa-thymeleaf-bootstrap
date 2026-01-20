package com.allied.spring.service;

import com.allied.spring.domain.ApiPricingRepository;
import com.allied.spring.web.dto.ApiPricing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ApiPricingService {

    @Autowired
    private ApiPricingRepository repository;

    public Map<String, Long> getPrices(List<String> apiNames) {
        return repository.findPricesForApis(apiNames)
                .stream()
                .collect(Collectors.toMap(
                        ApiPricing::getApiName,
                        ApiPricing::getPrice
                ));
    }
}
