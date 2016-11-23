package com.allnightMovies.model.data.cinemaInfo;

import lombok.Data;

@Data
public class CinemaNoticeBoardDTO {
	private int no;
	private String title;
	private String writeDate;
	private String content;
	private int important;
}
