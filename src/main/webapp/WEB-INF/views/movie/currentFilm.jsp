<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div-currentFilm  js_currentFilmContainer">
	<div class="div-currentFilm__title">
		현재상영작
	</div>
	<div class="div-currentFilm__content">
		<span class="span-currentFilm__mainFilm js_mainFilm">
			<video class="video-currentFilm__mainFilm js_video" loop poster="/resources/img/movieVideo/fantasticBeasts.png">
				<source src="/resources/img/movieVideo/fantasticBeasts.ogv">
			</video>
		</span>
		<span class="div-currentFilm__etc">
			<label class="label-currentFilm-sort  js_currentFilmSortReservation">이름순 </label>|
			<label class="label-currentFilm-sort  js_currentFilmSortScore">평점순</label>
		</span>
		<c:choose>
			<c:when test="${isManager}">
				<button class="button-insertMovie js_insertMovie" type="button">영화등록</button>
			</c:when>
			<c:otherwise>
				<button class="button-currentFilm-reservation  js_urrentFilmReservationBtn" type="button">예매하기</button>
			</c:otherwise>
		</c:choose>
	</div>
	<jsp:include page="./include/currentFilmSort.jsp"></jsp:include>
</div>