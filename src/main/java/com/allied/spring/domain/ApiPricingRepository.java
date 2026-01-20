package com.allied.spring.domain;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.allied.spring.web.dto.ApiPricing;

@Repository
public interface ApiPricingRepository extends JpaRepository<ApiPricing, String> {

    @Query("SELECT a FROM ApiPricing a WHERE a.apiName IN :apiNames")
    List<ApiPricing> findPricesForApis(@Param("apiNames") List<String> apiNames);
}
