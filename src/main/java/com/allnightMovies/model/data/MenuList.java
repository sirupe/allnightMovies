package com.allnightMovies.model.data;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class MenuList {
	private Map<String, MainMenu> mainMenuMap;
	
	public MenuList(List<MainMenu> mainMenu) throws Exception {
		this.mainMenuMap = new LinkedHashMap<String, MainMenu>();
		
		for(int i = 0, size = mainMenu.size(); i < size; i++) {
			MainMenu main = mainMenu.get(i);
			this.mainMenuMap.put(main.getMainMenuPage(), mainMenu.get(i));
		}
	}
}