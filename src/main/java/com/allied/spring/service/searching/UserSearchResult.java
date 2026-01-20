package com.allied.spring.service.searching;

import org.springframework.data.domain.Page;

import com.allied.spring.web.dto.UserDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserSearchResult {
    private Page<UserDto> userPage;
    private boolean numberFormatException;
	public UserSearchResult(Page<UserDto> findAllPageable, boolean b) {
		// TODO Auto-generated constructor stub
	}
	public UserSearchResult() {
		// TODO Auto-generated constructor stub
	}
	public Page<UserDto> getUserPage() {
		// TODO Auto-generated method stub
		return null;
	}
	public void setUserPage(Page<UserDto> findAllPageable) {
		// TODO Auto-generated method stub
		
	}
	public boolean isNumberFormatException() {
		// TODO Auto-generated method stub
		return false;
	}
}
