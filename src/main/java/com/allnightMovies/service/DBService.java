package com.allnightMovies.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allnightMovies.dao.DBMapper;
import com.allnightMovies.model.data.MainMenu;
import com.allnightMovies.model.data.movieInfo.MovieShowTimesMap;
import com.allnightMovies.model.data.userInfo.UserPersonalInfoDTO;
import com.allnightMovies.model.data.userInfo.UserPersonalLoginInfoDTO;
import com.allnightMovies.model.params.Params;


@Service
public class DBService {
	
	@Autowired
	DBMapper dbMapper;
/** ji. Menu Loading **/
	public List<MainMenu> getMenus() throws Exception {
		return dbMapper.getMenus();
	}
	
/** ji. Login **/
	
	public UserPersonalLoginInfoDTO login(Params params) {
		return dbMapper.login(params);
	}
	
	public Integer searchPWD(String searchPwdUserID)  {
		return dbMapper.searchPWD(searchPwdUserID);
	}
	
	public String searchEmail(String searchPwdUserID) {
		return dbMapper.searchEmail(searchPwdUserID);
	}
	
	public Params updateNewPwd(String searchPwdUserID, String searchPwdNewPwd) {
		return dbMapper.updateNewPwd(searchPwdUserID, searchPwdNewPwd);
	}

/** ji. Join **/
	public Integer idCheck(String id) throws Exception {
		return dbMapper.idCheck(id);
	}

	public Integer insertJoinUserInfo(UserPersonalInfoDTO userDTO) {
		return dbMapper.insertJoinUserInfo(userDTO);
	}

/** jung. 상영시간표 **/
	public List<MovieShowTimesMap> showtimes() throws Exception {
		return dbMapper.showtimes();
	}
/** 아이디 찾기**/
	public List<Params> searchId(String searchIdUserName, String searchIdUserBirth, String searchIdUserGender) throws Exception {
		System.out.println("searchIdUserGender" + searchIdUserGender);
		return dbMapper.searchId(searchIdUserName, searchIdUserBirth, searchIdUserGender);
	}
/** 아이디유무 갯수**/
	public Integer searchIdCount(String searchIdUserName, String searchIdUserBirth, String searchIdUserGender) throws Exception {
		return dbMapper.searchIdCount(searchIdUserName, searchIdUserBirth, searchIdUserGender);
	}

	
/** shin. MY INFO **/	
	public UserPersonalInfoDTO selectMyInfo(String myInfoID) {
		return dbMapper.selectMyInfo(myInfoID);
	}
	public String selectUserPWD(String myInfoID) {
		return dbMapper.selectUserPWD(myInfoID);
	}
	
	public Params updateWithdraw(String myInfoID) {
		return dbMapper.updateWithdraw(myInfoID);
	}
	
}