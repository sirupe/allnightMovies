<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="noticeBoard-content__manager js_noticeBoardViewContainer">
	<label class="noticeBoard-content__label">공지사항 수정</label>
	<span class="noticeBoard-title font">
	    제목:<input class="noticeBoard-update__title js_noticeTitle" value="${title}" type="text"/>
		<label class="noticeBoard__writeDate">작성일 : ${writeDate}</label>
		<c:choose>
			<c:when test="${important == 1}">
			    <input class="js_managerNoticeImportant" type="checkbox" checked="checked">중요
			</c:when>
			<c:otherwise>
			    <input class="js_managerNoticeImportant" type="checkbox">중요
			</c:otherwise>
		</c:choose>
	</span>
	<textarea class="managerNoticeBoard__content font  js_contentsTextArea">${content}</textarea>
	<div style="margin: 20px;">
		<button class="noticeBoard__listButton font  js_noticeBoardBtn" type="button" data-notice-page="${noticePage}" data-notice-no="${noticeNo}">목록보기</button>
		<button class="noticeBoardView__buttons js_updateCompleteBtn" type="button">수정완료</button>
	</div>
</div>