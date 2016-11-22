package com.allnightMovies.model.data.movieInfo;

import lombok.Data;

@Data
public class MovieScreeningDateInfo {
	private String screeningMinDate;
	private String screeningMaxDate;
	
	private String[] minScreening;
	private String[] maxScreening;
	
	public void setScreeningDate() {
		this.screeningMinDate = this.screeningMinDate.split(" ")[0];
		this.screeningMaxDate = this.screeningMaxDate.split(" ")[0];
		System.out.println(this.screeningMinDate);
		System.out.println(this.screeningMaxDate);
		
		this.minScreening = this.screeningMinDate.split("\\.");
		this.maxScreening = this.screeningMaxDate.split("\\.");
	}
}
