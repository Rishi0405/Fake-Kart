package com.eKart.dao;

import com.eKart.model.LoginPOJO;

public interface LoginDAO {

	String ekartLogin(LoginPOJO objLoginPOJO)throws Exception;
}
