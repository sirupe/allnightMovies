<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="stylesheet" href="/resources/css/myInfo/ticketInfoView.css">
<script async="async" type="text/javascript" src="/resources/js/reservation/paying.js"></script>
<div class="ticket-info">
	<c:forEach items="${ticketingInfo }" var="info">
		<div class="ticket-info__part">
			<img height="268px" width="200px" alt="movie poster" src="/resources/img/poster/lucky.jpg">
			<div class="ticket-info__part__content">
				<div class="ticket-info__part__movieTitle">${info.movieTitle}</div>
				<div>
					<span class="ticket-info__part__title">예매일시</span>
					<span class="ticket-info__part__text">${info.userTicketingDate }</span>
				</div>
				<div>
					<span class="ticket-info__part__title">상영일시</span>
					<span class="ticket-info__part__text">${info.movieScreeningDate}</span>
					<span class="ticket-info__part__text">${info.movieEndTime }</span>
				</div>
				<div>
					<span>
						<span class="ticket-info__part__title">좌석정보</span>
						<span class="ticket-info__part__text">총 ${info.userTicketCount }매</span>
						<span class="ticket-info__part__text">${info.theater }관</span>
						<span class="ticket-info__part__text">${info.theaterSeat}</span>
					</span>
				</div>
				<div>
					<span>
						<span class="ticket-info__part__title">금액정보</span>
						<span class="ticket-info__part__text">${info.userTotalPrice }원</span>
					</span>
				</div>
				<div>
					<span class="ticket-info__part__title">예매번호</span>
					<span class="ticket-info__part__text">${info.userTicketNumber }</span>
				</div>
				<button class="ticket-info__btn" type="button">
					예매취소
				</button>
			</div>
		</div>
		<hr class="ticket-info__hr"/>
	</c:forEach>
</div>