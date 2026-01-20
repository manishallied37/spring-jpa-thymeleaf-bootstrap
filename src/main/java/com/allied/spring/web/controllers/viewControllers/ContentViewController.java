package com.allied.spring.web.controllers.viewControllers;

import com.allied.spring.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/content")
public class ContentViewController {

    @Autowired
    private ContentService contentService;

    @GetMapping("/{colName}")
    public String getContent(@PathVariable String colName) {
        return contentService.getDescriptionByColName(colName);
    }
}