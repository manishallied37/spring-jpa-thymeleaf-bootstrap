package com.allied.spring.web.dto;

import javax.persistence.*;

@Entity
@Table(name = "api_pricing")
public class ApiPricing {

	@Id
    @Column(name = "api_name")
    private String apiName;

    @Column(name = "price")
    private Long price;

	public String getApiName() {
		return apiName;
	}

	public void setApiName(String apiName) {
		this.apiName = apiName;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}
}
