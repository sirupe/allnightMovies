<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="js_frequentlyBoardContainer">
	<div class="container__serviceCenterFrequenty">
		<ul class="container__serviceCenterFrequenty_content js_service_List">
		<div class="serviceCenter_search">
			<img  class="search-icon"></img>
			<input class="serviceCenter_Searchinput js_searchCenter_input" type="text" placeholder="고객센터 내용 검색"/>
			<button class="serviceCenter_Searchbutton js_serviceCenter_button" type="button">검색</button>
		</div>
		
		<c:choose>
			<c:when test="${pageCount == 0 }">
				검색 결과가 없습니다. 다시 입력해주세요
			</c:when>
			<c:otherwise>
						<c:forEach items="${boardPage }" var="boardPage">
							<li>
								<div class="serviceCenterFrequenty__subject js_sub" onclick="frequentlyBoard()">Q.${boardPage.getQUESTION() }</div>	
								<div class="serviceCenterFrequenty__contents js_con">${boardPage.getASKED() }</div>
							</li>
					</c:forEach>
					</ul>
				</div>
				<div class="serviceCenterFrequenty__pageButton js_servicePageButton">
					<c:if test="${pageGroup.isPreButton()}"><span class="js_preButton${search }" data-prepage="${pageGroup.viewStartPageNum - 1}" >이전</span></c:if>
						<c:forEach begin="${pageGroup.viewStartPageNum }" end="${pageGroup.viewEndPageNum }" var="page">
								<div class="serviceCener_paging_button">
			
									<c:choose>
										<c:when test="${checkPage == page }">
											<span class="serviceCenterFrequenty__pageButton--active js_currentNumber${search } " data-PageNum=${page }>${page}</span>
										</c:when>
										
										<c:otherwise>
											<span class="js_pagingNumber${search }" data-currentPage=${page }>${page}</span>
										</c:otherwise>
									</c:choose>
								</div>
						</c:forEach>
					<c:if test="${pageGroup.isNextButton() }"><span data-nextpage="${pageGroup.viewEndPageNum + 1 }"  class="js_nextButton${search }">다음</span></c:if>
				</div>
			</div>
	
			   <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
			   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
			</c:otherwise>
		</c:choose>
				