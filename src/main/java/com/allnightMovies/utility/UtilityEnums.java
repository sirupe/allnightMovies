package com.allnightMovies.utility;


public enum UtilityEnums {
	SENDER_EMAIL_ADDRESS("jijungsinkim@gmail.com"),
	SENDER_EMAIL_PASSWD("dpswpflsjtm"),
	SENDER_EMAIL_SUBJECT("AllnightMovies 에서 보낸 인증번호 입니다."),
	SENDER_EMAIL_PORT("465");
	
	private String str;
	
	private UtilityEnums() {}
	
	private UtilityEnums(String str) {
		this.str = str;
	}
		
	public String getStr() {
		return str;
	}
}