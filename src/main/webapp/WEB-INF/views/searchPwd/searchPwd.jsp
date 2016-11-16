<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div__searchPwd">
	<div class="div__searchPwd__title">
		비밀번호 찾기
	</div>
	<div class="div__searchPwd__content">
		<label class="label__searchPwd__id">사용중인 ID를 입력해 주세요</label>
		<input id="search-userid" class="input__searchPwd__id" type="text" name="searchPwdUserID" onkeyup="validationID()" placeholder="아이디 입력" autocomplete="off"/>
		<div id="search-userid-result" class="div-search-userid-result">필수 입력사항입니다.</div>
		<button class="button__searchPwd__next" type="button" onclick="searchPwdResult()">다음</button>
	</div>
</div>


