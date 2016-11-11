package com.allnightMovies;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class AllnightMoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(AllnightMoviesApplication.class, args);
	}
	
//	@Bean
//	public WebMvcConfigurerAdapter webMvcConfigurerAdapter() {
//		return new WebMvcConfigurerAdapter() {
//			@Override
//			public void addInterceptors(InterceptorRegistry registry) {
//				registry.addInterceptor(new AllnightMoviesInterceptor()).addPathPatterns(patterns);
//				
//			}
//		};
//	}
}