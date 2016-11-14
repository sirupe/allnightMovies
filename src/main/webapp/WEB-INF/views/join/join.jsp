<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="background">
	<div class="join-form">
		<div class="join-form__title">
			<h2>회원가입</h2>
		</div>
		<div class="join-form__info1">
			
			<input id="userID" type="text" placeholder="아이디 입력" onkeyup="idCheck()" autocomplete="off" name="userID"/>
			<div id="idResult" class="join__resultText">필수 입력사항입니다.</div>
			
			<input id="userPWD" type="password" placeholder="비밀번호 입력" name="userPWD" onkeyup="pwdCheck()"/>
			<div id="pwdResult" class="join__resultText">필수 입력사항입니다.</div>
			
			<input id="userRePWD" name="userRePWD" type="password" placeholder="비밀번호 재입력" onkeyup="rePwdCheck()"/>
			<div id="rePwdResult" class="join__resultText">필수 입력사항입니다.</div>
		
		</div>
		<div class="join-form__info2">
			
			<input type="text" placeholder="이름 입력" name="userName"/>
			<div id="userName" class="join__resultText">필수 입력사항입니다.</div>
			
			<select class="join-form__info2__gender" name="userGender">
				<option>남자</option>
				<option>여자</option>
			</select>
			
			<input type="date" name="userBirth"/>
			<div id="userName" class="join__resultText">필수 입력사항입니다.</div>
			
			<div>
				<input type="email" placeholder="이메일 입력" name="userEmail"/>
				<button class="join-form__info2__confirm-button">
					인증번호 발송
				</button>
				<div id="userName" class="join__resultText">필수 입력사항입니다.</div>
			</div>    
			<input type="number" placeholder="인증번호 입력"/>
		</div>
		<div class="join-form__join-btn">
			<button class="join-button" type="button">
				회원가입
			</button>
		</div>
	</div>
</div>