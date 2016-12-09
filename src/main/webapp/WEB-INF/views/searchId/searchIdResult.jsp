<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:choose>
	<c:when test="${result >= 1}">
		<div class="div__searchId_form js_userFindIdcontainer">
			<div class="div__searchId_form_title">
				아이디 찾기
			</div>
			<div class="div__searchId__content">
				<label class="label__searchId__name__result">${searchIdUserName}님의 아이디는 </label>
				<label class="label__searchId__id__result">${userSearchId }입니다.</label>
				<span class="span_button_search-ConfirmId_Button">
					<button class="button__searchId-ComfirmId-main js_locationMain" type="button">메인으로</button>
					<button class="button__searchId-ComfirmId-searchPWd js_searchPwdBack" type="button">비밀번호 찾기</button>
				</span>	
			</div>
		</div>
	</c:when>
	
	<c:otherwise>
		<div class="js_searchIDEmailContainer div__searchId_form">
			<div class="div__searchId_form_title">
				아이디 찾기
			</div>
			<div class="div__searchId__content">
				<label class="label__searchId__id__result">
					회원정보를 찾을 수 없습니다. 다시 입력해주세요.
				</label>
				<button class="button__searchId__next js_searchIdBack" type="button">되돌아가기</button>
			</div>
		</div>
	</c:otherwise>
</c:choose>
