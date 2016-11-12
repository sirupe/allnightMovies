package com.allnightMovies.interceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.util.CookieGenerator;

public class LoginCookieAddIntercepter extends HandlerInterceptorAdapter {
	// 사용자 로그인시 
	// spring 인터셉터에서 쿠키 추가시 일반적인 Cookie 만으로는 추가되지 않고
	// CookieGenerator 를 사용하여야 추가가 가능하다.
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		System.out.println("로그인시 쿠키를 추가해줄지 말지 결정하는 인터셉터");
		String keepLogin = (String)modelAndView.getModelMap().get("keepLogin");
		if(keepLogin != null) {
			if(keepLogin.equals("check")) {
				CookieGenerator cookie = new CookieGenerator();
				cookie.setCookieMaxAge(30*24*60*60);
				cookie.setCookieName("userID");
				cookie.addCookie(response, (String) request.getSession().getAttribute("userID"));
				System.out.println("쿠키가 추가되었다.");
			}
		}
	}
}
