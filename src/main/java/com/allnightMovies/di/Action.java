package com.allnightMovies.di;


import org.springframework.web.servlet.ModelAndView;

import com.allnightMovies.model.data.AsyncResult;
import com.allnightMovies.model.params.Params;


public interface Action {
	public ModelAndView execute(Params params) throws Throwable;
	public String executeString(Params params) throws Throwable;
}