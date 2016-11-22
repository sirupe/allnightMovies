package com.allnightMovies.model.data.movieInfo;

import java.util.List;

import lombok.Data;

@Data
public class TicketingMovieTimeInfo {
	private String movieTheather;
	private List<String> movieTime;
}
