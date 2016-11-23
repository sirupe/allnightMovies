<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:choose>
	<c:when test="${movieTimeList.size() != 0}">
		<c:forEach items="${movieTimeList }" var="theater">
			<div class="movie-time-list">
				<label class="movie-time-theater">${theater.movieTheather } 관</label>
				<c:forEach items="${theater.movieTime }" var="movieTime">
					<label class="js_movieTimeClick   movie-time" data-theater="${theater.movieTheather }">${movieTime }</label>
				</c:forEach>
			</div>
		</c:forEach>
	</c:when>
	<c:otherwise>
		<div class="screening__default-text">상영 정보가 없습니다.</div>
	</c:otherwise>
</c:choose>
