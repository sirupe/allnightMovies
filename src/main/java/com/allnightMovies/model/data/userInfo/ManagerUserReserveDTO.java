package com.allnightMovies.model.data.userInfo;

import lombok.Data;

@Data
public class ManagerUserReserveDTO {
	private String userTicketNumber;
	private String userTicketingDate;
	private String userID;
	private String movieTitle;
	private int theater;
	private int userTicketCount;
	private int ticketPrice;
	private String theaterSeat;

}
