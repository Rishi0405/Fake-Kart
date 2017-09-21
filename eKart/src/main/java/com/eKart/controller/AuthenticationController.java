package com.eKart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.eKart.constants.AuthenticationConstants;
import com.eKart.model.AuthenticationPOJO;
import com.eKart.service.AuthenticationService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(value = AuthenticationConstants.CHECK_USER , description = "Related to the user information", produces = MediaType.APPLICATION_JSON_VALUE)
@RestController
@RequestMapping(value = AuthenticationConstants.CHECK_USER)
public class AuthenticationController {

	@Autowired
	AuthenticationService objLoginService;

	/*
	 * @RequestMapping(value = AuthenticationConstants.NEW_USER, method =
	 * RequestMethod.POST) public @ResponseBody String
	 */
	
	@ApiOperation(value = AuthenticationConstants.LOGIN_BASE_URL, notes="To validate the user before login")
	@ApiResponses(value = {
			@ApiResponse(code = org.apache.http.HttpStatus.SC_OK, message = "value of the given variable will be processed and displayed with the welcome note", response = String.class),
			@ApiResponse(code = org.apache.http.HttpStatus.SC_INTERNAL_SERVER_ERROR, message = "Internal Server Error", response = Error.class) })
	@RequestMapping(value = AuthenticationConstants.LOGIN_BASE_URL, method = RequestMethod.POST)
	public @ResponseBody String ekartLogin(@RequestBody AuthenticationPOJO objLoginPOJO) throws Exception {

		return objLoginService.ekartLogin(objLoginPOJO);

	}

}
