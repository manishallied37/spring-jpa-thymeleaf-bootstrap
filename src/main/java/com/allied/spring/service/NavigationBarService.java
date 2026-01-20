package com.allied.spring.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.allied.spring.domain.NavigationRepository;
import com.allied.spring.web.dto.MenuDTO;

@Service
public class NavigationBarService {

    private final NavigationRepository repository;

    public NavigationBarService(NavigationRepository repository) {
        this.repository = repository;
    }

    public List<MenuDTO> getMenuForUser(String username) {

        List<MenuDTO> flatMenus = repository.findMenusByUsername(username);
        return buildMenuTree(flatMenus);
    }

    private List<MenuDTO> buildMenuTree(List<MenuDTO> flatMenus) {

        Map<Long, MenuDTO> menuMap = new HashMap<>();
        List<MenuDTO> rootMenus = new ArrayList<>();

        for (MenuDTO menu : flatMenus) {
            menu.setChildren(new ArrayList<>());
            menuMap.put(menu.getId(), menu);
        }

        for (MenuDTO menu : flatMenus) {
            if (menu.getParentId() == null) {
                rootMenus.add(menu);
            } else {
                MenuDTO parent = menuMap.get(menu.getParentId());
                if (parent != null) {
                    parent.getChildren().add(menu);
                }
            }
        }

        return rootMenus;
    }
}