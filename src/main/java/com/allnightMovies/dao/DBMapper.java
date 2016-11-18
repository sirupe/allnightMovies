package com.allnightMovies.dao;

import java.util.List;

import com.allnightMovies.model.data.MainMenu;
import com.allnightMovies.model.data.movieInfo.MovieShowTimesMap;
import com.allnightMovies.model.data.userInfo.UserPersonalInfoDTO;
import com.allnightMovies.model.params.Params;


public interface DBMapper {
/** Menu Loading **/
	public List<MainMenu> getMenus() throws Exception;

/** Login **/
	public String login(Params params);
	
/** Search PWD **/
	public Integer searchPWD(String searchPwdUserID);
	public String searchEmail(String searchPwdUserID);
	public Params updateNewPwd(String searchPwdUserID, String searchPwdNewPwd);

/** Join **/
	public Integer idCheck(String id);
	public Integer insertJoinUserInfo(UserPersonalInfoDTO userDTO);

/** 상영시간표 **/
	public List<MovieShowTimesMap> showtimes() throws Exception;

	
}