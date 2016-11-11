package com.allnightMovies.model.data.movieInfo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieBasicInfo {
	private String movieDirector;
	private String movieAuthor;
	private String movieIntro;
	private String movieCast;
	private String movieTitle;
	private String movieReleaseDate;
	private String movieGenre;
	private String moviePoster;
	private int reviewEvaluate;
	private int movieAgeLimit;
	private int movieRuntime;
}