<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="content__sub-menus">
	<c:forEach items="${main.subMenuList }" var="subMenu">
		<div class="content__sub-menus__menu">
			<a href="/movie/mainService/getTemplate?main=${main.mainMenuPage }&sub=${subMenu.subMenuPage}">${subMenu.subMenuName }</a>
		</div>
	</c:forEach> 
</div>