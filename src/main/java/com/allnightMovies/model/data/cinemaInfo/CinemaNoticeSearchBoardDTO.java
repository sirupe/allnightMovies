package com.allnightMovies.model.data.cinemaInfo;

import lombok.Data;

@Data
public class CinemaNoticeSearchBoardDTO {
	private int blockStartNum;
	private int blockEndNum;
	private String searchWord;
}
