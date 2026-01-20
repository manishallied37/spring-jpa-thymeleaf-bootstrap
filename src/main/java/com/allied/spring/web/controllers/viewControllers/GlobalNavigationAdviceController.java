package com.allied.spring.web.controllers.viewControllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

import com.allied.spring.web.dto.MenuDTO;
import com.allied.spring.service.NavigationBarService;

@ControllerAdvice
public class GlobalNavigationAdviceController {

    private final NavigationBarService navigationService;

    public GlobalNavigationAdviceController(NavigationBarService navigationService) {
        this.navigationService = navigationService;
    }

    @ModelAttribute("navMenus")
    public List<MenuDTO> populateMenus(Authentication authentication) {

        if (authentication == null || !authentication.isAuthenticated()) {
            return Collections.emptyList();
        }

        return navigationService.getMenuForUser(authentication.getName());
    }
}

