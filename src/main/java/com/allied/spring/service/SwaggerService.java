package com.allied.spring.service;

import com.allied.spring.domain.SwaggerFileRepository;
import com.allied.spring.web.dto.SwaggerFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;

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


