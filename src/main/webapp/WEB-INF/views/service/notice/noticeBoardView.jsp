<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="noticeBoardView js_noticeBoardViewContainer">
	<label class="noticeBoardView_title font">공지사항</label>
    <div class="noticeBoard-content">
    	<span class="noticeBoard-title font">
	        <label class="noticeBoard__title">${title}</label>  
	        <label class="noticeBoard__writeDate">작성일 : ${writeDate}</label>
        </span>
	    <pre class="noticeBoard__content font  js_noticeBoardContent" >${content}</pre>
	    <button class="noticeBoard__listButton font  js_noticeBoardBtn" data-notice-page="${noticePage}" data-notice-no="${noticeNo}" >목록보기</button>
    </div>
</div>