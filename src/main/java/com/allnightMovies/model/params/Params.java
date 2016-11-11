package com.allnightMovies.model.params;


import javax.servlet.http.HttpSession;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class Params {
	private HttpSession session;
	
	private String main;
	private String sub;
	private String method;
//메뉴 경로 및 메소드 호출시 사용--------------------------------------------------------------	
	
	private String directory;
	private String page;
	private String contentCSS;
	private String contentjs;
	
//메뉴경로가 아닌 페이지 호출시---------------------------------------------------------------	
	
	private String userName;
	private String userID;
	private String userPWD;
	private String userGender;
	private String userEmailID;
	private String userEmailAddr;
	private String userBirth;
// 유저회원가입--------------------------------------------------------------------------	
}