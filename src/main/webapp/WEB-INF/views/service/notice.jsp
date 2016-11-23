<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="notice  js_noticeContainer">
	<label class="notice_title font">공지사항</label>
	<div class="notice-search">
        <span  class="search-icon"></span>
        <input class="search-input font " type="text" name="noticeBoardSearch" placeholder=" 공지사항내용 검색"> 
        <button class="searchbutton font ">검색</button>
	</div>
	
	<!-- 게시글 column-->
	<div class="notice-list__title  font  ">
	    <span class="no">NO</span>
	    <span class="title">제목</span>
	    <span class="writer">작성자</span>
	    <span class="date">날짜</span>
	</div>

	<!-- 게시글 row(foreach)-->
	<c:forEach items="" var="">
		<div class="notice-list__content font">
		    <span class="no"></span>
		    <span class="title"></span>
		    <span class="writer">AllnightMovies</span>
		    <span class="date"></span>
		</div>
	</c:forEach>
	
	<!-- 게시글 하단 -->
	<div class="notice-list__buttom font">
		<c:if test="${paging.startPageBlock != 1}">
			<a href="/notice?page=${paging.startPageNum}">◀</a>
			<a href="/notice?page=${paging.startPageBlock -1 }">◁</a>
        </c:if>
        
        <c:forEach begin="${paging.startPageBlock }" end="${paging.endPageBlock }" var="page">
           	<a href="/notice?page=${page}">${page }</a>
        </c:forEach>
        
        <c:if test="${paging.endPageBlock != paging.endPageNum}">
			<a href="/notice?page=${paging.endPageBlock + 1 }" >▷</a>
			<a href="/notice?page=${paging.endPageNum}" >▶</a>
        </c:if>
        
	</div>
</div>