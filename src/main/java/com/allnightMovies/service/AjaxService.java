package com.allnightMovies.service;

import java.lang.reflect.Method;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import com.allnightMovies.di.Action;
import com.allnightMovies.model.data.userInfo.UserPersonalInfoDTO;
import com.allnightMovies.model.params.Params;

@Service
public class AjaxService implements Action {
	private Params params;
	@Autowired
	DBService dbService;
	@Autowired
	SubService subService;
	
	@Override
	public String executeString(Params params) throws Throwable {
		Method method = this.getClass().getDeclaredMethod(params.getMethod());
		this.params = params;
		return (String)method.invoke(this);
	}

	public String joinSuccessCheck() throws Exception {
		if(this.subService.joinSuccessCheck(this.params)) {
			UserPersonalInfoDTO personalDTO = new UserPersonalInfoDTO();
			personalDTO.setUserName(this.params.getUserName());
			personalDTO.setUserID(this.params.getUserIDCheck());
			personalDTO.setUserPWD(this.params.getUserPWD());
			personalDTO.setUserGender(this.params.getUserGender());
			personalDTO.setUserEmail(this.params.getUserEmail());
			personalDTO.setUserBirth(this.params.getUserBirth());
			this.dbService.insertJoinUserInfo(personalDTO);
			this.params.getSession().setAttribute("userID", this.params.getUserIDCheck());
			return "/movie/mainService/locationJoinSuccess";
		}
		return "false";
		
	}
	
	
	@Override
	public ModelAndView execute(Params params) throws Throwable {
		// TODO Auto-generated method stub
		return null;
	}


}
