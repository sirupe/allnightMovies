package com.allnightMovies.utility;


public enum UtilityEnums {
	SENDER_EMAIL_ADDRESS("jijungsinkim@gmail.com"),
	SENDER_EMAIL_PASSWD("dpswpflsjtm"),
	SENDER_EMAIL_SUBJECT("AllnightMovies 에서 보낸 인증번호 입니다."),
	SENDER_EMAIL_PORT("465"),
	
	CONFIRM_TIME(1000 * 60 * 1);
	
	private String str;
	private int confirmTime;
	
	private UtilityEnums() {}
	
	private UtilityEnums(String str) {
		this.str = str;
	}
	
	private UtilityEnums(int time) {
		this.confirmTime = time;
	}
		
	public String getStr() {
		return str;
	}
	
	public int getConfirmTime() {
		return confirmTime;
	}
}