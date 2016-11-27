package com.allnightMovies.model.data.userInfo;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import lombok.Data;
import lombok.experimental.Accessors;


@Data
@Service
@Accessors(chain=true)
public class UserTicketingInfo {
	private String movieScreeningDate;
	private String movieTitle;
	private int theater;
	private List<String> theaterSeat;
	private String userID;
	private Date userTicketingDate;
	private int userTicketCount;
	private String userTicketNumber;
	private int userTotalPrice;
}