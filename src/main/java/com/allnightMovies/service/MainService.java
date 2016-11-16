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
import com.allnightMovies.model.data.MainMenu;
import com.allnightMovies.model.data.MenuList;
import com.allnightMovies.model.data.movieInfo.MovieShowTimesMap;
import com.allnightMovies.model.data.movieInfo.MovieShowTitleDTO;
import com.allnightMovies.model.data.movieInfo.MovieshowTableDTO;
import com.allnightMovies.model.params.Params;
import com.allnightMovies.utility.RegexCheck;


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

	@Autowired
	SubService subService;
	
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
		System.out.println("메인서비스의 login. 로그인유지 체크? " + this.params.getKeepLogin());
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
		Random rand = new Random();
		int randNum = rand.nextInt(900000) + 100000;
		System.out.println(">>메인서비스 sendEmail() 인증번호 : " + randNum);
//		new SendEmail(String.valueOf(randNum), this.params.getUserEmail());
		String result = "인증번호가 발송되었습니다.";
		boolean bool = true;
		this.params.getSession().setAttribute("certificationNum", randNum);
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
		int saveConfirmNum = (int) session.getAttribute("certificationNum");
		boolean bool = true;
		if(saveConfirmNum == 0) {
			result = "인증번호를 받아주세요.";
			bool = false;
		} else if(!(saveConfirmNum == inputConfirmNum)) {
			result = "인증번호가 일치하지 않습니다. 다시 확인해주세요.";
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
		System.out.println(this.params.getSession().getAttribute("userID"));
		return this.getTemplate();	
	}

	@Override
	public String executeString(Params params) throws Throwable {
		return null;
	}

/*****상영시간표List*****/
	
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
}
