package com.allnightMovies.service;

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
import com.allnightMovies.model.data.userInfo.UserPersonalInfoDTO;
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
		return mav;
	}
	
	public ModelAndView login() throws Exception {
		String userID = this.service.login(this.params);
		HttpSession session = this.params.getSession();
		session.setAttribute("userID", userID);
		ModelAndView mav = this.getTemplate();
		return mav;
	}
	
	public ModelAndView logout() throws Exception {
		this.params.getSession().invalidate();
		return this.getTemplate();
	}
	
	public ModelAndView idCheck() throws Exception {
		ModelAndView mav = new ModelAndView("loginForm/join/idcheck");

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

		mav.addObject("resultMessage", resultMessage);
		mav.addObject("resultBool", bool);
		mav.addObject("inputID", id);
		return mav;
	}

	
	public ModelAndView joinService() throws Exception {
		ModelAndView mav = new ModelAndView();
//TODO
		UserPersonalInfoDTO userInfoDTO = new UserPersonalInfoDTO();
		userInfoDTO.setUserEmail(this.params.getUserEmailID() + "@" + this.params.getUserEmailAddr());
		userInfoDTO.setUserGender(this.params.getUserGender());
		userInfoDTO.setUserID(this.params.getUserID());
		userInfoDTO.setUserName(this.params.getUserName());
		userInfoDTO.setUserPWD(this.params.getUserPWD());
		userInfoDTO.setUsrBirth(this.params.getUserBirth());

		
		
		return mav;
	}



	
}
