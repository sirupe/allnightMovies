package com.allnightMovies.model.data.movieInfo;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class MovieBasicInfoDTO {
	private String movieTitle;
	private String movieGenre;
	private String movieDirector;
	private String movieAuthor;
	private String movieCast;
	private String movieReleaseDate;
	private String movieIntro;
	private int movieAgeLimitText;
	
	private int movieRuntime;
	private int no;

}
//params
//private String managerMovieTitle;
//private String managerMovieGenre;
//private String managerMovieDirector;
//private String managerMovieAuthor;
//private String managerMovieCast;
//private String managerMovieReleaseDate;
//private String managerMovieIntro;
//
//private Integer managerMovieAge;
//private Integer managerMovieRuntime;
//+ movieNO
