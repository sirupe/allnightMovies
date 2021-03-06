package com.allnightMovies.model.data.movieInfo;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MovieBasicInfo {
	private String movieDirector;
	private String movieAuthor;
	private String movieIntro;
	private String movieCast;
	private String movieTitle;
	private String movieReleaseDate;
	private String movieGenre;
	private String moviePoster;
	private String movieAgeLimitText;
	private List<MovieBasicInfoCast> movieCastList;
	private int reviewEvaluate;
	private int movieAgeLimit;
	private int movieRuntime;
	private int no;
	
}