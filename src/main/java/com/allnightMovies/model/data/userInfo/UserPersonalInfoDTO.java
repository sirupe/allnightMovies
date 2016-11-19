package com.allnightMovies.model.data.userInfo;

import lombok.Data;
import lombok.experimental.Accessors;

@Accessors(chain = true)
public @Data class UserPersonalInfoDTO {
	private String userID		;
	private String userPWD		;
	private String userName		;
	private String userGender	;
	private String userBirth	;
	private String userEmail	;
	private String userRegDate	;
	private String userStates	;
	
}