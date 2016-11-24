<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- 게시글 row(foreach)-->
<div class="js_noticeBoard">
	<div class="noticeBoard-content">
		<c:forEach items="${noticeDTO}" var="noticeDTO">
			<div class="notice-list__content font ">
			    <span class="no">${noticeDTO.no }</span>
			    <c:choose>
			    	<c:when test="${noticeDTO.important == 1}">
			    		<a href="/notice/noticeBoardView?no=${noticeDTO.no }" class=" title import js_noticeView bold">${noticeDTO.title }</a>
			    	</c:when>
			    	<c:otherwise>
			    		<a href="/notice/noticeBoardView?no=${noticeDTO.no }" class="title js_noticeView bold">${noticeDTO.title }</a>
			    	</c:otherwise>
			    </c:choose>
			    <span class="writer">AllnightMovies</span>
			    <span class="date">${noticeDTO.writeDate }</span>
			</div>
		</c:forEach>
	</div>
	<!-- 게시글 하단 -->
	<div class="notice-list__buttom font">
		<!-- 한블럭당 page수  -->
		<c:if test="${paging.startPageBlock != 1}">
			<label data-firstPage="${paging.startPageNum}" class="js_firstPage  paging" >◀</label>
			<label data-prePage="${paging.startPageBlock -1 }" class="js_prePage  paging">◁</label>
        </c:if>
        <c:forEach begin="${paging.startPageBlock }" end="${paging.endPageBlock }" var="page">
       		<label data-currentPage="${page}" class="js_currentPage  paging bold">${page }&nbsp;&nbsp;</label>
        </c:forEach>
        <c:if test="${paging.endPageBlock != paging.endPageNum}">
			<label data-nextPage="${paging.endPageBlock + 1 }" class="js_nextPage  paging">▷</label>
			<label data-lastPage="${paging.endPageNum}" class="js_lastPage  paging" >▶</label>
      	</c:if>
	</div>
</div>