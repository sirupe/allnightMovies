<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="stylesheet" href="/resources/css/movie/movieBasicInfo.css">

<div class="movieBasicInfo js_managerMovieInfoContainer">
	<div class="modifyComplete">
		<button class="modifyCompleteBtn js_modifyCompleteBtn" type="button">수정완료</button>	
	</div>
	<!-- 작품소개/ 스틸컷/ 평점리뷰 -->
	<div class="movieBasicInfo-intro">
		<img class="moviePoster" src="/resources/img/poster/${movieBasicInfo.moviePoster}"></img>
		<span class="span-movieBasicInfo-intro">
			제목&nbsp;:&nbsp;<input class="intro__input js_basicInfomovieTitle font" name="movieTitle" value="${movieBasicInfo.movieTitle}" type="text"><br><br>
			개요&nbsp;:&nbsp;<input class="intro__input font" name="movieGenre" value="${movieBasicInfo.movieGenre}" type="text"/><br><br>
			감독&nbsp;:&nbsp;<input class="intro__input font" name="movieDirector" value="${movieBasicInfo.movieDirector}" type="text"/>
			&nbsp;저자&nbsp;:&nbsp;<input class="intro__input font" name="movieAuthor" value="${movieBasicInfo.movieAuthor}" type="text"><br><br>
			출연&nbsp;:&nbsp;<input class="intro__input font" name="movieCast" value="${movieBasicInfo.movieCast}" type="text"><br><br>
			등급&nbsp;:&nbsp;<input class="intro__input font" name="movieAgeLimitText" value="${movieBasicInfo.movieAgeLimitText}" type="text">&nbsp;관람가<br><br>
			
			<c:if test="${reviewResult}">
				<label class="intro__label">평점&nbsp;:&nbsp;
				<c:choose>
					<c:when test="${movieBasicInfo.reviewEvaluate % 2 == 0}">
						<c:forEach begin="1" end="${movieBasicInfo.reviewEvaluate / 2}" >
							<img class="review-StarImg" src="/resources/img/reviewEvaluate/fullstart.png">
						</c:forEach>
						<c:forEach begin="1" end="${5 - (movieBasicInfo.reviewEvaluate / 2)}">
							<img class="review-StarImg" src="/resources/img/reviewEvaluate/star.png">
						</c:forEach>
					</c:when>
					<c:otherwise>
						<c:forEach begin="1" end="${movieBasicInfo.reviewEvaluate / 2}" >
							<img class="review-StarImg" src="/resources/img/reviewEvaluate/fullstart.png">
						</c:forEach>
						<c:forEach begin="1" end="${movieBasicInfo.reviewEvaluate % 2}" >
							<img class="review-StarImg" src="/resources/img/reviewEvaluate/halfstar.png">
						</c:forEach>
						<c:forEach begin="1" end="${5 - (movieBasicInfo.reviewEvaluate / 2)}">
							<img class="review-StarImg" src="/resources/img/reviewEvaluate/star.png">
						</c:forEach>
					</c:otherwise>
				</c:choose>
				&nbsp;&nbsp;${movieBasicInfo.reviewEvaluate}&nbsp;점
				</label>
			</c:if>
		</span> 
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
			<textarea class="tab-intro_content__intro resize" cols="91px">${movieBasicInfo.movieIntro}</textarea>
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