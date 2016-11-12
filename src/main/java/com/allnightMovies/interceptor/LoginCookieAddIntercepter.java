package com.allnightMovies.interceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class LoginCookieAddIntercepter extends HandlerInterceptorAdapter {
	// 사용자 로그인시 
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		System.out.println("로그인시 쿠키를 추가해줄지 말지 결정해는 인터셉터");
		String keepLogin = (String)modelAndView.getModelMap().get("keepLogin");
		if(keepLogin != null) {
			if(keepLogin.equals("check")) {
				Cookie cookie = new Cookie("userID", (String) request.getSession().getAttribute("userID"));
				cookie.setMaxAge(30*24*60*60);
				response.addCookie(cookie);
			}
		}
	}
}
