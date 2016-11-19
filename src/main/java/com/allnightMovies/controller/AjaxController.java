package com.allnightMovies.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.allnightMovies.di.AsyncAction;
import com.allnightMovies.model.data.AsyncResult;
import com.allnightMovies.model.params.Params;
import com.allnightMovies.service.DBService;


@RestController
public class AjaxController {
	@Autowired
	DBService service;
	
	@SuppressWarnings("rawtypes")
	@RequestMapping(value="/movie/async/{service}/{method}", method = {RequestMethod.GET, RequestMethod.POST})
	public AsyncResult ajaxRequest(
			@PathVariable("service") String service, 
			@PathVariable("method") String method,
			Params params,
			HttpServletRequest request) throws Throwable {
		HttpSession session = request.getSession();
		WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(session.getServletContext());
		AsyncAction action = (AsyncAction) context.getBean(service);
		params.setMethod(method);
		params.setRequest(request);
		params.setSession(session);
		
		AsyncResult result = action.asyncExcute(params);
		
		return result;
	}
}