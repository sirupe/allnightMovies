<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div__searchPwd-CheckConfirm js_searchPwdContainer">
	<div class="div__searchPwd__title">
		비밀번호 변경
	</div>
	<div class="div__searchPwd__content">
		<label class="label__searchPwd-CheckConfirm">새로운 비밀번호를 입력해 주세요</label>
		
		<input class="input__searchPwd-CheckConfirm js_searchPwdNewPwdInput" type="password" name="searchPwdNewPwd" placeholder="새 비밀번호">
		<div class="div-newPWD js_searchPwdNewPwdText">필수 입력사항입니다.</div>
		
		<input class="input__searchPwd-CheckConfirm js_searchPwdReNewPwdInput" type="password" name="searchPwdRenewPwd" placeholder="비밀번호 재확인">
		<div class="div-newPWDCheck js_searchPwdReNewPwdText">필수 입력사항입니다.</div>
		<button class="button__searchPwd__confirm js_searchPwdCheckPwdBtn" type="button">확인</button>
	</div>
</div>
