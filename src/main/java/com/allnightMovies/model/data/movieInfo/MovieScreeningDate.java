package com.allnightMovies.model.data.movieInfo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieScreeningDate {
	private String movie_theather; //영화관
	private String screening_Date; // 영화날짜
	private String screening_Time; //영화 시간
	private String movie_price; //영화요금
	
	private String movie_title; //영화명
	
	private String movie_room1;
	private String movie_room2;
	private String movie_room3;

}
