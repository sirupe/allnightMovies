<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="header__menus">
	
	<ul class="header__menus__menu">
		<c:forEach items="${list}" var="mainMenu">
			<li class="dropdown__main-menu">
				<a href="#" class="dropdown__main-menu__a">${mainMenu.mainMenuName }</a>
				<div class="dropdown__sub-menu">
					<c:forEach items="${mainMenu.subMenuList }" var="subMenu">
						<a href="#" onclick="locationMenus('POST','/movie/mainService/${subMenu.subMenuPage}','${mainMenu.mainMenuPage }','${subMenu.subMenuPage}' )">
					<!--	/movie/mainService/getTemplate?main=${mainMenu.mainMenuPage }&sub=${subMenu.subMenuPage}  -->
							${subMenu.subMenuName }
						</a>
					</c:forEach>
				</div>
			</li>
		</c:forEach>
	</ul>
	<div class="header__menus__search">
		<input class="js_searchMovieText header__menus__search__text" type="text" placeholder="영화 정보 검색" name="searchWord"/>
		<button class="js_searchMovieBtn header__menus__search__button" type="button">
			검색
		</button>
	</div>
</div>