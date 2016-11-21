package com.allnightMovies.dao;

import java.util.List;

import com.allnightMovies.model.data.MainMenu;
import com.allnightMovies.model.data.movieInfo.MovieShowTimesMap;
import com.allnightMovies.model.data.userInfo.UserPersonalInfoDTO;
import com.allnightMovies.model.data.userInfo.UserPersonalLoginInfoDTO;
import com.allnightMovies.model.params.Params;


public interface DBMapper {
/** ji. Menu Loading **/
	public List<MainMenu> getMenus() throws Exception;

/** ji. Login **/
	public UserPersonalLoginInfoDTO login(Params params);
	
/** ji. Join **/
	public Integer idCheck(String id);
	public Integer insertJoinUserInfo(UserPersonalInfoDTO userDTO);

/** ji. ticketing : calendar**/
	public String getMaxScreeningDate();
	
/** jung. 상영시간표 **/
	public List<MovieShowTimesMap> showtimes() throws Exception;
	
/** 아이디찾기 **/
	public List<Params> searchId(String searchIdUserName, String searchIdUserBirth, String searchIdUserGender) throws Exception;
/** jung. 아이디찾기 **/
//	public String searchId(String searchIdUserName, String searchIdUserBirth, String searchIdUserGender) throws Exception;
//	
/** jung. 아이디 갯수 **/
	public Integer searchIdCount(String searchIdUserName, String searchIdUserBirth, String searchIdUserGender) throws Exception;

/** shin. Search PWD **/
	public Integer searchPWD(String searchPwdUserID);
	public String searchEmail(String searchPwdUserID);
	public Params updateNewPwd(String searchPwdUserID, String searchPwdNewPwd);
	
/** shin. MY INFO **/	
	public UserPersonalInfoDTO selectMyInfo(String myInfoID);
	public String selectUserPWD(String myInfoID);
	
	public Params updateWithdraw(String myInfoID);
}