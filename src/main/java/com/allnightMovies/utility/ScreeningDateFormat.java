package com.allnightMovies.utility;

import org.springframework.util.StringUtils;

public class ScreeningDateFormat {
	public static String reservationDateFormat(String dateStr) {
		String[] dateArr = dateStr.split("\\.");
		if(Integer.parseInt(dateArr[1]) < 10) {
			dateArr[1] = "0" + dateArr[1];
			System.out.println("dateArr :" + dateArr[1]);
			dateStr = StringUtils.arrayToDelimitedString(dateArr, ".");
		}
		return dateStr;
	}
}
