<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div__searchPwd">
	<div class="div__searchPwd__title">
		비밀번호 찾기
	</div>
	<div class="div__searchPwd__content">
		<label class="label__searchPwd__id">비밀번호를 찾고자 하는 ID를 입력해 주세요</label>
		<input type="hidden" name="userPWD" value="test"/>
		<input id="userID" class="input__searchPwd__id" type="text" name="userID"/>
		<button class="button__searchPwd__next" type="button" onclick="searchPwdResult()">다음</button>
	</div>
</div>


