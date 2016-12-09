package com.allnightMovies.model.data.userInfo;

import java.util.List;

import lombok.Data;
import lombok.experimental.Accessors;
@Data
@Accessors(chain=true)
public class UserCheckEmptySeatsDTO {
	private List<String> seatsList;		// 유저가 선택한 좌석 목록(최대 4좌석)
	private String movieTitle;			// 유저가 선택한 영화 제목
	private Integer theater;				// 상영관정보
	private String movieScreeningDate;	// 상영시간정보
}
