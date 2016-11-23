<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div-currentFilm  js_currentFilmContainer">
	<div class="div-currentFilm__title">
		현재상영작
	</div>
	<div class="div-currentFilm__content">
		<span class="span-currentFilm__mainFilm">
		<button class="video-currentFilm__start  js_currentFilmStartBtn">▶</button>
		<!-- <embed src="https://www.youtube.com/embed/OYKq9C3Waao?list=PL3m5qREasgOoPfgodul0ybHp1uVmktJmI" class="video-currentFilm__mainFilm" /> -->
		</span>
		<span class="div-currentFilm__etc">
			<label class="label-currentFilm-sort  js_currentFilmSortReservation">예매순 </label>|
			<label class="label-currentFilm-sort  js_currentFilmSortScore">평점순</label>
		</span>
		<button class="button-currentFilm-reservation  js_urrentFilmReservationBtn">예매하기</button>
	</div>
	<div class="div-currentFilm-images">
		<c:forEach begin="1" end="${filmNum}" step="1" items="${CurrentFilmDTO }" var="CurrentFilmDTO" varStatus="filmNum" >
			<c:choose>
				<c:when test="${filmNum.count % 3 != 0}">
					<span class="span-currentFilm-images">
						<span class="span-filmImgs  js_currentFilmInOut" style="background-image: url('/../resources/img/poster/${CurrentFilmDTO.moviePoster }');">
							<label class="hiddenText js_text">상세보기</label>
						</span>
						<span class="span-currentFilm-text">
							<label class = "ageLimit${CurrentFilmDTO.movieAgeLimit }">${CurrentFilmDTO.movieAgeLimit }</label>
							<label class="label-currentFilm__movieTitle">${CurrentFilmDTO.movieTitle }</label>
						</span>
					</span>
				</c:when>
				<c:otherwise>
					<span class="span-currentFilm-images">
						<span class="span-filmImgs  js_currentFilmInOut" style="background-image: url('/../resources/img/poster/${CurrentFilmDTO.moviePoster }');">
							<label class="hiddenText js_text">상세보기</label>
						</span>
						<span class="span-currentFilm-text">
							<label class = "ageLimit${CurrentFilmDTO.movieAgeLimit }">${CurrentFilmDTO.movieAgeLimit }</label>
							<label class="label-currentFilm__movieTitle">${CurrentFilmDTO.movieTitle }</label>
						</span>
					</span>
					<p>
				</c:otherwise>
			</c:choose>
			
		</c:forEach>
	</div>
</div>