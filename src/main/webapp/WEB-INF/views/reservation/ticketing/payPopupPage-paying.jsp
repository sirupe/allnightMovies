<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="stylesheet" href="/resources/css/reservation/paying.css">
<script async="async" type="text/javascript" src="/resources/js/reservation/paying.js"></script>
<div class="pay-ing">
	<div class="paying__title">
		결제진행(카드결제)
	</div>
	<div class="js_payingContainer paying__body">
		<div class="paying__div">
			<span class="paying__label">카드종류</span>
			<select class="js_cardType paying__card-choose font-text">
				<option>선택</option>
				<option>신한카드</option>
				<option>BC(비씨)카드</option>
				<option>KB국민카드</option>
				<option>현대카드</option>
				<option>삼성카드</option>
				<option>롯데카드</option>
				<option>외환카드</option>
				<option>NH농협(채움)카드</option>
				<option>하나카드</option>
				<option>씨티카드</option>
				<option>우리카드</option>
				<option>재주은행카드</option>
				<option>전북은행카드</option>
				<option>광주은행카드</option>
				<option>수협카드</option>
				<option>KDB산업은행카드</option>
				<option>우체국카드</option>
				<option>MG새마을금고카드</option>
				<option>저축은행카드</option>
				<option>신협카드</option>
				<option>현대증권카드</option>
			</select>
		</div>
		<div class="paying__div">
			<span class="paying__label">카드번호</span>
			<input class="js_cardNumber1 js_inputs paying__card-number font-passwd" type="password" maxlength="4"/> - 
			<input class="js_cardNumber2 js_inputs paying__card-number font-passwd" type="password" maxlength="4"/> - 
			<input class="js_cardNumber3 js_inputs paying__card-number font-passwd" type="password" maxlength="4"/> - 
			<input class="js_cardNumber4 js_inputs paying__card-number font-passwd" type="password" maxlength="4"/> 
		</div>
		<div class="paying__div">
			<span class="paying__label">비밀번호</span>
			
			<input class="js_cardPWD js_inputs paying__card-pwd font-passwd" type="password" maxlength="2"/>
			
			<span class="paying__text">**</span>
			<span class="paying__label expiry-date">유효기간</span>
			
			<input class="js_cardExpiryDate1 js_inputs paying__expiry-date font-text" type="text" placeholder="MM" maxlength="2"/> <span class="paying__text">월</span>
			<input class="js_cardExpiryDate2 js_inputs paying__expiry-date font-text" type="text" placeholder="YY" maxlength="2"/> <span class="paying__text">년</span>
		</div>
		<div class="paying__div">
			<span class="paying__label">생년월일</span>
			<input class="js_cardOwnerBirth js_inputs paying__birth font-text" type="text" maxlength="6"/> - 
			<span class="font-text">*******</span>
		</div>
		<div class="paying__div__message">
			결제하실 금액은 <span class="js_payingMessagePrice paying__div__message__price"></span> 원입니다.
		</div>
		<div class="paying__div__btn">
			<button class="js_payingButton paying__btn" type="button">
				결제하기
			</button>
			<button class="js_popMoviePayingCancel paying__btn" type="button">
				결제취소
			</button>
		</div>
	</div>
</div>