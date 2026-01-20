package com.allied.spring.web.dto;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "swaggerfile")
public class SwaggerFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(name = "json_content", columnDefinition = "LONGTEXT")
    private String jsonContent;

    @Column(name = "upload_date", columnDefinition = "TIMESTAMP")
    private LocalDateTime uploadDate = LocalDateTime.now();

    @Column(name = "api_name", length = 255)
    private String apiName;

    public SwaggerFile() {
    }

    public SwaggerFile(String jsonContent, LocalDateTime uploadDate) {
        this.jsonContent = jsonContent;
        this.uploadDate = uploadDate;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJsonContent() {
        return jsonContent;
    }

    public void setJsonContent(String jsonContent) {
        this.jsonContent = jsonContent;
    }

    public LocalDateTime getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(LocalDateTime uploadDate) {
        this.uploadDate = uploadDate;
    }

    public String getApiName() {
        return apiName;
    }

    public void setApiName(String apiName) {
        this.apiName = apiName;
    }
}
