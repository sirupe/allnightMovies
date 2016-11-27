package com.allnightMovies.utility;

public class ParseCheck {
	public boolean isParseInt(String str) {
		boolean result = true;
		try {
			Integer.parseInt(str);
		} catch(NumberFormatException e) {
			result = false;
		}
		return result;
	}
	
	public boolean isParseLong(String str) {
		boolean result = true;
		try {
			Long.parseLong(str);
		} catch(NumberFormatException e) {
			result = false;
		}
		return result;
	}
}
