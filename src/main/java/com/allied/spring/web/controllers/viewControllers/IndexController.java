package com.allied.spring.web.controllers.viewControllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.request.WebRequest;

import com.allied.spring.web.dto.UserDto;

/**
 * Created by Keno&Kemo on 30.09.2017..
 */

@Controller
@RequestMapping
public class IndexController {
	
	/*
	 * @GetMapping("/") public String indexTo() {
	 * System.out.println("hitting default controller-------------------"); return
	 * "index";
	 * 
	 * }
	 */
	 
	  
	@GetMapping("/index")
    public String index(){
        return "website/index";
    }

    @GetMapping(value = "/login")
    public String login (){
        return "website/login";
    }

    @GetMapping(value = "/register")
    public String showRegistrationForm(WebRequest request, Model model) {
        UserDto userDto = new UserDto();
        model.addAttribute("userDto", userDto);
        return "website/register";
    }
    
   
	
	 
}
