<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div-currentFilm-images js_currentFilmSort">
	<c:forEach begin="1" end="${filmNum}" step="1" items="${CurrentFilmDTO }" var="CurrentFilmDTO" varStatus="filmNum" >
		<c:choose>
			<c:when test="${filmNum.count % 3 != 0}">
				<span class="span-currentFilm-images">
					<span class="span-filmImgs  js_currentFilmInOut" style="background-image: url('/../resources/img/poster/${CurrentFilmDTO.moviePoster }');">
						<a class="hiddenText" href="/movie/mainService/movieDetailInfo?movieInfoTitle=${CurrentFilmDTO.movieTitle}">상세보기</a>
					</span>
					<span class="span-currentFilm-text">
						<label class = "ageLimit${CurrentFilmDTO.movieAgeLimit}">${CurrentFilmDTO.movieAgeLimit}</label>
						<label class="label-currentFilm__movieTitle">${CurrentFilmDTO.movieTitle}</label>
					</span>
				</span>
			</c:when>
			<c:otherwise>
				<span class="span-currentFilm-images">
					<span class="span-filmImgs  js_currentFilmInOut" style="background-image: url('/../resources/img/poster/${CurrentFilmDTO.moviePoster }');">
						<a class="hiddenText" href="/movie/mainService/movieDetailInfo?movieInfoTitle=${CurrentFilmDTO.movieTitle}">상세보기</a>
					</span>
					<span class="span-currentFilm-text">
						<label class = "ageLimit${CurrentFilmDTO.movieAgeLimit}">${CurrentFilmDTO.movieAgeLimit}</label>
						<label class="label-currentFilm__movieTitle">${CurrentFilmDTO.movieTitle}</label>
					</span>
				</span>
				<p>
			</c:otherwise>
		</c:choose>
	</c:forEach>
</div>