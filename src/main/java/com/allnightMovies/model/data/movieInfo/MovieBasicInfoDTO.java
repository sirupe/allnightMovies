package com.allnightMovies.model.data.movieInfo;

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
