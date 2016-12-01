<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="stylesheet" href="/resources/css/managerMenu/managerReserveMenu.css">
<script async="async" type="text/javascript" src="/resources/js/managerMenu/managerMemberMenu.js"></script>


<div class="member-reservation">
	<div class="member-reservation__find">
		<div class="member-reservation__find__date">
			<span>날짜 </span>
			<input type="date"/>
		</div>
		<div class="member-reservation__find__movie-title">
			<span>영화 </span>
			<select>
				<option>선택</option>
				<c:forEach items="${movieTitleList}" var="movieTitle">
					<option>${movieTitle }</option>
				</c:forEach>
			</select>
		</div>
		<div class="member-reservation__find__theater">
			<span>관 </span>
			<select>
				<option>선택</option>
				<c:forEach items="${theaterList}" var="theater">
					<option>${theater}</option>
				</c:forEach>
			</select>
		</div>
		<div class="member-reservation__find__time">
			<span>상영시간 </span>
			<select>
					<option>선택</option>
				<c:forEach begin="1" end="5">
					<option>12:00</option>
				</c:forEach>
			</select>
		</div>
		<div class="member-reservation__find__btn">
			<button>조회</button>
		</div>
	</div>

	<div class="member-reservation__contents ">
		<div class="member-reservation__contents__title member-reservation__tr ">
			<span class="member-reservation__ticket-num member-reservation__th">예매번호</span>
			<span class="member-reservation__ticketing-date member-reservation__th">예매일시</span>
			<span class="member-reservation__user-id member-reservation__th">아이디</span>
			<span class="member-reservation__movie-title member-reservation__th">영화제목</span>
			<span class="member-reservation__theater member-reservation__th">상영관</span>
			<span class="member-reservation__ticket-count member-reservation__th">매수</span>
			<span class="member-reservation__seat member-reservation__th">좌석</span>
			<span class="member-reservation__seat member-reservation__th">금액</span>
		</div>
		<c:forEach items="${reserveList}" var="info">
			<div class="member-reservation__contents__content member-reservation__tr ">
				<span class="member-reservation__ticket-num member-reservation__td">${info.userTicketNumber }</span>
				<span class="member-reservation__ticketing-date member-reservation__td">${info.userTicketingDate }</span>
				<span class="member-reservation__user-id member-reservation__td">${info.userID }</span>
				<span class="member-reservation__movie-title member-reservation__td">${info.movieTitle }</span>
				<span class="member-reservation__theater member-reservation__td">${info.theater }</span>
				<span class="member-reservation__ticket-count member-reservation__td">${info.userTicketCount }</span>
				<span class="member-reservation__seat member-reservation__td">${info.theaterSeat }</span>
				<span class="member-reservation__seat member-reservation__td">${info.ticketPrice }</span>
			</div>
		</c:forEach>
	</div>
</div>