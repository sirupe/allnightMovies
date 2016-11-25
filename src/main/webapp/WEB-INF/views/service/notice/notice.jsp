<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="notice  js_noticeContainer">

	<label class="notice_title font">공지사항</label>
	<div class="notice-search">
        <span  class="search-icon"></span>
        <input class="search-input font js_searchInput " type="text" name="noticeBoardSearch" placeholder=" 공지사항내용 검색"> 
        <button class="searchbutton font js_searchBtn">검색</button>
	</div>
	
	<div class="notice-list__title  font  ">
	    <span class="no">NO</span>
	    <span class="title">제목</span>
	    <span class="writer">작성자</span>
	    <span class="date">날짜</span>
	</div>
	<jsp:include page="./noticeBoard.jsp"></jsp:include>
	
</div>