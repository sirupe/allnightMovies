<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div-currentFilm">
	<div class="div-currentFilm__title">
		현재상영작
	</div>
	<div class="div-currentFilm__content">
		<span class="div-currentFilm__mainFilm">
			클릭하면 영화 예고편이뜨게 아님 이미지 사용
		</span>
		<span class="div-currentFilm__etc">
			<label class="label-currentFilm-sort__reservation" onclick="">예매순/</label>
			<label class="label-currentFilm-sort__score" onclick="">평점순</label>
		</span>
		<button class="button-currentFilm-reservation">예매하기</button>
	</div>
</div>