package com.eKart.dao;

import com.eKart.model.AuthenticationPOJO;

public interface AuthenticationDAO {

	String ekartLogin(AuthenticationPOJO objLoginPOJO)throws Exception;
}
