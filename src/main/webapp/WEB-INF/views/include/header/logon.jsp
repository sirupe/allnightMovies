<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="header__logon">
	<div class="header__logon__top">
		<div class="header__logon__top__wellcom-text">
			환영합니다. ${userID } 님.
		</div>
		<div class="header__logon__top__buttons">
			<button type="button">
				내정보
			</button>
			<button type="button" onclick="">
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