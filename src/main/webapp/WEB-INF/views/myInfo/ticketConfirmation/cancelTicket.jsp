<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="cancel-ticket__inContainer">
<div class="js_cancelResult cancel-ticket__border">
	<div class="cancel-ticket__title">예매취소</div>
	<div class="cancel-ticket__contents">* 영화 시작 20분 이전에만 예매취소가 가능합니다.</div>
	<div class="cancel-ticket__contents">* 영화 시작 후에는 예매를 취소하실 수 없습니다.</div>
	<div class="cancel-ticket__contents">* 미사용 영화표는 환불되지 않습니다.</div>
	<div class="cancel-ticket__refund cancel-ticket__align-center">환불될 금액 : <span class="cancel-ticket__money">10,000</span>원</div>
	<div class="cancel-ticket__align-center">
		<input class="js_cancelTicketCheckRadio" type="radio"/>
		<span class="cancel-ticket__contents">예매 취소 주의사항을 확인하였습니다.</span>
	</div>
	<div class="cancel-ticket__align-center">
		<span class="cancel-ticket__contents__gray">(확인을 누르시면 예매취소가 진행됩니다.)</span>
	</div>
	<div class="cancel-ticket__align-center">
		<button class="js_cancelTicketConfirmBtn" type="button">
			확인
		</button>
		<button class="js_cancelTicketCancelBtn" type="button">
			취소
		</button>
	</div>
</div>
</div>