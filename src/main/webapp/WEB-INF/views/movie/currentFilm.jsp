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
			<a href="#" class="a-currentFilm-sort__reservation" onclick="">예매순 </a>
			<a href="#" class="a-currentFilm-sort__score" onclick="">평점순</a>
		</span>
		<button class="button-currentFilm-reservation">예매하기</button>
	</div>
</div>