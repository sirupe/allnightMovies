<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="header__menu-and-title">
	<div class="header__menu-and-title__title">
		<img src="/resources/img/allnight.jpg" width="100%" height="100%" alt="">
	</div>
	<div class="header__menu-and-title__menu">
		<c:forEach items="${list}" var="mainMenu">
			<a class="header__menu-and-title__menu__menuList" 
			   href="/movie/mainService/getTemplate?main=${mainMenu.mainMenuPage }" 
			   onclick="titleMenu()">
				${mainMenu.mainMenuName }
			</a>
		</c:forEach>
	</div>
</div>