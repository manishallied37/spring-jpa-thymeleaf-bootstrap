package com.allied.spring.web.controllers.viewControllers;

import com.allied.spring.service.NavigationBarService;
import com.allied.spring.web.dto.MenuDTO;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GlobalNavigationDebugController {

    private final NavigationBarService navigationService;

    public GlobalNavigationDebugController(NavigationBarService navigationService) {
        this.navigationService = navigationService;
    }

    @GetMapping("/debug/menu")
    public List<MenuDTO> debugMenu(Authentication authentication) {
        return navigationService.getMenuForUser(authentication.getName());
    }
}

