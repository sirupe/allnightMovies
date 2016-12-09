package com.allnightMovies.interceptor;


import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class KeepLoginCheckInterceptor extends HandlerInterceptorAdapter {
	// 쿠키를 체크하여 로그인 유지상태인지 확인한다.
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		Cookie[] cookies = request.getCookies();
		if(cookies != null) {
			for(Cookie c : cookies) {
				if(c.getName().equals("userID")) {
					HttpSession session = request.getSession();
					session.setAttribute("userID", c.getValue());
				}
			}
		}
		return true;
	}
}