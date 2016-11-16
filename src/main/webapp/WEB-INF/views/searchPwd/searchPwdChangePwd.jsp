<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div__searchPwd-CheckConfirm">
	<div class="div__searchPwd__title">
		비밀번호 변경
	</div>
	<div class="div__searchPwd__content">
		<label class="label__searchPwd-CheckConfirm">새로운 비밀번호를 입력해 주세요</label>
		
		<input id="newPWD" class="input__searchPwd-CheckConfirm" type="password" name="searchPwdNewPwd" onkeyup="validationPWD()" placeholder="새 비밀번호">
		<div id="newPWD-text" class="div-newPWD">필수 입력사항입니다.</div>
		
		<input id="newPWD-check" class="input__searchPwd-CheckConfirm" type="password" name="searchPwdRenewPwd" onkeyup="validationRePWD()" placeholder="비밀번호 재확인">
		<div id="newPWD-re-text" class="div-newPWDCheck">필수 입력사항입니다.</div>
		<button class="button__searchPwd__confirm" type="button" onclick="checkRePWD()">확인</button>
	</div>
</div>
