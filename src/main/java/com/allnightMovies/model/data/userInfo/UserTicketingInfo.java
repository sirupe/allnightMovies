package com.allnightMovies.model.data.userInfo;

import java.util.Date;

import org.springframework.stereotype.Service;

import lombok.Getter;


@Getter
@Service
public class UserTicketingInfo {
	private String theaterSeat;
	private String movieScreeningDate;
	private String movieTitle;
	private String userID;
	private int theater;
	private int userTicketCount;
	private int userTotalPrice;
	private int userTicketNumber;
	private Date userTicketingDate;
}