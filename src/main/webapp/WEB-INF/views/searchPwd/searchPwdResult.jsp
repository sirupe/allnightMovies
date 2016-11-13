<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div__searchPwdResult">
	<c:choose>
		<c:when test="${result != 1}">
			<div class="div__searchPwd__title">
				비밀번호 찾기
			</div>
			<div class="div__searchPwd__content">
				<label class="label__searchPwd__id">아이디가 존재하지 않습니다.</label>
			</div>
		</c:when>
		<c:otherwise>
			<div class="div__searchPwd__title">
				비밀번호 찾기
			</div>
			<div class="div__searchPwd__content">
				<label class="label__searchPwd__id">회원가입시 입력하신 이메일로 인증번호가 발송됩니다.</label>
				<button class="button__searchPwd__sendMail" type="button">인증번호발송</button>
			</div>
		</c:otherwise>
	</c:choose>
</div>