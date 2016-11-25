<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="js_intoduceContainer">
	<div class="introduce-content">
		<c:forEach begin="0" end="${imgCount}" step="1" items="${imgSrc}" var="imgSrc" varStatus="imgCount" >
			<img class="introduce-img" src="/resources/img/introduce/${imgSrc.cinemaIntroImg}">
		</c:forEach>
	</div>
</div>