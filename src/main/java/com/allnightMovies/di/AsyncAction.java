package com.allnightMovies.di;

import com.allnightMovies.model.data.AsyncResult;
import com.allnightMovies.model.params.Params;

@SuppressWarnings("rawtypes")
public interface AsyncAction {
	public AsyncResult asyncExecute(Params params) throws Throwable;
}
