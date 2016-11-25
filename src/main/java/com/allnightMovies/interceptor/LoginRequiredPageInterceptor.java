package com.allnightMovies.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class LoginRequiredPageInterceptor extends HandlerInterceptorAdapter {
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		HttpSession session = request.getSession();
		
		if(session.getAttribute("userID") == null) {
			session.setAttribute("requestURL", request.getRequestURL());
			response.sendRedirect("/movie/mainService/loginPage");
			return false;
		} else {
			return true;
		}
	}
}
