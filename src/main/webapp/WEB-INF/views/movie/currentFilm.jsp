<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div-currentFilm">
	<div class="div-currentFilm__title">
		현재상영작
	</div>
	<div class="div-currentFilm__content">
		<span class="span-currentFilm__mainFilm">
			<img src="/resources/img/test.PNG" class="video-currentFilm__mainFilm">
		</span>
		<span class="div-currentFilm__etc">
			<label class="label-currentFilm-sort__reservation" onclick="sortReservation()">예매순 </label>
			<label class="label-currentFilm-sort__score" onclick="sortScore()">평점순</label>
		</span>
		<button class="button-currentFilm-reservation" onclick="locationReservation()">예매하기</button>
	</div>
	<div class="div-currentFilm-images">
		<img alt="" src="/../resources/img/poster/Doctor_Strange.jpg" class="img-currentFilm">
		<label class="label-currentFilm__movieTitle">닥터스트레인지</label>
	</div>
</div>