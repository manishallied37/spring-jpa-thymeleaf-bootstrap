package com.allied.spring.web.controllers.viewControllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class AdminController {

	@PostMapping(value = { "/", "/FormForNewAPI" })
	public String insertAdminData() {
		
		return "website/FormForNewAPI";
	}

}
