package com.eKart.dao;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.eKart.model.LoginPOJO;

@Repository("objLoginDAO")
public class LoginDAOImpl implements LoginDAO {

	@Autowired
	private DataSource dataSource;

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	
	@Override
	public String ekartLogin(LoginPOJO objLoginPOJO) throws Exception {
		// TODO Auto-generated method stub
		String query="select * from login_tbl where username='"+objLoginPOJO.getUsername()+"'";
		
		return null;
	}

}
