package com.allnightMovies.service;


import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allnightMovies.dao.DBMapper;
import com.allnightMovies.model.data.MainMenu;
import com.allnightMovies.model.params.Params;


@Service
public class DBService {
	
	@Autowired
	DBMapper dbMapper;
	
	public List<MainMenu> getMenus() throws Exception {
		return dbMapper.getMenus();
	}
	
	public Integer idCheck(String id) throws Exception {
		return dbMapper.idCheck(id);
	}
	
	public String login(Params params) {
		return dbMapper.login(params);
	}
	
	public Integer searchPWD(String searchUserID)  {
		return dbMapper.searchPWD(searchUserID);
	}
	
	public String searchEmail(String searchUserID) {
		return dbMapper.searchEmail(searchUserID);
	}

}