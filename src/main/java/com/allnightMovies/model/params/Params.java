package com.allnightMovies.model.params;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter 
public class Params {
	private HttpServletRequest request;
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
	
	private String  userName;
	private String  userID;
	private String  userIDCheck;
	private String  userPWD;
	private String  userRePWD;
	private String  userGender;
	private String  userEmail;
	private String  userBirth;
	private Integer confirmNum;
// 유저회원가입------------------------------------------------------------------------------
	private int    userStates;
	private String keepLogin;	// 로그인 유지 체크여부

// 패스워드 찾기------------------------------------------------------------------
	private String searchPwdUserID;
	private String searchPwdConfirmNum;
	private String searchPwdNewPwd;
	
// 아이디 찾기
	private String searchIdUserName;
	private String searchIdUserBirth;
	private String searchIdUserGender;
	private String searchIdUserEmail;
	private Integer searchIdUserConfirmNum;
	
// 비밀번호 변경	------------------------------------------------------------------
	private String myInfoPresentPwd;
	private String myInfoNewPwd;
	private String myInfoNewPwdCheck;
// 이메일 변경 ------------------------------------------------------------------
	private String myInfoChageEmail;
	private String myInfoEmailConfirmNum;

	private Integer pageboard;
// 회원탈퇴 	------------------------------------------------------------------
	private String withdrawUserPwd;
// 예매하기(ticketing)
	private int calendarMonth;
	private int CalendarYear;
	private String screeningDate;
	private String movieTitle;
	private int theater;
	private String movieTime;
// 공지사항 게시판
	private int noticeUserClickPage;
	private int noticeNo;

}