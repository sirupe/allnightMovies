<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="stylesheet" href="/resources/css/movie/movieBasicInfo.css">
<script async="async" type="text/javascript" src="/resources/js/movie/managerMovieInfo.js"></script>

<div class="movieBasicInfo js_managerMovieInfoContainer">
	<!-- 작품소개/ 스틸컷/ 평점리뷰 -->
	<div class="movieBasicInfo-intro">
		<img class="moviePoster" src="/resources/img/poster/${movieBasicInfo.moviePoster}"></img>
		<div class="span-movieBasicInfo-intro">
			제목&nbsp;:&nbsp;<input class="intro__input js_basicInfoMovieTitle font" value="${movieBasicInfo.movieTitle}" type="text"  maxlength="30"><br><br>
			개요&nbsp;:&nbsp;<input class="intro__input js_basicInfoMovieGenre font" value="${movieBasicInfo.movieGenre}" type="text" maxlength="30"/><br><br>
			감독&nbsp;:&nbsp;<input class="intro__input__width js_basicInfoMovieDirector font" value="${movieBasicInfo.movieDirector}" type="text" maxlength="15"/>
			&nbsp;저자&nbsp;:&nbsp;<input class="intro__input__width js_basicInfoMovieAuthor font" value="${movieBasicInfo.movieAuthor}" type="text" maxlength="15"><br><br>
			출연&nbsp;:&nbsp;<input class="intro__input font js_basicInfoMovieCast" value="${movieBasicInfo.movieCast}" type="text" maxlength="30"><br><br>
			등급&nbsp;:&nbsp;<select class="intro__input__width js_basicInfoMovieAge font">
								<option value="0">전체</option>
								<option value="12">12세</option>
								<option value="15">15세</option>
								<option value="19">19세</option>
							</select><br><br>
			상영시간&nbsp;:&nbsp;<input class="intro__input__runtime js_basicInfoRuntime font" value="${movieBasicInfo.movieRuntime}" type="text">분
			개봉일&nbsp;:&nbsp;<input class="intro__input__date js_basicInfoDate font" value="${movieBasicInfo.movieReleaseDate}" type="date">
			
			<div class="modifyComplete">
				<button class="modifyCompleteBtn js_modifyCompleteBtn" type="button" data-movie-no="${movieBasicInfo.no}">수정완료</button>	
				<button class="modifyCompleteBtn js_modifyResetBtn" data-movie-no="${movieBasicInfo.no}" type="reset">취소</button>	
			</div>
		</div> 
	</div>
	
	<!-- 작품소개/ 스틸컷/ 평점리뷰 -->
	<div class="movieBasicInfo-detail">
		<!-- input -->
		<input id="tab-intro" type="radio" name="tab" checked="checked"/>	
		<input id="tab-stillCut" type="radio" name="tab"/>	
		<input id="tab-review" type="radio" name="tab"/>	
		
		<!-- label 화면에 표시되는 탭 제목-->
		<label for="tab-intro">작품소개</label>
		<label class="js_tab_stillcut"for="tab-stillCut">스틸컷</label>
		<label class="js_tab_review" for="tab-review">평점/리뷰</label>
		
		<!-- 탭 내용 : 탭 제목을 선택했을 때 표시되는 본문 -->
		<div class="tab-intro_content">
			<textarea class="tab-intro_content__intro js_basicInfoMovieIntro resize" cols="91px">${movieBasicInfo.movieIntro}</textarea>
		</div>
		
		<!-- 스틸컷 사진 -->
		<div class="tab-stillCut_content">
			<jsp:include page="../include/reviewStillcut.jsp"></jsp:include> 
		</div>
		
		<!-- 평점/리뷰 -->
		<div class="tab-review_content">
			<c:choose>
				<c:when test="${reviewResult}">
					<jsp:include page="../include/reviewBoard.jsp"></jsp:include> 
				</c:when>
				<c:otherwise>
					<span class="tab-intro_content__reviewfalse">!&nbsp;개봉전에는 평점을 등록할 수  없습니다.</span>
				</c:otherwise>
			</c:choose>
		</div>
	</div>
</div>