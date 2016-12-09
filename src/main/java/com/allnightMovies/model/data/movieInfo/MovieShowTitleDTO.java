package com.allnightMovies.model.data.movieInfo;

import java.util.List;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class MovieShowTitleDTO {
	private String movie_title; //영화 제목 뽑으면 밑에 list 뽑힘.
	//영화 관 있는 list
	List<MovieshowTableDTO> movieshowTableDTO;
	
	

}
