<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="header__logon">
	<div class="header__logon__top">
		<div class="header__logon__top__buttons">
			<label class="header__logon__top__welcome-text">${userID }님 </label>
			<button class="header__logon__top__buttons__myinfo js_myInfo" type="button">
				내정보
			</button>
			<button class="header__logon__top__buttons__logout js_logout" type="button">
				로그아웃
			</button>
			<c:if test="${isManager }">
				이사람은 매니져다.
			</c:if>
			
		</div>
	</div>
</div>