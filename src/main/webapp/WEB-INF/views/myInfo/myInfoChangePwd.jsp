<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div-myInfoChangePwd js_pwdChangeContainer">
	<div class="div-myInfoChangePwd__title">
		비밀번호 변경
	</div>
	<div class="div-myInfoChangePwd__content">
		<label class="label-myInfoChangePwd__content">
			현재 사용 중인 비밀번호와 변경하실 비밀번호를 입력해 주세요
		</label>
		<input name="presentPwd" type="password" class="input-myInfoChangePwd__presentPwd js_pwdChangePresentPwdText" placeholder="현재 비밀번호">
		<label class="label-validation__presentPwd js_pwdChangePresentPwdLabel">필수 입력사항입니다.</label>
		
		<input name= "myInfoNewPwd" type="password" class="input-myInfoChangePwd__newPwd js_pwdChangeNewPwdText" placeholder="새 비밀번호">
		<label class="label-validation__newpwd js_pwdChangeNewPwdLabel">필수 입력사항입니다.</label>
		
		<input name= "checkMyInfoNewPwd" type="password" class="input-myInfoChangePwd__ChecknewPwd js_pwdChangeRePwdText" placeholder="새 비밀번호 확인">
		<label class="label-validation__check__newpwd js_pwdChangeRePwdLabel">필수 입력사항입니다.</label>
		
		<span class="span-myInfoChangePwd__buttons">
			<button class="button-myInfoChangePwd__confirm js_pwdChangeChangePwdBtn" type="button">확인</button>
			<button class="button-myInfoChangePwd__reset js_pwdChangeMyinfoBtn" type="button">내정보</button>
		</span>
		
	</div>
</div>

