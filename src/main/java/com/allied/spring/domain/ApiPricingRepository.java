package com.allied.spring.domain;

import com.allied.spring.web.dto.ApiPricing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApiPricingRepository extends JpaRepository<ApiPricing, String> {

    @Query("SELECT a FROM ApiPricing a WHERE a.apiName IN :apiNames")
    List<ApiPricing> findPricesForApis(@Param("apiNames") List<String> apiNames);
}
