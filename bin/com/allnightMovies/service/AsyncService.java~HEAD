package com.allnightMovies.service;

import java.lang.reflect.Method;

import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import com.allnightMovies.di.AsyncAction;
import com.allnightMovies.model.data.AsyncResult;
import com.allnightMovies.model.data.userInfo.UserPersonalInfoDTO;
import com.allnightMovies.model.params.Params;

import lombok.experimental.Accessors;


@Service
@SuppressWarnings("rawtypes")
public class AsyncService implements AsyncAction {
	private Params params;
	
	@Override
	public AsyncResult asyncExecute(Params params) throws Throwable {
		Method method = this.getClass().getDeclaredMethod(params.getMethod());
		this.params = params;
		return (AsyncResult) method.invoke(this);
	}
	
	public AsyncResult test() {
		UserPersonalInfoDTO result = new UserPersonalInfoDTO();
		//@Accessors(chain = true)
		result
			.setUserBirth("1")
			.setUserEmail("2")
			.setUserGender("3");
		
		return AsyncResult.done("성공했어여!!");
	}
}
