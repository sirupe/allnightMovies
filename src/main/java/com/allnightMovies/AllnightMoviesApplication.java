package com.allnightMovies;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.allnightMovies.interceptor.KeepLoginCheckInterceptor;
import com.allnightMovies.interceptor.LoginCookieAddIntercepter;
import com.allnightMovies.interceptor.LogoutInterceptor;


@SpringBootApplication
public class AllnightMoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(AllnightMoviesApplication.class, args);
	}
	
	@Bean
	public WebMvcConfigurerAdapter webMvcConfigurerAdapter() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addInterceptors(InterceptorRegistry registry) {
				registry.addInterceptor(new KeepLoginCheckInterceptor()).addPathPatterns("/");
				registry.addInterceptor(new LoginCookieAddIntercepter()).addPathPatterns("/movie/mainService/login");
				registry.addInterceptor(new LogoutInterceptor()).addPathPatterns("/movie/mainService/logout");
			}
		};
	}
}