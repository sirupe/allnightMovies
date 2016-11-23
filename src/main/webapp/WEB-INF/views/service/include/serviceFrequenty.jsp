<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="container__serviceCenterFrequenty">
	<ul class="container__serviceCenterFrequenty_content js_service_List">
	<c:forEach items="${boardPage }" var="boardPage">
			<li>
				<div class="serviceCenterFrequenty__subject js_sub" onclick="frequentlyBoard()">Q.${boardPage.getQUESTION() }</div>	
				<div class="serviceCenterFrequenty__contents js_con">${boardPage.getASKED() }</div>
			</li>
	</c:forEach>
	</ul>
	
	<div class="serviceCenterFrequenty__pageButton js_servicePageButton">
		<c:if test="${pageGroup.isPreButton()}"><div class="js_preButton">이전</div></c:if>
			<c:forEach begin="${pageGroup.viewStartPageNum }" end="${pageGroup.viewEndPageNum }" var="page">
					<span>
						<c:choose>
							<c:when test="${checkPage == page }">
								${page }
							</c:when>
							
							<c:otherwise>
								<div class="js_pagingNumber">${page}</div>
							</c:otherwise>
						</c:choose>
					</span>
			</c:forEach>
		<c:if test="${pageGroup.isNextButton() }"><div class="js_nextButton">다음</div></c:if>
	</div>
	
	<div class = "serviceCenterFrequenty__searchButton js_serviceSearchButton">
		<input type="text" name="seviceCenterSearch">검색
	</div>
</div>
   <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
