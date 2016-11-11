package com.allnightMovies.model.data;

import java.util.List;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class MainMenu {
	private String mainMenuName;
	private String mainMenuPage;
	private List<SubMenu> subMenuList;
}