package com.allnightMovies.model.data;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class AsyncResult<T> {
	private T data;
	private Boolean success;
	
	public AsyncResult() {}
	
	public AsyncResult(T data) {
		this.data = data;
		this.success = true;
	}
	
	public final static <T> AsyncResult<T> done(T v) {
		return new AsyncResult<T>(v);
	}
}
