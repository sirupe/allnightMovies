<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:choose>
	<c:when test="${confirmNum == '1111'}">
		<div class="div__searchPwd-CheckConfirm__true">
			<div class="div__searchPwd__title">
				비밀번호 변경
			</div>
			<div class="div__searchPwd__content">
				<label class="label__searchPwd-CheckConfirm">새로운 비밀번호를 입력해 주세요</label>
				<input id="newPWD" class="input__searchPwd-CheckConfirm" type="password" name="newPwd" onkeyup="" placeholder="새 비밀번호">
				<input id="newPWD-check" class="input__searchPwd-CheckConfirm" type="password" name="newPwdCheck" placeholder="비밀번호 재확인">
				<button class="button__searchPwd__confirm" type="button" onclick="checkRePWD()">확인</button>
			</div>
		</div>
	</c:when>
	<c:otherwise>
		<div class="div__searchPwd-CheckConfirm__false">
			<div class="div__searchPwd__title">
				비밀번호 찾기
			</div>
			<div class="div__searchPwd-CheckConfirm__content">
				<label class="label__searchPwd-CheckConfirm__content">이메일 인증번호가 일치하지 않습니다.</label>
			</div>
		</div>
	</c:otherwise>
</c:choose>