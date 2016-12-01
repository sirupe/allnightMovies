<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="stylesheet" href="/resources/css/movie/stillCut.css">
<script async="async" type="text/javascript" src="/resources/js/movie/stillcut.js"></script>

<div class="js_stilcutContainer stillCut">
	<c:forEach items="${ movieStillCutDTO}" var="stillCut" varStatus="status">
		<c:choose>
			<c:when test="${movieStillCutCount}">
				<div class="row-padding w3-section">
					<div class="w3-col s4">
						<img class="demo w3-opacity w3-hover-opacity-off" src="/resources/img/stillcut/${stillCut.movieCut}" onclick="currentDiv(${status.count})"/>
					</div>
			    </div>
				<div class="mainImg">
					<img class="js_imageSlide mySlides" src="/resources/img/stillcut/${stillCut.movieCut}" data-stillcut-image="${stillCut.movieCut}">
				</div>
			</c:when>
			<c:otherwise>
				<div class="row-padding w3-section">
					!스틸컷 정보가 없습니다.
				</div>
			</c:otherwise>
		</c:choose>
	</c:forEach>
</div>
