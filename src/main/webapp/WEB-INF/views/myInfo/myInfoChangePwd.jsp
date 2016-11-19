<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div-myInfoChangePwd">

	<div class="div-myInfoChangePwd__title">
		비밀번호 변경
	</div>
	<div class="div-myInfoChangePwd__content">
		<label class="label-myInfoChangePwd__content">
			현재 사용 중인 비밀번호와 변경하실 비밀번호를 입력해 주세요
		</label>
		<input id="present-pwd" name="presentPwd" type="password" class="input-myInfoChangePwd__presentPwd" onkeyup="validationPresentPWD()" placeholder="현재 비밀번호">
		<label id="validation-present-pwd" class="label-validation__presentPwd">필수 입력사항입니다.</label>
		
		<input id="myinfo-newpwd" name= "myInfoNewPwd" type="password" class="input-myInfoChangePwd__newPwd" onkeyup="validationPWD()" placeholder="새 비밀번호">
		<label id="validation-newpwd" class="label-validation__newpwd">필수 입력사항입니다.</label>
		
		<input id="myinfo-check-newpwd" name= "checkMyInfoNewPwd" type="password" class="input-myInfoChangePwd__ChecknewPwd" onkeyup="validationRePWD()" placeholder="새 비밀번호 확인">
		<label id="validation-check-newpwd" class="label-validation__check__newpwd">필수 입력사항입니다.</label>
		
		<span class="span-myInfoChangePwd__buttons">
			<button class="button-myInfoChangePwd__confirm" onclick="changePwdInfo()" type="button">확인</button>
			<button class="button-myInfoChangePwd__reset" onclick="viewMyInfo()" type="button">취소</button>
		</span>
		
	</div>
</div>

