package com.allnightMovies.utility;

import java.util.ArrayList;
import java.util.Calendar;

import lombok.Data;

@Data
public class MonthCalendar {
	private int year;
	private int month; 	
	private int toDay;	
	private int lastDate;
	private int startDay;
	private ArrayList<ArrayList<Integer>> days;
	
	private String maxScreeningYear;
	private String maxScreeningMonth;
	private String maxScreeningDate;
	
	public MonthCalendar() {
		Calendar calendar = Calendar.getInstance();
		this.getInfo(calendar); 
	}
	
	public MonthCalendar(int year, int month) {
		Calendar calendar = Calendar.getInstance();
		calendar.set(year, month - 1, 1);
		this.getInfo(calendar);
	}
	
	private void getInfo(Calendar calendar) {
		this.year = calendar.get(Calendar.YEAR);                
		this.month = calendar.get(Calendar.MONTH) + 1;          
		this.toDay = calendar.get(Calendar.DAY_OF_MONTH);   
		this.lastDate = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
		calendar.set(Calendar.DATE, 1);
		this.startDay = calendar.get(Calendar.DAY_OF_WEEK); 
		this.days = new ArrayList<ArrayList<Integer>>();
		
		int totDay = this.lastDate + this.startDay;
		int weekLoop = totDay % 7 == 0 ? totDay / 7 : totDay / 7 + 1 ;
		
		int j = 1;
		int date = 1;
		for(int i = 0; i < weekLoop; i++) {
			ArrayList<Integer> day = new ArrayList<Integer>();
			for(int weekLastDate = j + 7; j < weekLastDate; j++) {
				if(j < this.startDay || date > lastDate) {
					day.add(0);
				} else {
					day.add(date);
					date++;
				}				
			}
			this.days.add(day);
		}
		System.out.println(" weekLoop : " + weekLoop);
		System.out.println(this.toString());
	}
}
