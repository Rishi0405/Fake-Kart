package com.eKart.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eKart.dao.AuthenticationDAO;
import com.eKart.model.AuthenticationPOJO;
import com.eKart.service.AuthenticationService;

@Service("objLoginService")
public class AuthenticationServiceImpl implements AuthenticationService {
	
	@Autowired
	AuthenticationDAO objLoginDAO;

	@Override
	public String ekartLogin(AuthenticationPOJO objLoginPOJO)throws Exception {
		// TODO Auto-generated method stub
		return objLoginDAO.ekartLogin(objLoginPOJO);
	}

}
