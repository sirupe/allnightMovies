<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="stylesheet" href="/resources/css/login.css">
	
	</head>
	<body>
		<div class="login-page margin-auto">
			<img class="login-page-img margin-auto" src="/resources/img/allnight.png">
			<div class="js_loginContainer login-page-container">
				<div class="login-page-container__message">
					로그인 후 이용해주세요.
				</div>
				
				<div class="login-page-container__input">
					<input class="js_userID" type="text" placeholder="아이디 입력"/>
				</div>
				
				<div class="login-page-container__input">
					<input class="js_userPWD" type="password" placeholder="비밀번호 입력"/>
				</div>
				
				<div class="login-page-container__btn">
					<button class="js_login login-page-container__btn__login" type="button">
						로그인
					</button>
					<button class="js_goMain login-page-container__btn__cancel" type="button">
						메인으로
					</button>
				</div>
				
				<div class="login-page-container__links">
					<a class="" href="/movie/mainService/getTemplate?directory=searchId&page=searchId&contentCSS=searchId/searchId&contentjs=searchId/searchId">아이디 찾기</a>
					<a class="" href="/movie/mainService/getTemplate?directory=searchPwd&page=searchPwd&contentCSS=searchPwd/searchPwd&contentjs=searchPwd/searchPwd">비밀번호 찾기</a>
					<a class="" href="/movie/mainService/getTemplate?directory=join/joinTerms&page=joinTerms&contentCSS=join/joinTerms&contentjs=join/joinTerms">회원가입</a>
				</div>
			</div>
		</div>
	</body>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="/resources/js/login.js"></script>
	
</html>