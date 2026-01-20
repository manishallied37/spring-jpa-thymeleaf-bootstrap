package com.allied.spring.service;

import com.allied.spring.domain.Content;
import com.allied.spring.domain.ContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContentService {

    @Autowired
    private ContentRepository repository;

    public String getDescriptionByColName(String colName) {
        return repository.findByColName(colName)
                .map(Content::getDescription)
                .orElse("");
    }
}

