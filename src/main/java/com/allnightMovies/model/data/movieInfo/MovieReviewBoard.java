package com.allnightMovies.model.data.movieInfo;

import lombok.Data;

@Data
public class MovieReviewBoard {
	private String reviewContents;
	private String reviewWriter;
	private String writeDate;
	private String movieTitle;
	private int reviewEvaluate;
	private int reviewNo;
}
