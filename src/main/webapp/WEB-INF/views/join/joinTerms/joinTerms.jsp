<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
	<div class="content__terms">
		<div class="content__terms__title">
			서비스이용약관
		</div>
		
		<div class="content__terms__content">
			<jsp:include page="./serviceTerms.jsp"/>
		</div>
		
		<div class="content__terms__agree">
		<input type="checkbox" id="terms-agree1"/>
		<label>약관에 동의합니다.</label>
		</div>
		
		<div class="content__terms__title">
			개인정보보호방침
		</div>
		
		<div class="content__terms__content">
			<jsp:include page="./privacy.jsp"/>
		</div>
		
		<div class="content__terms__agree">
			<input type="checkbox" id="terms-agree2"/>
			<label>약관에 동의합니다.</label>
		</div>
		
		<div class="content__terms__join js_joinTerms">
			<button onclick="agree()" type="button">
				회원가입
			</button>

		</div>
	</div>