<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div-myInfoChangeEmail__Form js_emailChangeContainer">
	<div class="div-myInfoChangeEmail__title">
		이메일주소 변경
	</div>
	<div class="div-myInfoChangeEmail__content">
		<label class="label-myInfoChangeEmail__content">변경하실 이메일 주소 와 인증번호를 입력해주세요</label>
		<span>
			<input class="input-myInfoChangeEmail__confirm js_emailConfirmNumInput" type="text" readonly="readonly" placeholder="인증번호를 발송해주세요">
			<button class="button-myInfoChangeEmail__sendmail js_emailConfirmNumInputBtn" type="button">인증번호 발송</button>
		</span>
		<div class="text-confirm-thread js_emailConfirmNumText"></div>
		<input class="input-myInfoChangeEmail js_emailChangeEmailInput" type="text" placeholder="변경이메일 입력">
		<div class="text-myInfoChangeEmail js_emailChangeEmailText">필수 입력사항입니다.</div>
		<span>
			<button class="button-myInfoChangeEmail__submit js_emailChangeSubmitBtn" type="button">변경하기</button>
			<button class="button-myInfoChangeEmail__reset js_emailChangeMyinfoBtn" type="button">내정보</button>
		</span>
	</div>
</div>