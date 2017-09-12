package com.eKart.service;

import org.springframework.web.bind.annotation.RequestBody;

import com.eKart.model.LoginPOJO;

public interface LoginService {

	String ekartLogin(@RequestBody LoginPOJO objLoginPOJO)throws Exception;
	
}
