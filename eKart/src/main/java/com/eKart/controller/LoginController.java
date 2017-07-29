package com.eKart.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

	@RequestMapping(value="/api/ekartLogin/firstCall",method=RequestMethod.POST)
	public String ekartLogin(){
		
		
		return "Welcome To EKART";
		
		
	}
	
	
	
}
