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
	<div class="notice-list__content font">
	    <span class="no">111</span>
	    <span class="title">첫번째 공지사항 입니다요</span>
	    <span class="writer">AllnightMovies</span>
	    <span class="date">2016.12.10</span>
	</div>
	
	<!-- 게시글 하단 -->
	<div class="notice-list__buttom font">
	        - 1.2.3.4.5.6.7.8.9.8.7.8.-
	</div>
</div>