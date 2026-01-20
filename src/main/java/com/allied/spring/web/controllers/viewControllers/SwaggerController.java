package com.allied.spring.web.controllers.viewControllers;

import com.allied.spring.domain.SwaggerFileRepository;
import com.allied.spring.service.SwaggerService;
import com.allied.spring.web.dto.SwaggerFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class SwaggerController {

    @Autowired
    private SwaggerFileRepository swaggerFileRepository;

    @Autowired
    private SwaggerService swaggerService;

    @PostMapping("/upload")
    public String uploadJson(@RequestParam("file") MultipartFile file, @RequestParam("menuName") String menuName, Model model) {

        String fileName = file.getOriginalFilename();

        if (file.isEmpty() || fileName == null) {
            model.addAttribute("error", "Invalid file.");
            return "website/SwaggerMainPage";
        }

        if (menuName.isBlank()) {
            model.addAttribute("error", "Please select a valid menu.");
            return "website/SwaggerMainPage";
        }

        menuName = cleanMenuName(menuName);

        String lowerName = fileName.toLowerCase();
        if (!(lowerName.endsWith(".json")
                || lowerName.endsWith(".yaml")
                || lowerName.endsWith(".yml")
                || lowerName.endsWith(".xml")
                || lowerName.endsWith(".wadl"))) {

            model.addAttribute("error",
                    "Invalid file format. Only JSON, YAML, or WADL/XML files are allowed.");
            return "website/SwaggerMainPage";
        }

        try {
            swaggerService.uploadSwagger(file, menuName);
            return "website/swaggerContent";

        } catch (IllegalArgumentException ex) {
            ex.printStackTrace();
            model.addAttribute("error", ex.getMessage());
            return "website/SwaggerMainPage";

        } catch (Exception ex) {
            ex.printStackTrace();
            model.addAttribute("error", "Failed to upload Swagger file.");
            return "website/SwaggerMainPage";
        }
    }

    @GetMapping("website/swaggerContent")
    public String swaggerPage() {
        return "website/swaggerContent";
    }

    @GetMapping(value = "/swagger-json", produces = MediaType.TEXT_PLAIN_VALUE)
    @ResponseBody
    public ResponseEntity<String> getSwaggerJson() {
        SwaggerFile swaggerFile = swaggerFileRepository.findTopByOrderByUploadDateDesc();
        if (swaggerFile == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("{\"error\":\"No Swagger file found\"}");
        }
        return ResponseEntity.ok(swaggerFile.getJsonContent());
    }

    private String cleanMenuName(String raw) {
        if (raw == null) {
            return "";
        }

        return raw
                .replaceAll("^[\\s\\-—–]+", "")
                .trim();
    }
}
