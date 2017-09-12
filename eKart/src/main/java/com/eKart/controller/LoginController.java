package com.eKart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.eKart.constants.LoginConstants;
import com.eKart.model.LoginPOJO;
import com.eKart.service.LoginService;

@RestController
@RequestMapping(value=LoginConstants.CHECK_USER)
public class LoginController {

	@Autowired
	LoginService objLoginService;
	
	
	@RequestMapping(value=LoginConstants.LOGIN_BASE_URL,method=RequestMethod.POST)
	public @ResponseBody String ekartLogin(@RequestBody LoginPOJO objLoginPOJO)throws Exception{
		
		
		return objLoginService.ekartLogin(objLoginPOJO);
		
		
	}
	
	
	
}
