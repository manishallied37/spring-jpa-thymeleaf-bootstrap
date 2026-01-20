package com.allied.spring.service;

import com.allied.spring.domain.SwaggerFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;

import javax.transaction.Transactional;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;

import java.io.StringReader;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import com.allied.spring.web.dto.SwaggerFile;

@Service
public class SwaggerService {

    @Autowired
    private SwaggerFileRepository swaggerFileRepository;
    
    @Transactional
    public void uploadSwagger(MultipartFile file, String menuName) throws IOException {

        String content = new String(file.getBytes(), StandardCharsets.UTF_8);

        if (menuName == null || menuName.isBlank()) {
            throw new IllegalArgumentException("API name not found in Swagger file");
        }

        int updated = swaggerFileRepository
                .updateByApiName(menuName, content, LocalDateTime.now());

        if (updated == 0) {
            SwaggerFile swaggerFile = new SwaggerFile();
            swaggerFile.setApiName(menuName);
            swaggerFile.setJsonContent(content);
            swaggerFile.setUploadDate(LocalDateTime.now());
            swaggerFileRepository.save(swaggerFile);
        }
    }
}


