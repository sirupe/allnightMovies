package com.allnightMovies.model.data.cinemaInfo;

import lombok.Data;

@Data
public class CinemaTheaterSeatDTO {
	private int theater;
	private int theaterSeatColStart;
	private int theaterSeatColEnd;
	private String theaterSeatRow;
	private String theaterWayInfo;
}
