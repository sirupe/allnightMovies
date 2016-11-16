<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div__searchPwd-changeCompleted">
	<div class="div__searchPwd__title">
		비밀번호 변경
	</div>
	<div class="div__searchPwd__content">
		<label class="label__searchPwd-changeCompleted">
			비밀번호 변경이 완료되었습니다.
		</label>
		<div class="div__searchPwd__changeCompleted-button">
			<button class="button__searchPwd-changeCompleted-login" type="button" onclick="locationLogin()">로그인</button>
			<button class="button__searchPwd-changeCompleted-main" type="button" onclick="locationMain()">메인으로</button>
		</div>
	</div>
</div>