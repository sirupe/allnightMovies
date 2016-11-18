package com.allnightMovies.service;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allnightMovies.model.params.Params;
import com.allnightMovies.utility.RegexCheck;

@Service
public class SubService {
	@Autowired
	DBService dbService;
	
/**************************************JOIN**************************************/
	public boolean joinSuccessCheck(Params params) throws Exception {
		String userID = params.getUserIDCheck();
		String userPWD = params.getUserPWD();
		String userRePWD = params.getUserRePWD();
		String userName = params.getUserName();
		String userBirth = params.getUserBirth();
		// 중복되는 아이디인지 체크
		if(this.dbService.idCheck(userID) > 0) {
			System.out.println("중복되는 아이디인지 : " + (this.dbService.idCheck(userID) > 0));
			return false;
		}
		// 아이디 길이기 4~15자인지 체크
		if(userID.length() < 4 || userID.length() > 15) {
			System.out.println("아이디 길이기 4~15자 : " + (userID.length() < 4 || userID.length() > 15));
			return false;
		}
		// 아이디 regex 체크
		if(!RegexCheck.idRegexCheck(userID)) {
			System.out.println("아이디 regex : " + !RegexCheck.idRegexCheck(userID));
			return false;
		}
		// 비밀번호 regex 체크
		if(!RegexCheck.passwdRegexCheck(userPWD)) {
			System.out.println("비밀번호 regex : " + !RegexCheck.passwdRegexCheck(userPWD));
			return false;
		}
		// 비밀번호 8~15자 이내인지 체크
		if(userPWD.length() < 8 || userPWD.length() > 15) {
			System.out.println("비밀번호 8~15자 이내 : " + (userPWD.length() < 8 || userPWD.length() > 15));
			return false;
		}
		// pwd와 repwd 일치하는지 체크
		if(!userPWD.equals(userRePWD)) {
			System.out.println("pwd와 repwd 일치 : " + !userPWD.equals(userRePWD));
			return false;
		}
		// 이름 regex 체크
		if(userName == "") {
			return false;
		}
		if(!RegexCheck.nameRegecCheck(params.getUserName())) {
			System.out.println("이름 regex : " + !RegexCheck.nameRegecCheck(params.getUserName()));
			return false;
		}
		if(userBirth == "") {
			System.out.println("birth 가 공백");
			return false;
		}
		// 생일이 오늘날짜 이후인지 체크
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date today = new Date();
		Date inputDate = dateFormat.parse(params.getUserBirth());
		double diffDays = (today.getTime() - inputDate.getTime()) / (24 * 60 * 60 * 1000);
		if(diffDays < 1) {
			System.out.println("생일이 오늘날짜 이후 : " + (diffDays < 1) + " / diffDays : " + diffDays);
			return false;
		}
		// 이메일 regex 체크
		if(!RegexCheck.emailRegexCheck(params.getUserEmail())) {
			System.out.println("이메일 regex" + !RegexCheck.emailRegexCheck(params.getUserEmail()));
			return false;
		}
		// 인증을 받은 상태인지 체크
		System.out.println("인증을 받은 상태인지" +  params.getSession().getAttribute("isConfirm"));
		return (boolean) params.getSession().getAttribute("isConfirm");
	} 
	
/**********************************MYINFO***************************************/
	public boolean changePwdCheck(Params params) throws Exception {
		String newPWD = params.getMyInfoNewPwd();
		String newPWDcheck = params.getMyInfoNewPwdCheck();
		String presentPWD = params.getMyInfoPresentPwd();
		//사용자아이디 session  
		HttpSession session = params.getSession();
		String myInfoID = (String)session.getAttribute("userID");
		String dbPresentPWD = this.dbService.selectUserPWD(myInfoID);
		
		System.out.println("subservie newPWD" + newPWD);
		System.out.println("subservie newPWD" + newPWDcheck);
		//현재PWD 사용자입력PWD 동일한지 체크
		if(!(presentPWD.equals(dbPresentPWD))) {
			return false;
		}
		//바꿀PWD 바꿀PWD확인 동일한지 체크
		if(!(newPWD.equals(newPWDcheck))) {
			return false;
		}
		//현재비밀번호  형식체크
		if(!RegexCheck.passwdRegexCheck(presentPWD) || !RegexCheck.passwdRegexCheck(newPWD)) {
			return false;
		}
		//현재비밀번호 8~15자 이내인지 체크
		if(presentPWD.length() < 8 || presentPWD.length() > 15 || newPWD.length() < 8 || newPWD.length() > 15) {
			return false;
		}
		
		return true;
	}
/********************************************************************************/
}
