<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="stylesheet" href="/resources/css/reservation/ticketingResult.css">
<script async="async" type="text/javascript" src="/resources/js/reservation/ticketingResult.js"></script>
<div class="js_ticketingResultContainer ticketing-result">
	<div class="ticketing-result__message">${resultMessage }</div>
	<div class="ticketing-result__btns">
		<c:choose>
			<c:when test="${resultBool }">
				<button class="js_ticketingInfo ticketing-result__success-btn" type="button">
					예매내역 확인
				</button>
				<button class="js_locationMain ticketing-result__success-btn" type="button">
					메인으로
				</button>
			</c:when>
			<c:otherwise>
				<button class="js_popMoviePayingCancel ticketing-result__fail-btn" type="button">
					확인
				</button>
			</c:otherwise>
		</c:choose>
	</div>
</div>