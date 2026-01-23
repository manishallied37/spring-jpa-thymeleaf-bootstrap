package com.allied.spring.service.searching;

import com.allied.spring.web.dto.UserDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

import java.util.Collections;

public class UserSearchResult {

    private Page<UserDto> userPage;
    private boolean numberFormatException;

    public UserSearchResult() {
        this.userPage = new PageImpl<>(Collections.emptyList());
        this.numberFormatException = false;
    }

    public UserSearchResult(Page<UserDto> userPage) {
        this.userPage = userPage;
        this.numberFormatException = false;
    }

    public UserSearchResult(Page<UserDto> userPage, boolean numberFormatException) {
        this.userPage = userPage;
        this.numberFormatException = numberFormatException;
    }

    public Page<UserDto> getUserPage() {
        return userPage;
    }

    public void setUserPage(Page<UserDto> userPage) {
        this.userPage = userPage;
    }

    public boolean isNumberFormatException() {
        return numberFormatException;
    }

    public void setNumberFormatException(boolean numberFormatException) {
        this.numberFormatException = numberFormatException;
    }
}
