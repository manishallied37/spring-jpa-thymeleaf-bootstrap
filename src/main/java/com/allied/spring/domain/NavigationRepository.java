package com.allied.spring.domain;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.allied.spring.web.dto.MenuDTO;

@Repository
public class NavigationRepository {

    private final JdbcTemplate jdbcTemplate;

    public NavigationRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<MenuDTO> findMenusByUsername(String username) {

    	String sql =
    		    "SELECT " +
    		    " m.id, " +
    		    " m.parent_id, " +
    		    " m.title, " +
    		    " m.route, " +
    		    " m.icon, " +
    		    " m.display_order, " +
    		    " s.json_content " +
    		    "FROM navigation_menu m " +
    		    "JOIN menu_role_mapping mr ON m.id = mr.menu_id " +
    		    "JOIN users_roles ur ON mr.role_id = ur.role_id " +
    		    "LEFT JOIN swaggerfile s ON m.title = s.api_name " +
    		    "JOIN user u ON ur.user_id = u.id " +
    		    "WHERE u.name = ? " +
    		    "AND m.is_active = true " +
    		    "ORDER BY COALESCE(m.parent_id, m.id), m.display_order";

        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            MenuDTO menu = new MenuDTO();
            menu.setId(rs.getLong("id"));
            menu.setParentId(rs.getObject("parent_id", Long.class));
            menu.setTitle(rs.getString("title"));
            menu.setRoute(rs.getString("route"));
            menu.setIcon(rs.getString("icon"));
            menu.setDisplayOrder(rs.getInt("display_order"));
            menu.setJsonContent(rs.getString("json_content"));
            return menu;
        }, username);
    }
}