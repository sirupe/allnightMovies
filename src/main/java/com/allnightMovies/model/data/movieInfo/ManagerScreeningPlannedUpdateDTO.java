package com.allnightMovies.model.data.movieInfo;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain=true)
public class ManagerScreeningPlannedUpdateDTO {
	private int moviePrice;
	private String movieScreeningDate;
	private String movieScreeningDate2;
	private int movieTheather;
	private String movieTitle;
}
