package com.allnightMovies.model.data.userInfo;

import lombok.Data;

@Data
public class UserPersonalLoginInfoDTO {
	private String userID;
	private String userPWD;
	private int userStates;
}
