package com.allnightMovies.model.data.userInfo;

import lombok.Data;
import lombok.experimental.Accessors;
@Accessors(chain=true)
@Data
public class ManagerUserReserveDTO {
	private String userTicketNumber;
	private String userTicketingDate;
	private String userID;
	private String movieTitle;
	private String theater;
	private int userTicketCount;
	private int ticketPrice;
	private String theaterSeat;

}
