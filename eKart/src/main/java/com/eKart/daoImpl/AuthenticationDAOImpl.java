package com.eKart.daoImpl;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.eKart.dao.AuthenticationDAO;
import com.eKart.model.AuthenticationPOJO;

@Repository("objLoginDAO")
public class AuthenticationDAOImpl implements AuthenticationDAO {

	@Autowired
	private DataSource dataSource;

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	
	@Override
	public String ekartLogin(AuthenticationPOJO objLoginPOJO) throws Exception {
		// TODO Auto-generated method stub
		String query="select * from login_tbl where username='"+objLoginPOJO.getUsername()+"'";
		
		return null;
	}

}
