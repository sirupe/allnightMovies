<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="header__login">
	<div class="header__login__keep-login">
	    <input type="checkbox" name="keepLogin" value="check"/>
	    <label>로그인 유지</label>
	</div>
	<div class="header__login__comp">
		<div class="header__login__comp__inputtext">
			<input type="text" placeholder="아이디 입력" name="userID" id="user-id"/>
			<input type="password" placeholder="패스워드 입력" name="userPWD" id="user-pwd"/>
		</div>
		<div class="header__login__comp__submit">
			<button type="button" class="js_lobin-btn">
				Login
			</button>
		</div>
	</div>
	<div class="header__login__text">
	    <a href="#" class="js_join">회원가입</a> | 
	    <a href="#" class="js_searchID">아이디</a> / <a href="#" class="js_searchPWD">패스워드 찾기</a>
	</div>
</div>