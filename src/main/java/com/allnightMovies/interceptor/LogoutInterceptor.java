package com.allnightMovies.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.util.CookieGenerator;

// 로그아웃시 로그인유지 쿠키 삭제
public class LogoutInterceptor extends HandlerInterceptorAdapter {
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		CookieGenerator cookie = new CookieGenerator();
		cookie.setCookieMaxAge(0);
		cookie.setCookieName("userID");
		cookie.addCookie(response, null);
	}
}
