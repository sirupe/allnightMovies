<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="header__menu-and-title__title">
	<div class="header__logo">
		<img src="/resources/img/allnight.png" width="440px" height="110px" alt="">
	</div>
	<c:choose>
		<c:when test="${userID == null }">
			<jsp:include page="./login.jsp"/>					
		</c:when>
		<c:otherwise>
			<jsp:include page="./logon.jsp"/>
		</c:otherwise>
	</c:choose>
</div>