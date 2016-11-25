<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="js_noticeBoard">
	<div class="noticeBoard-content">
		<c:forEach items="${noticeDTO}" var="noticeDTO">
			<div class="notice-list__content font ">
 			    <span class="no">${noticeDTO.no }</span>
			    <c:choose>
			    	<c:when test="${noticeDTO.important == 1}">
			    		<a class="title import bold" href="/movie/mainService/noticeBoardView?noticePage=${params.noticeUserClickPage}&noticeNo=${noticeDTO.no}" >
			    			<img class="importImg" src="/resources/img/notice/notice.png">&nbsp;&nbsp;${noticeDTO.title}
			    		</a>
			    	</c:when>
			    	<c:otherwise>
			    		<a class="title bold" href="/movie/mainService/noticeBoardView?noticePage=${params.noticeUserClickPage}&noticeNo=${noticeDTO.no}">${noticeDTO.title}</a>
			    	</c:otherwise>
			    </c:choose>
			    <span class="writer">AllnightMovies</span>
			    <span class="date">${noticeDTO.writeDate }</span>
			</div>
		</c:forEach>
	</div>
	
	<div class="notice-list__buttom font">
		<c:if test="${paging.startPageBlock != 1}">
			<label class="js_firstPage paging" data-firstPage="${paging.startPageNum}"  >◀</label>
			<label class="js_prePage paging" data-prePage="${paging.startPageBlock - 1}" >◁</label>
        </c:if>
        <c:forEach begin="${paging.startPageBlock}" end="${paging.endPageBlock}" var="page">
       		<label class="js_currentPage paging bold" data-currentPage="${page}">${page}&nbsp;&nbsp;</label>
        </c:forEach>
        <c:if test="${paging.endPageBlock != paging.endPageNum}">
			<label class="js_nextPage paging" data-nextPage="${paging.endPageBlock + 1}">▷</label>
			<label class="js_lastPage paging" data-lastPage="${paging.endPageNum}">▶</label>
      	</c:if>
	</div>
	
</div>