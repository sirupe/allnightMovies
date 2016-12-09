package com.allnightMovies.model.data.cinemaInfo;

import lombok.Data;
import lombok.experimental.Accessors;

@Accessors(chain = true)
public @Data class CinemaSeatDTO {
    private String theater;
    private String seatRow;
    private String seatCol;
    private String name;
    private int status;
    private String theaterSeat;
}
