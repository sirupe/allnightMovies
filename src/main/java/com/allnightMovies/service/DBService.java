package com.allnightMovies.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allnightMovies.dao.DBMapper;
import com.allnightMovies.model.data.MainMenu;
import com.allnightMovies.model.data.movieInfo.MovieShowTimesMap;
import com.allnightMovies.model.data.userInfo.UserPersonalInfoDTO;
import com.allnightMovies.model.params.Params;


@Service
public class DBService {
	
	@Autowired
	DBMapper dbMapper;
	
	public List<MainMenu> getMenus() throws Exception {
		return dbMapper.getMenus();
	}
/**********************************JOIN**********************************/	
	public Integer idCheck(String id) throws Exception {
		return dbMapper.idCheck(id);
	}
	
	public String login(Params params) {
		return dbMapper.login(params);
	}
	
	public Integer insertJoinUserInfo(UserPersonalInfoDTO userDTO) {
		return dbMapper.insertJoinUserInfo(userDTO);
	}
/************************************************************************/

/********************************상영시간표********************************/
	public List<MovieShowTimesMap> showtimes() throws Exception {
		System.out.println("DBService");
		return dbMapper.showtimes();
	}
/*************************************************************************/
	
}