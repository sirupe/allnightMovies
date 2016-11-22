<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:forEach items="${movieTimeList }" var="theater">
	${theater.movieTheather } 관
	<c:forEach items="${theater.movieTime }" var="movieTime">
		${movieTime }
	</c:forEach>
	<br/>
</c:forEach>