<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="stylesheet" href="/resources/css/myInfo/ticketInfoView.css">
<script async="async" type="text/javascript" src="/resources/js/reservation/paying.js"></script>
<div class="ticket-info">
	<c:forEach begin="1" end="3">
		<div class="ticket-info__part">
			<img height="268px" width="200px" alt="movie poster" src="/resources/img/poster/lucky.jpg">
			<div class="ticket-info__part__content">
				<div class="ticket-info__part__movieTitle">[럭키]</div>
				<div>
					<span class="ticket-info__part__title">예매일시</span>
					<span class="ticket-info__part__text">2016.11.28</span>
					<span class="ticket-info__part__text">10:00</span>
				</div>
				<div>
					<span class="ticket-info__part__title">상영일시</span>
					<span class="ticket-info__part__text">2016.12.01</span>
					<span class="ticket-info__part__text">10:00 ~ 12:00</span>
				</div>
				<div>
					<span class="ticket-info__part__title">좌석정보</span>
					<span class="ticket-info__part__text">총 1매</span>
					<span class="ticket-info__part__text">1관</span>
					<span class="ticket-info__part__text">B2</span>
				</div>
				<div>
					<span class="ticket-info__part__title">금액정보</span>
					<span class="ticket-info__part__text">10,000원</span>
				</div>
				<div>
					<span class="ticket-info__part__title">예매번호</span>
					<span class="ticket-info__part__text">1234-12345</span>
				</div>
				<button class="ticket-info__btn" type="button">
					예매취소
				</button>
			</div>
		</div>
		<hr class="ticket-info__hr"/>
	</c:forEach>
</div>