<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div-myInfoChangeEmail">
	<div class="div-myInfoChangeEmail__title">
		이메일주소 변경
	</div>
	<div class="div-myInfoChangeEmail__content">
		<label>변경할 이메일 주소 입력 후 인증을 받아주세요</label>
		<span>
			<input id="" class="input-myInfoChangeEmail__confirm" type="text" onkeyup="validationEmail()" placeholder="인증번호 입력">
			<button id="" class="button-myInfoChangeEmail__sendmail" type="button">인증번호 발송</button>
		</span>
		<input id="" class="input-myInfoChangeEmail" type="text" onkeyup="" placeholder="변경이메일 입력">
		<div id="text-myInfoChangeEmail" class="text-myInfoChangeEmail">필수 입력사항입니다.</div>
		<span>
			<button id="" class="button-myInfoChangeEmail__submit" type="button" onclick="">변경하기</button>
			<button id="" class="button-myInfoChangeEmail__reset" type="button" onclick="viewMyInfo()">취소</button>
		</span>
	</div>
</div>