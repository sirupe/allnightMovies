 package com.allnightMovies.service;

import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import com.allnightMovies.di.Action;
import com.allnightMovies.model.data.AsyncResult;
import com.allnightMovies.model.data.MainMenu;
import com.allnightMovies.model.data.MenuList;
import com.allnightMovies.model.data.movieInfo.MovieShowTimesMap;
import com.allnightMovies.model.data.movieInfo.MovieShowTitleDTO;
import com.allnightMovies.model.data.movieInfo.MovieshowTableDTO;
import com.allnightMovies.model.data.userInfo.UserPersonalInfoDTO;
import com.allnightMovies.model.params.Params;
import com.allnightMovies.utility.RegexCheck;
import com.allnightMovies.utility.SendEmail;
import com.allnightMovies.utility.UtilityEnums;

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
	DBService dbService;
	
	// 여기서 온갖것들을 실행시켜주면 된다.
	// ModelAndView 객체에 view 단에서 찍어내야 하는 페이지들도 올려두고 ...
	@Override
	public ModelAndView execute(Params params) throws Throwable {
		Method method = this.getClass().getDeclaredMethod(params.getMethod());
		this.params = params;
		
								// invoke(Object this, Object...args)
		return (ModelAndView) method.invoke(this);
	}

/*****은정. 기본 template의 작동*****/
	// 기본 템플레이트 출력
	public ModelAndView getTemplate() throws Exception {
		List<MainMenu> list = this.dbService.getMenus();
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
		String userID = this.dbService.login(this.params);
		HttpSession session = this.params.getSession();
		session.setAttribute("userID", userID);
		return this.getTemplate();
	}
	
	// 로그아웃
	public ModelAndView logout() throws Exception {
		this.params.getSession().invalidate();
		return this.getTemplate();
	}
	
/*****은정. join 회원가입 시의 작동*****/	
	public ModelAndView idCheck() throws Exception {
		ModelAndView mav = new ModelAndView("join/resultText");

		String resultMessage = "사용이 가능한 아이디입니다.";
		String id = this.params.getUserIDCheck();
		boolean bool = true;
		
		if(!RegexCheck.idRegexCheck(id)) {
			resultMessage = "사용할 수 없는 아이디입니다.";
			bool = false;
		}
		if(this.dbService.idCheck(id) > 0) {
			resultMessage = "이미 사용중인 아이디입니다.";
			bool = false;
		}
		
		mav.addObject("result", resultMessage);
		mav.addObject("resultBool", bool);
		mav.addObject("resultBoolID", "id-bool");
		return mav;
	}

	public ModelAndView sendEmail() throws Exception {
		ModelAndView mav = new ModelAndView("join/resultText");
		HttpSession session = this.params.getSession();
		
		// 인증번호 생성
		Random rand = new Random();
		int randNum = rand.nextInt(900000) + 100000;
		System.out.println(">>메인서비스 sendEmail() 인증번호 : " + randNum);
		
		// 메일 발송
		new SendEmail(String.valueOf(randNum), this.params.getUserEmail());
		String result = "인증번호가 발송되었습니다.";
		System.out.println("인증번호 : " + randNum);
		
		boolean bool = true;
		
		// 세션에 인증번호와 인증을 보낸 시간 등록
		session.setAttribute("certificationNum", randNum);
		session.setAttribute("confirmTime", System.currentTimeMillis());
		
		System.out.println("세션에 저장 : " + this.params.getSession().getAttribute("certificationNum"));
		mav.addObject("result", result);
		mav.addObject("resultBool", bool);
		mav.addObject("resultBoolID", "email-bool");
		return mav;
	}

	public ModelAndView confirmCheck() throws Exception {
		ModelAndView mav = new ModelAndView("join/resultText");
		String result = "입력하신 인증번호와 일치합니다.";
		int inputConfirmNum = this.params.getConfirmNum();
		HttpSession session = this.params.getSession();
		Integer saveConfirmNum = session.getAttribute("certificationNum") == null ? null : (int) session.getAttribute("certificationNum");
		
//		System.out.println("사용자가 인증을 받은 시간 : " + (long)session.getAttribute("confirmTime"));
//		System.out.println("사용자가 인증번호를 입력한 시간 : " + System.currentTimeMillis());
//		System.out.println("인증번호 시간차 : " + (System.currentTimeMillis() - (long)session.getAttribute("confirmTime")));
//		System.out.println("인증번호 제한시간 : " + UtilityEnums.CONFIRM_TIME.getConfirmTime());
		
		boolean bool = true;
		
		// 인증을 보낸지 3분이 지났다면
		if(System.currentTimeMillis() - (Long)session.getAttribute("confirmTime") > UtilityEnums.CONFIRM_TIME.getConfirmTime()) {
			session.removeAttribute("certificationNum");
			session.setAttribute("confirmTime", 0);
			result = "입력 시간이 초과되었습니다. 인증번호를 다시 받아주세요.";
			bool = false;
		
		// 인증번호를 보낸 적이 없다면	
		} else if(saveConfirmNum == 0 || saveConfirmNum == null) {
			result = "인증번호를 받아주세요.";
			bool = false;
			
		// 인증번호가 불일치하다면
		} else if(!(saveConfirmNum == inputConfirmNum)) {
			result = "인증번호가 일치하지 않습니다.";
			System.out.println(">>메인서비스 confirmCheck() : 저장된 번호-"+ this.params.getSession().getAttribute("certificationNum"));
			bool = false;
			
		} else {
			session.setAttribute("certificationNum", 0);
			session.setAttribute("isConfirm", true);
		}
		mav.addObject("result", result);
		mav.addObject("resultBool", bool);
		mav.addObject("resultBoolID", "confirm-bool");
		
		return mav;
	}

	public ModelAndView confirmNumInit() throws Exception {
		ModelAndView mav = new ModelAndView();
		HttpSession session = this.params.getSession();
		session.setAttribute("isConfirm", false);
		return mav;
	}
		
	public ModelAndView locationJoinSuccess() throws Exception {
		this.params.setDirectory("join");
		this.params.setPage("joinResult");
		this.params.setContentCSS("join/joinSuccess");
		this.params.setContentjs("join/joinSuccess");
		System.out.println(this.params.getSession().getAttribute("userID"));
		return this.getTemplate();	
	}

	@Override
	public String executeString(Params params) throws Throwable {
		return null;
	}
	
/*******연종. PWD찾기 SHIN*******/
	//고쳐야할것★★★ 사용자가 입력한 아이디 값을 session에 저장시키는것이 아니라
	//DB에서 확인된 아이디를 가져와session에 저장 시켜야 함 정확하게 하기위해!!!!!!
	public ModelAndView searchID() throws Exception {
		ModelAndView mav = this.getTemplate();
		String searchPwdUserID = this.params.getSearchPwdUserID();
		Integer result = this.dbService.searchPWD(searchPwdUserID);
		HttpSession session =  this.params.getSession();	
		session.setAttribute("userId", searchPwdUserID);
		mav.addObject("result", result);
		return mav;
	}
	
/*******연종. PWD찾기 SHIN*******/	
	public ModelAndView searchPwdsendEmail() throws Exception {
		ModelAndView mav = this.getTemplate();
		Random rand = new Random();
		int randNum = rand.nextInt(900000) + 100000;
		System.out.println("mainservice 인증번호> : " + randNum);
		
		HttpSession session = this.params.getSession();
		String searchPwdUserID = (String)session.getAttribute("userId");
		String userEmail = this.dbService.searchEmail(searchPwdUserID);
		HttpSession sessionRandNum = this.params.getSession();
		sessionRandNum.setAttribute("randNum", randNum);
//		new SendEmail(String.valueOf(randNum), userEmail); 
		return mav;
	}
	
/*******연종. PWD찾기 SHIN*******/
	public ModelAndView checkConfirmNum() throws Exception {
		ModelAndView mav = new ModelAndView("searchPwd/searchPwdConfirmResult");
		String userConfirmNum = this.params.getSearchPwdConfirmNum();
		HttpSession session = this.params.getSession();
		String serverRandNum = String.valueOf(session.getAttribute("randNum"));
		boolean ischeckConfirmNum = true;
		
		if(serverRandNum.equals(userConfirmNum)) {
			ischeckConfirmNum = true;
		} else {
			ischeckConfirmNum = false;
		}
		mav.addObject("ischeckConfirmNum", ischeckConfirmNum);
		mav.addObject("ischeckConfirmNumID", "ischeck-confirmnum-id");
		return mav;
	}

/*******연종. PWD찾기 SHIN*******/
	public ModelAndView updatePWD() throws Exception {
		HttpSession session = this.params.getSession();
		String searchPwdUserID = (String)session.getAttribute("userId");
		String searchPwdNewPwd = this.params.getSearchPwdNewPwd();
		this.dbService.updateNewPwd(searchPwdUserID, searchPwdNewPwd);
		this.params.setDirectory("searchPwd");
		this.params.setPage("searchPwdChangeCompleted");
		session.removeAttribute("userId");
		return this.getTemplate();
	}

/*****수진. 상영시간표List*****/
	public ModelAndView showtimes() throws Exception {
		this.params.setContentCSS("reservation/timeTable");
		this.params.setContentjs("reservation/timeTable");
		List<MovieShowTimesMap> movieTimeTable = this.dbService.showtimes();
		
		for(int i = 0, size=movieTimeTable.size(); i < size; i++) {
			MovieShowTimesMap showTime = movieTimeTable.get(i);
			List<MovieShowTitleDTO> showTitle = showTime.getMovieShowTitleDTO();
			
			for(int j = 0, JSize = showTitle.size(); j <JSize; j++) {
				MovieShowTitleDTO titleDTO = showTitle.get(j);

				List<MovieshowTableDTO> showTable = titleDTO.getMovieshowTableDTO();
				for(int k = 0, kSize = showTable.size(); k < kSize; k++) {

				}
			}
		}
		ModelAndView mav = this.getTemplate();
		mav.addObject("movieTimeTable", movieTimeTable);
		return mav;
	}
	
/*****은정. ticketing *****/
	public ModelAndView ticketing() throws Exception {
		this.params.setDirectory("reservation");
		this.params.setPage("ticketing");
		this.params.setContentCSS("ticketing");
		this.params.setContentjs("ticketing");
		return this.getTemplate();
	}
	
	public ModelAndView cal() throws Exception {
		this.params.setDirectory("reservation");
		this.params.setPage("calendar");
		this.params.setContentjs("calendar");
		this.params.setContentCSS("calendar");
		return this.getTemplate();
	}
	
/*******연종. MyINFO SHIN*******/	
	public ModelAndView viewMyInfo() throws Exception {
		ModelAndView mav = this.getTemplate();
		HttpSession session = this.params.getSession();
		String myInfoID = (String)session.getAttribute("userID");
		UserPersonalInfoDTO myInfoDTO = this.dbService.selectMyInfo(myInfoID);
		mav.addObject("myInfoList", myInfoDTO);
		return mav;
	}
	
/*******연종. MyINFO SHIN*******/		
	public ModelAndView myInfoChagePwdResult() throws Exception {
		this.params.setDirectory("myInfo");
		this.params.setPage("myInfoChagePwdResult");
		this.params.setContentCSS("myInfo/changePwd");
		this.params.setContentjs("myInfo/changePwd");
		return this.getTemplate();	
	}

/*******연종. MOVIE CURRENT FIRM 현재상영작*******/	
	public ModelAndView currentFilm() throws Exception{
		this.params.setDirectory("movie");
		this.params.setPage("currentFilm");
		this.params.setContentCSS("movie/currentFilm");
		this.params.setContentjs("movie/currentFilm");
		//1. 디비로가서 현재 상영중인 영화 갯수를 구하공...
		//2. 한줄에 영화 3개씩 뿌려줄것이다.
		//3. 예매순으로 시작할것인지 평점순으로 시작할 것 인지..
		return this.getTemplate();	
	}
/*******연종. MOVIE CURRENT FIRM 상영예정작*******/		
	public ModelAndView screeningsPlanned() throws Exception{
		this.params.setDirectory("movie");
		this.params.setPage("screeningsPlanned");
		this.params.setContentCSS("movie/screeningsPlanned");
		this.params.setContentjs("movie/screeningsPlanned");
		return this.getTemplate();	
	}

}
