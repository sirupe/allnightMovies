package com.allnightMovies.model.data.cinemaInfo;

import lombok.Data;
import lombok.experimental.Accessors;
@Accessors(chain=true)
@Data
public class CinemaSeatReserveInfo {
	private String movieTitle;
	private int theater;
	private String movieScreeningDate;
}
