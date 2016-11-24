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
		<c:if test="${pageGroup.isPreButton()}"><span data-prepage="${pageGroup.viewStartPageNum - 1}" class="js_preButton">이전</span></c:if>
			<c:forEach begin="${pageGroup.viewStartPageNum }" end="${pageGroup.viewEndPageNum }" var="page">
					<div class="serviceCener_paging_button">
						<c:choose>
							<c:when test="${checkPage == pageGroup.userClickPageNum }">
								<span class="js_currentNumber">${page}</span>
							</c:when>
							
							<c:otherwise>
								<span class="js_pagingNumber">${page}</span>
							</c:otherwise>
						</c:choose>
					</div>
			</c:forEach>
		<c:if test="${pageGroup.isNextButton() }"><span data-nextpage="${pageGroup.viewEndPageNum + 1 }"  class="js_nextButton">다음</span></c:if>
	</div>
	
	<div class="serviceCenter_search">
		<input class="serviceCenter_Searchinput" type="text" placeholder="고객센터 내용 검색">
		<button class="serviceCenter_Searchbutton js_serviceCenter_button">검색</button>
	</div>
</div>
   <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
