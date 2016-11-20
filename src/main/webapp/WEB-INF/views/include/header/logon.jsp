<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="header__logon">
	<div class="header__logon__top">
		<div class="header__logon__top__buttons">
			<label class="header__logon__top__welcome-text">${userID }님</label>
			<button class="header__logon__top__buttons__myinfo" type="button" onclick="locationMyInfo()">
				내정보
			</button>
			<button class="header__logon__top__buttons__logout" type="button" onclick="logout()">
				로그아웃
			</button>
		</div>
	</div>
	<div class="header__logon__bottom">
		<div class="header__logon__bottom__reserve">
			예매정보
		</div>
		<div class="header__logon__bottom__service">
			고객센터
		</div>
	</div>
</div>