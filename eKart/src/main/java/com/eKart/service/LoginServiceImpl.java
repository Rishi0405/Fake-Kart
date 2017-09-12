package com.eKart.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eKart.dao.LoginDAO;
import com.eKart.model.LoginPOJO;

@Service("objLoginService")
public class LoginServiceImpl implements LoginService {
	
	@Autowired
	LoginDAO objLoginDAO;

	@Override
	public String ekartLogin(LoginPOJO objLoginPOJO)throws Exception {
		// TODO Auto-generated method stub
		return objLoginDAO.ekartLogin(objLoginPOJO);
	}

}
