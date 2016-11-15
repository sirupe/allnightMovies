 package com.allnightMovies.service;

import static org.springframework.test.web.client.response.MockRestResponseCreators.withServerError;



import java.lang.reflect.Method;

import java.util.List;
import java.util.Map;

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
		String id = this.params.getUserID();
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

	public ModelAndView pwdCheck() {
		ModelAndView mav = new ModelAndView("join/resultText");
		
		String resultMessage = "사용 가능합니다.";
		boolean resultBool = true;
		String userPWD = this.params.getUserPWD();
		if(!RegexCheck.passwdRegexCheck(userPWD)) {
			resultMessage = "영문,숫자,특수문자 포함 8~15자 이내로 입력해주세요.";
			resultBool = false;
		}

		
		mav.addObject("result", resultMessage);
		mav.addObject("resultBool", resultBool);
		return mav;
	}
	
	//아이디 찾기
	
	//상영표 map
	public ModelAndView showtimes() throws Exception {
		this.params.setContentCSS("reservation/timeTable");
		this.params.setContentjs("reservation/timeTable");
		List<MovieShowTimesMap> movieTimeTable = this.service.showtimes();
		
		
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
