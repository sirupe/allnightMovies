<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div-withdraw">
	<div class="div-withdraw__title">
		회원탈퇴
	</div>
	<div class="div-withdraw__content">
		<label class="label-withdraw__content">
			고객님의 개인정보 보호를 위한 절차이오니, 로그인 시 사용하는 비밀번호를 입력해 주세요.
		</label>
		<span class="span-withdraw__userid">
			<label>아이디</label>
			<input class="input-withdraw__userid" type="text" readonly="readonly" value="${userID}"/>
		</span>
		<span class="span-withdraw__password">
			<label>비밀번호 입력</label>
			<input id="withdraw-password" class="input-withdraw__password" name="withdrawUserPwd" type="password" placeholder="비밀번호 입력" />
		</span>
		<span class="span-withdraw__buttons">
			<button class="button-withdraw__withdraw" type="button" onclick="withdraw()">탈퇴하기</button>
			<button class="button-withdraw__reset" type="button" onclick="viewMyInfo()">내정보</button>
		</span>
	</div>
</div>