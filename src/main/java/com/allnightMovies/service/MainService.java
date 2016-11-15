 package com.allnightMovies.service;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.request;

import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.mail.Session;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

import com.allnightMovies.di.Action;
import com.allnightMovies.model.data.MainMenu;
import com.allnightMovies.model.data.MenuList;
import com.allnightMovies.model.params.Params;
import com.allnightMovies.utility.RegexCheck;
import com.allnightMovies.utility.SendEmail;

// @Service 어노테이션
// 스프링이 구동될 때 내부 메소드들이 미리 만들어져 올라가 있다.
// 메인 컨트롤러에서는 별도의 생성 없이 사용 가능.
@Service
public class MainService implements Action {
	private Params params;
//	private MenuList menuList = new MenuList();
	
//	@Autowired
//	MovieMapper movieMapper;
	@Autowired
	DBService service;

	// 여기서 온갖것들을 실행시켜주면 된다.
	// ModelAndView 객체에 view 단에서 찍어내야 하는 페이지들도 올려두고 ...
	@Override
	public ModelAndView execute(Params params) throws Throwable {
		Method method = this.getClass().getDeclaredMethod(params.getMethod());
		this.params = params;
		
								// invoke(Object this, Object...args)
		return (ModelAndView) method.invoke(this);
	}

/*****기본 template의 작동*****/
	// 기본 템플레이트 출력
	public ModelAndView getTemplate() throws Exception {
		List<MainMenu> list = this.service.getMenus();
		Map<String, MainMenu> mainMenuMap = new MenuList(list).getMainMenuMap();
		ModelAndView mav = new ModelAndView("template");
		String main = this.params.getMain() == null ? "movie" : this.params.getMain();
		
		String sub = this.params.getSub() == null ? mainMenuMap.get(main).getSubMenuList().get(0).getSubMenuPage() : this.params.getSub();
		mav.addObject("main", mainMenuMap.get(main));
		mav.addObject("sub", sub);
		mav.addObject("list", list);
		mav.addObject("directory", this.params.getDirectory());
		mav.addObject("page", this.params.getPage());
		mav.addObject("contentCSS", this.params.getContentCSS());
		mav.addObject("contentjs", this.params.getContentjs());
		mav.addObject("keepLogin", this.params.getKeepLogin());
		return mav;
	}

	// 로그인
	public ModelAndView login() throws Exception {
		String userID = this.service.login(this.params);
		HttpSession session = this.params.getSession();
		session.setAttribute("userID", userID);
		return this.getTemplate();
	}
	
	// 로그아웃
	public ModelAndView logout() throws Exception {
		this.params.getSession().invalidate();
		return this.getTemplate();
	}
	
/*****join 회원가입 시의 작동*****/	
	public ModelAndView idCheck() throws Exception {
		ModelAndView mav = new ModelAndView("join/resultText");

		String resultMessage = "사용이 가능한 아이디입니다.";
		String id = this.params.getUserIDCheck();
		boolean bool = true;
		
		if(!RegexCheck.idRegexCheck(id)) {
			resultMessage = "사용할 수 없는 아이디입니다.";
			bool = false;
		}
		if(this.service.idCheck(id) > 0) {
			resultMessage = "이미 사용중인 아이디입니다.";
			bool = false;
		}
		
		mav.addObject("result", resultMessage);
		mav.addObject("resultBool", bool);
		return mav;
	}

	public ModelAndView sendEmail() throws Exception {
		ModelAndView mav = new ModelAndView("join/resultText");
		Random rand = new Random();
		int randNum = rand.nextInt(900000) + 100000;
		System.out.println("인증번호 : " + randNum);
		
		
		
//		new SendEmail(String.valueOf(randNum), this.params.getUserEmail());
		
		
		
		String result = "인증번호가 발송되었습니다.";
		boolean bool = true;
		this.params.getSession().setAttribute("certificationNum", randNum);
		mav.addObject("result", result);
		mav.addObject("resultBool", bool);
		return mav;
	}

	public ModelAndView confirmCheck() throws Exception {
		ModelAndView mav = new ModelAndView("join/resultText");
		String result = "입력하신 인증번호와 일치합니다.";
		int saveConfirmNum = this.params.getConfirmNum();
		int inputConfirmNum = (int) this.params.getSession().getAttribute("certificationNum");
		boolean bool = true;
		if(!(saveConfirmNum == inputConfirmNum)) {
			result = "인증번호가 일치하지 않습니다. 다시 확인해주세요.";
			System.out.println(">>메인서비스 confirmCheck() : 저장된 번호-"+ this.params.getSession().getAttribute("certificationNum"));
			System.out.println(">>메인서비스 confirmCheck() : 입력된 번호-" + this.params.getConfirmNum());
			bool = false;
		}
		mav.addObject("result", result);
		mav.addObject("resultBool", bool);
		return mav;
	}
	
/**********PWD찾기 이메일 인증번호 발송 shin************/
	//PWD찾기 shin
	public ModelAndView searchID() throws Exception {
		ModelAndView mav = this.getTemplate();
		String searchUserID = this.params.getSearchUserID();
		Integer result = this.service.searchPWD(searchUserID);    //사용자 아이디 있으면  1, 없으면  0
		//브라우저당 1개
		HttpSession session =  this.params.getSession();
		session.setAttribute("userId", searchUserID);
		mav.addObject("result", result);
		return mav;
	}
	
	public ModelAndView searchPwdsendEmail() throws Exception {
		ModelAndView mav = this.getTemplate();
		Random rand = new Random();
		int randNum = rand.nextInt(900000) + 100000;
		//HttpSession 로 가져가서 String 으로 꺼내와
		HttpSession session = this.params.getSession();
		String searchUserID = (String)session.getAttribute("userId");
		String userEmail = this.service.searchEmail(searchUserID);
		
//		System.out.println("mainservice 인증번호> : " + randNum);
//		System.out.println("mainservice 사용자아이디 : " + searchUserID);
//		System.out.println("mainservice 사용자이메일 : " + userEmail);
		
		HttpSession sessionRand = this.params.getSession();
		sessionRand.setAttribute("randNum", randNum); 
		
		//new SendEmail 하면 인증번호와, userEmail을 들고 전송함
		new SendEmail(String.valueOf(randNum), userEmail);
		
		return mav;
	}
	
	//TODO 수정중
	public ModelAndView checkConfirmNum() throws Exception {
		ModelAndView mav = this.getTemplate();
		HttpSession session = this.params.getSession();
		Integer randNum = (Integer) session.getAttribute("randNum");

		boolean ischeckConfirmNum = false;
//		userCertificationNum
//		if(randNum == userCertificationNum) {
//			ischeckConfirmNum = true;
//		} else {
//			ischeckConfirmNum = false;
//		}
		//js에서 userCertificationNum 가지고와서 값 비교 해서 boolean으로 보내기
		
		mav.addObject("ischeckConfirmNum", ischeckConfirmNum);
		return mav;
	}
	
	public ModelAndView updatePWD() throws Exception {
		ModelAndView mav = this.getTemplate();
		return mav;
	}
}
