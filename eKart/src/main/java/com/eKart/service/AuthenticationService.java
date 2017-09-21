package com.eKart.service;

import org.springframework.web.bind.annotation.RequestBody;

import com.eKart.model.AuthenticationPOJO;

public interface AuthenticationService {

	String ekartLogin(@RequestBody AuthenticationPOJO objLoginPOJO)throws Exception;
	
}
