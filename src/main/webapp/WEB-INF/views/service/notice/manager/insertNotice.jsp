<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script async="async" type="text/javascript" src="/resources/js/service/notice/managerNotice.js"></script>

<div class="insertNoticeForm js_insertNoticeForm">
	<label class="insertNoticeForm-label">공지사항 입력</label>
	<div class="insertNoticeForm-title">
		<label class="insertNoticeForm__label">제목</label>	
		<input class="insertNoticeForm__input js_noticeTitle" type="text">
		<input class="insertNoticeForm__important js_noticeImportant" type="checkbox" />중요
	</div>
	
	<div class="insertNoticeForm-contents">
	 	<label class="insertNoticeForm__label padding">내용</label>
		<textarea class="insertNoticeForm__textArea js_noticeContents"></textarea>
	</div>
	
	<div class="insertNoticeForm-buttons">
		<button class="insertNoticeForm__button js_insertBtn" type="button">등록</button>
		<button class="insertNoticeForm__button" type="reset">취소</button>
	</div>
</div>