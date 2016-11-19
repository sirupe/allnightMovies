package com.allnightMovies.service;

import java.lang.reflect.Method;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allnightMovies.di.AsyncAction;
import com.allnightMovies.model.data.AsyncResult;
import com.allnightMovies.model.data.userInfo.UserPersonalInfoDTO;
import com.allnightMovies.model.params.Params;
import com.allnightMovies.utility.RegexCheck;

@Service
public class AsyncService implements AsyncAction {
	private Params params;
	@Autowired
	DBService dbService;
	
	@SuppressWarnings("rawtypes")
	@Override
	public AsyncResult asyncExcute(Params params) throws Throwable {
		Method method = this.getClass().getDeclaredMethod(params.getMethod());
		this.params = params;
		return (AsyncResult) method.invoke(this);
	}
/*****은정. join success check*****/	
	public AsyncResult<String> joinSuccessCheck() throws Exception {
		String userID = params.getUserIDCheck();
		String userPWD = params.getUserPWD();
		String userRePWD = params.getUserRePWD();
		String userName = params.getUserName();
		String userBirth = params.getUserBirth();
		
		AsyncResult<String> asyncResult = new AsyncResult<String>();
		
		boolean checkBool = true;
		
		// 중복되는 아이디인지 체크
		if(this.dbService.idCheck(userID) > 0) {
			System.out.println("중복되는 아이디인지 : " + (this.dbService.idCheck(userID) > 0));
			checkBool = false;
		}
		// 아이디 길이기 4~15자인지 체크
		if(userID.length() < 4 || userID.length() > 15) {
			System.out.println("아이디 길이기 4~15자 : " + (userID.length() < 4 || userID.length() > 15));
			checkBool = false;
		}
		// 아이디 regex 체크
		if(!RegexCheck.idRegexCheck(userID)) {
			System.out.println("아이디 regex : " + !RegexCheck.idRegexCheck(userID));
			checkBool = false;
		}
		// 비밀번호 regex 체크
		if(!RegexCheck.passwdRegexCheck(userPWD)) {
			System.out.println("비밀번호 regex : " + !RegexCheck.passwdRegexCheck(userPWD));
			checkBool = false;
		}
		// 비밀번호 8~15자 이내인지 체크
		if(userPWD.length() < 8 || userPWD.length() > 15) {
			System.out.println("비밀번호 8~15자 이내 : " + (userPWD.length() < 8 || userPWD.length() > 15));
			checkBool = false;
		}
		// pwd와 repwd 일치하는지 체크
		if(!userPWD.equals(userRePWD)) {
			System.out.println("pwd와 repwd 일치 : " + !userPWD.equals(userRePWD));
			checkBool = false;
		}
		// 이름 regex 체크
		if(userName == "") {
			checkBool = false;
		}
		if(!RegexCheck.nameRegecCheck(params.getUserName())) {
			System.out.println("이름 regex : " + !RegexCheck.nameRegecCheck(params.getUserName()));
			checkBool = false;
		}
		if(userBirth == "") {
			System.out.println("birth 가 공백");
			checkBool = false;
		}
		// 생일이 오늘날짜 이후인지 체크
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date today = new Date();
		Date inputDate = dateFormat.parse(params.getUserBirth());
		double diffDays = (today.getTime() - inputDate.getTime()) / (24 * 60 * 60 * 1000);
		if(diffDays < 1) {
			System.out.println("생일이 오늘날짜 이후 : " + (diffDays < 1) + " / diffDays : " + diffDays);
			checkBool = false;
		}
		// 이메일 regex 체크
		if(!RegexCheck.emailRegexCheck(params.getUserEmail())) {
			System.out.println("이메일 regex" + !RegexCheck.emailRegexCheck(params.getUserEmail()));
			checkBool = false;
		}
		// 인증을 받은 상태인지 체크
		checkBool = (boolean) params.getSession().getAttribute("isConfirm");
		
		String resultStr = null;
		
		if(checkBool) {
			UserPersonalInfoDTO personalDTO = new UserPersonalInfoDTO();
			personalDTO.setUserName(userName);
			personalDTO.setUserID(userID);
			personalDTO.setUserPWD(userPWD);
			personalDTO.setUserGender(this.params.getUserGender());
			personalDTO.setUserEmail(this.params.getUserEmail());
			personalDTO.setUserBirth(userBirth);
			this.dbService.insertJoinUserInfo(personalDTO);
			this.params.getSession().setAttribute("userID", this.params.getUserIDCheck());
			resultStr = "/movie/mainService/locationJoinSuccess";
		}
		resultStr = "false";
		
		asyncResult.setData(resultStr);
		return asyncResult;
	}
	
	@SuppressWarnings("rawtypes")
	public AsyncResult confirmNumInit() throws Exception {
		HttpSession session = this.params.getSession();
		session.setAttribute("isConfirm", false);
		System.out.println("");
		AsyncResult<String> async = new AsyncResult<String>();
		async.setData("<label class=\"join__resultText\" style=\"color:red;\">인증번호를 받아주세요.</label>");
		return async;
	}

}
