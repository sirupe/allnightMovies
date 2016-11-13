package com.allnightMovies.dao;



import java.util.ArrayList;
import java.util.List;

import com.allnightMovies.model.data.MainMenu;
import com.allnightMovies.model.data.movieInfo.MovieScreeningDate;
import com.allnightMovies.model.params.Params;


public interface DBMapper {
	public List<MainMenu> getMenus() throws Exception;
	public Integer idCheck(String id) throws Exception;
	public String login(Params params);
	public ArrayList<MovieScreeningDate> showtimes();
}