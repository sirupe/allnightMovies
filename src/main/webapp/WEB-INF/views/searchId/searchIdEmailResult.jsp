<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:choose>
	<c:when test="${userEmailIDCount >= 1}">
		<div class="div__searchId_Email_form js_locationSearchPwdEmail">
			<div class="div__searchId_Email_form__title">
				아이디 찾기
			</div>
			<div class="div__searchId_Email__content">
				<label class="label__searchId_Email__name__result">회원님의 아이디는 </label>
				<label class="label__searchId_Email__id__result">${userEmail }입니다.</label>
				<span class="span_button_search-ConfirmId_email_Button">
					<button class="button__searchId-ConfirmId_email-main" type="button" onclick="locationMain()">메인으로</button>
					<button class="button__searchId-ConfirmId_email-searchPWd" type="button" onclick="locationSearchPwd()">비밀번호 찾기</button>
				</span>	
			</div>
		</div>
	</c:when>
	
	<c:otherwise>
		<div class="div__searchId_Email_form js_locationSearchPwd">
			<div class="div__searchId_Email_form__title">
				아이디 찾기
			</div>
			<div class="div__searchId_Email__content">
				<label class="label__searchId_Email__name__result">
					회원정보를 찾을 수 없습니다. 다시 입력해주세요.
				</label>
				<button class="button__searchId_Email__next" type="button" onclick="locationSearchID()">되돌아가기</button>
			</div>
		</div>
	</c:otherwise>
</c:choose>