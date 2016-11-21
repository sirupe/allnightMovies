package com.allnightMovies.service;

import java.lang.reflect.Method;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.json.HTTP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import com.allnightMovies.di.AsyncAction;
import com.allnightMovies.model.data.AsyncResult;
import com.allnightMovies.model.data.userInfo.UserPersonalInfoDTO;
import com.allnightMovies.model.data.userInfo.UserPersonalLoginInfoDTO;
import com.allnightMovies.model.params.Params;
import com.allnightMovies.utility.RegexCheck;
import com.allnightMovies.utility.SendEmail;
import com.allnightMovies.utility.UtilityEnums;
import com.sun.org.apache.xpath.internal.operations.Bool;

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
		asyncResult.setSuccess(checkBool);
		asyncResult.setData(resultStr);
		return asyncResult;
	}
	
	// 로그인
	public AsyncResult<String> login() throws Exception {
		UserPersonalLoginInfoDTO userLoginInfo = this.dbService.login(this.params);
		String result = null;
		boolean resultBool = true;
		System.out.println("여긴 안오는듯?");
		if(userLoginInfo.getUserStates() == 1) {
			if(this.params.getUserPWD().equals(userLoginInfo.getUserPWD())) {
				HttpSession session = this.params.getSession();
				session.setAttribute("userID", userLoginInfo.getUserID());
			} else {
				result = "비밀번호가 일치하지 않습니다.";
			}
		} else {
			result = "탈퇴하였거나 존재하지 않는 아이디입니다.";
		}
		AsyncResult<String> async = new AsyncResult<String>();
		async.setData(result);
		async.setSuccess(resultBool);
		return async;
	}
/*****연종. chagePwd success check*****/	
	public AsyncResult<String> chagePwdSuccessCheck() throws Exception {
		String newPWD = params.getMyInfoNewPwd();
		String newPWDcheck = params.getMyInfoNewPwdCheck();
		String presentPWD = params.getMyInfoPresentPwd();
		AsyncResult<String> asyncResult = new AsyncResult<String>();
		
		//사용자아이디 session  
		HttpSession session = params.getSession();
		String myInfoID = (String)session.getAttribute("userID");
		String dbPresentPWD = this.dbService.selectUserPWD(myInfoID);
		
		boolean isCheck = true;
		String resultStr = "false";
		
		//현재PWD 사용자입력PWD 동일한지 체크
		if(!(presentPWD.equals(dbPresentPWD))) {
			isCheck =  false;
		}
		//바꿀PWD 바꿀PWD확인 동일한지 체크
		if(!(newPWD.equals(newPWDcheck))) {
			isCheck =  false;
		}
		//현재비밀번호  형식체크
		if(!RegexCheck.passwdRegexCheck(presentPWD) || !RegexCheck.passwdRegexCheck(newPWD)) {
			isCheck =  false;
		}
		//현재비밀번호 8~15자 이내인지 체크
		if(presentPWD.length() < 8 || presentPWD.length() > 15 || newPWD.length() < 8 || newPWD.length() > 15) {
			isCheck =  false;
		}
		
		if(isCheck) {
			this.dbService.updateNewPwd(myInfoID, newPWD);
			resultStr = "/movie/mainService/myInfoChagePwdResult";
			this.params.getSession().invalidate();
		}
		
		asyncResult.setData(resultStr);
		System.out.println("asyncResult 비동기결과: " + resultStr);
		return asyncResult;
	}

/*****연종. 이메일 변경 인증번호 발송 *****/
//TODO 수정중 화면이안뜸
	public AsyncResult<String> sendEmailConfirmNum() throws Exception {
		AsyncResult<String> asyncResult = new AsyncResult<String>();
		Random rand = new Random();
		int randNum = rand.nextInt(900000) + 100000;
		System.out.println("AsyncResult 인증번호> : " + randNum);
		
		HttpSession session = this.params.getSession();
		String userID = (String)session.getAttribute("userID");
		String userEmail = this.dbService.searchEmail(userID);
		HttpSession sessionRandNum = this.params.getSession();
		
		sessionRandNum.setAttribute("randNum", randNum);
//		new SendEmail(String.valueOf(randNum), userEmail); 
		
		return asyncResult;
		
	}	
/***********연종. 회원탈퇴***************/	
	public AsyncResult<String> userWithdraw() throws Exception {
		AsyncResult<String> asyncResult = new AsyncResult<String>();
		
		System.out.println("userWithdraw");
		
		String withdrawUserpwd = this.params.getWithdrawUserPwd();
		String withdrawResult = "false";
		
		HttpSession session = this.params.getSession();
		String myInfoID = (String)session.getAttribute("userID");
		String presentUserPWD = this.dbService.selectUserPWD(myInfoID);
		
		if(withdrawUserpwd.equals(presentUserPWD)) {
			System.out.println("if 진입 AsyncResult 결과 >> " + withdrawUserpwd.equals(presentUserPWD));
			System.out.println(this.dbService.updateWithdraw(myInfoID));
			this.params.getSession().invalidate();
			withdrawResult =  "/movie/mainService/getTemplate";
			
		}
		asyncResult.setData(withdrawResult);
		System.out.println("if 밖  AsyncResult >>" + asyncResult.getData());
		return asyncResult;
	}
	
	
	//인증번호 받았는지 2번체크
	@SuppressWarnings("rawtypes")
	public AsyncResult confirmNumInit() throws Exception {
		HttpSession session = this.params.getSession();
		session.setAttribute("isConfirm", false);
		System.out.println("");
		AsyncResult<String> async = new AsyncResult<String>();
		async.setData("<label class=\"join__resultText\" style=\"color:red;\">인증번호를 받아주세요.</label>");		
		
		return async;
	}
	
	/**수진 이메일 인증번호 **/
	//이메일
	@SuppressWarnings("rawtypes")
	public AsyncResult ConfirmNumberSend() throws Exception {
		System.out.println("온거냐");
		String result = null;
		Boolean isCheckResult = true;
		
		String searchIdUserEmail = this.params.getSearchIdUserEmail();
		System.out.println("searchIdUserEmail : " + searchIdUserEmail);
		
		//이메일 세션 저장
		HttpSession session = this.params.getSession();
		session.setAttribute("searchIdUserEmail", searchIdUserEmail);
		
		if(searchIdUserEmail == "") {
			result = "정확히 입력해주세요.";
			isCheckResult = false;
		}
		if(!RegexCheck.emailRegexCheck(params.getSearchIdUserEmail())) {
			result = "이메일 형식이 맞지 않습니다.";
			isCheckResult = false;
		}
		
		if(isCheckResult) {
			//인증번호생성
			Random randomNum = new Random();
			int confirmNumRandom = randomNum.nextInt(900000) + 100000;
			System.out.println(confirmNumRandom + " : 인증번호");
			new SendEmail(String.valueOf(confirmNumRandom), searchIdUserEmail);
			
			//인증번호 세션에 저장
			//인증번호 저장
			session.setAttribute("confirmNumRandom", confirmNumRandom);
			session.setAttribute("currentConfirmTime", System.currentTimeMillis());
			session.setAttribute("isCheckNumber", false);
			System.out.println(session + "session");
			
			System.out.println("인증번호 세션에 저장확인 :" + this.params.getSession().getAttribute("confirmNumRandom"));
			result = "인증번호가 전송되었습니다 :) 확인 부탁드립니다.";
			System.out.println(result + " : 결과");
		
		} else {
			result = "인증번호전송이 실패되었습니다. 다시 확인해주세요 :(";
		}
		
		AsyncResult<String> async = new AsyncResult<String>();
		async.setData(result);
		return async;
	}
	
	/*******수진 인증번호체크 수진*********/
	public AsyncResult<String> confirmNumberCheck() throws Exception {
		String result = "입력하신 인증번호와 일치합니다.";
		int searchIdUserConfirmNum = this.params.getSearchIdUserConfirmNum();
		System.out.println(searchIdUserConfirmNum + " : 사용자가 입력한 인증번혼"); // 인증번호 보낼때 그 인증번호 불러와서 비교하기..!
		//세션에 집어넣기
		HttpSession session = this.params.getSession();
		Integer sessionSaveNum = (Integer) session.getAttribute("confirmNumRandom");
		
		System.out.println(sessionSaveNum + "저장된 인증번호");
		boolean bool = true;
		
		//인증번호가 비었을 경우
		if(searchIdUserConfirmNum == 0 || sessionSaveNum == null) {
			bool = false;
			result = "정확히 입력 바랍니다.";
			System.out.println(result + " : 결과");
		} else if(sessionSaveNum != searchIdUserConfirmNum) {
			bool = false;
			result = "인증번호가 일치 하지않습니다.";
			System.out.println(result + " : 결과");
		} else {
			bool = true;
			result = "인증번호 일치합니다.";
			System.out.println(result + " : 결과");
			session.setAttribute("confirmNumRandom", 0);
			//session.setAttribute(name, value);
		}
		
		AsyncResult<String> async = new AsyncResult<String>();
		System.out.println(result + " : 결과");
		async.setData(result);
		return async;
		
	}
	//마지막 버튼 눌렀을때
	
	
}
