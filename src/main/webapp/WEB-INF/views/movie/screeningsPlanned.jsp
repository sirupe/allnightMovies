<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div-screeningsPlanned  js_screeningsPlannedContainer">
	<div class="screeningsPlanned-title">
		상영예정작
	</div>
	<div class="screeningsPlanned-content">
		<span class="screeningsPlanned-vedio js_mainFilm"> 
			<video  class="video-plannedFilm__mainFilm js_video" loop poster="/resources/img/movieVideo/masterVideo.png">
				<source src="/resources/img/movieVideo/master.ogv">
			</video>
		</span>
	</div>
	
	<div class="screeningsPlanned-posters">
		<c:if test="${isManager}">
			<button class="button-insertMovie js_insertMovie" type="button">영화등록</button>
		</c:if>
		<c:forEach begin="0" end="${filmNum}" varStatus="filmNum" items="${ScreeningsPlannedDTO}" var="ScreeningsPlannedDTO" > 
			<c:choose>
				<c:when test="${filmNum.count % 3 != 0}">
					<span class="screeningsPlanned-posters__info">
						<span class="screeningsPlanned-posters__image" style="background-image: url('/../resources/img/poster/${ScreeningsPlannedDTO.moviePoster }');">
							<a class="hiddenText" href="/movie/mainService/movieDetailInfo?movieInfoTitle=${ScreeningsPlannedDTO.movieTitle}&movieNO=${ScreeningsPlannedDTO.no}">상세보기</a>
						</span>
						<span class="screeningsPlanned-posters__title">
							<label class="ageLimit${ScreeningsPlannedDTO.movieAgeLimit}">${ScreeningsPlannedDTO.movieAgeLimit}</label>
							<label class="screeningsPlanned-posters__movietitle">${ScreeningsPlannedDTO.movieTitle}</label>
						</span>
					</span>
				</c:when>
				<c:otherwise>
					<span class="screeningsPlanned-posters__info">
						<span class="screeningsPlanned-posters__image" style="background-image: url('/../resources/img/poster/${ScreeningsPlannedDTO.moviePoster }');">
							<a class="hiddenText" href="/movie/mainService/movieDetailInfo?movieInfoTitle=${ScreeningsPlannedDTO.movieTitle}&movieNO=${ScreeningsPlannedDTO.no}">상세보기</a>
						</span>
						<span class="screeningsPlanned-posters__title">
							<label class="ageLimit${ScreeningsPlannedDTO.movieAgeLimit}">${ScreeningsPlannedDTO.movieAgeLimit}</label>
							<label class="screeningsPlanned-posters__movietitle">${ScreeningsPlannedDTO.movieTitle}</label>
						</span>
					</span>
				</c:otherwise>
			</c:choose>
		</c:forEach>
	</div>
</div>