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
		String ajaxCall = (String)request.getHeader("AJAX");
		
	
			System.out.println("ajax??" + ajaxCall);
			if(session.getAttribute("userID") == null) {
				if(ajaxCall != null && ajaxCall.equals("true")) {
					response.sendError(500);
					return false;
				} else {
					session.setAttribute("requestURL", request.getRequestURL());
					response.sendRedirect("/movie/mainService/loginPage");
					return false;
				} 
				
			} else {
				return true;
			}
			
	}
}
