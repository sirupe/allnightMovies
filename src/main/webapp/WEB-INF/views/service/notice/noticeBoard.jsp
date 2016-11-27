<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="js_noticeBoard">

	<c:choose>
		<c:when test="${totalList == 0}">
			<div class="noticeBoard-content font listnull">
				 검색 결과가 없습니다. 다른 조건으로 검색해 주세요.
			</div>
		</c:when>
		<c:otherwise>
			<div class="noticeBoard-content">
				<c:forEach items="${noticeDTO}" var="noticeDTO">
					<div class="notice-list__content font ">
		 			    <span class="no">${noticeDTO.no }</span>
					    <c:choose>
					    	<c:when test="${noticeDTO.important == 1}">
					    		<a class="title import bold" href="/movie/mainService/noticeBoardView?noticePage=${params.noticePage}&noticeNo=${noticeDTO.no}" >
					    			<img class="importImg" src="/resources/img/notice/notice.png">&nbsp;&nbsp;${noticeDTO.title}
					    		</a>
					    	</c:when>
					    	<c:otherwise>
					    		<a class="title bold" href="/movie/mainService/noticeBoardView?noticePage=${params.noticePage}&noticeNo=${noticeDTO.no}">${noticeDTO.title}</a>
					    	</c:otherwise>
					    </c:choose>
					    <span class="writer">AllnightMovies</span>
					    <span class="date">${noticeDTO.writeDate}</span>
					</div>
				</c:forEach>
			</div>
		</c:otherwise>
	</c:choose>
	
	<div class="notice-list__buttom font">
		<c:if test="${paging.startPageBlock != 1}">
			<label class="js_firstPage${search} paging bold" data-firstPage="${paging.startPageNum}"  >◀</label>
			<label class="js_prePage${search} paging bold" data-prePage="${paging.startPageBlock - 1}" >◁</label>
        </c:if>
        <c:forEach begin="${paging.startPageBlock}" end="${paging.endPageBlock}" var="page">
       		<label class="js_currentPage${search} paging bold" data-currentPage="${page}">${page}&nbsp;&nbsp;</label>
        </c:forEach>
        <c:if test="${paging.endPageBlock != paging.endPageNum}">
			<label class="js_nextPage${search} paging bold" data-nextPage="${paging.endPageBlock + 1}">▷</label>
			<label class="js_lastPage${search} paging bold" data-lastPage="${paging.endPageNum}">▶</label>
      	</c:if>
	</div>
</div>

