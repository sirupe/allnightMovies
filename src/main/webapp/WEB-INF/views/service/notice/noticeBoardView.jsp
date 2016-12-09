<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="stylesheet" href="/resources/css/service/notice/managerNotice.css">
<script async="async" type="text/javascript" src="/resources/js/service/notice/managerModify.js"></script>

<div class="noticeBoardView js_noticeBoardViewContainer">
	<label class="noticeBoardView_title font">공지사항</label>
    <div class="noticeBoard-content">
    	<span class="noticeBoard-title font">
	        <label class="noticeBoard__title js_noticeBoardTitle">${title}</label>  
	        <label class="noticeBoard__writeDate">작성일 : ${writeDate}</label>
        </span>
	    <pre class="noticeBoard__content font  js_noticeBoardContent" >${content}</pre>
		<c:if test="${isManager}">
			<button class="noticeBoardView__buttons js_deleteBtn" type="button">삭제</button>
			<button class="noticeBoardView__buttons js_updateBtn" type="button">수정</button>
	    	<input type="hidden" name="managerNoticePage" value="${noticePage}">
	    	<input type="hidden" name="managerNoticeNo" value="${noticeNo}">
	    </c:if>
	    <button class="noticeBoard__listButton font  js_noticeBoardBtn" type="button" data-notice-page="${noticePage}" data-notice-no="${noticeNo}">목록보기</button>
    </div>
</div>

