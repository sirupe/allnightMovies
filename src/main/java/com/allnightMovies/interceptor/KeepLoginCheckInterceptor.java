package com.allnightMovies.interceptor;


import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class KeepLoginCheckInterceptor extends HandlerInterceptorAdapter{
	// 쿠키를 체크하여 로그인 유지상태인지 확인한다.
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		System.out.println("로그인 유지 상태를 체크하는 인터셉터");
		Cookie[] cookies = request.getCookies();
		if(cookies != null) {
			for(Cookie c : cookies) {
				System.out.println("현재 쿠키의 이름은 : " + c.getName());
				System.out.println("현재 쿠키의 값은 : " + c.getValue());
				if(c.getName().equals("userID")) {
					System.out.println("쿠키의 이름은 userID 이다.");
					HttpSession session = request.getSession();
					session.setAttribute("userID", c.getValue());
				}
			}
		}
		return true;
	}
}