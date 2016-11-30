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
				<c:forEach begin="1" end="10">
					<option>Movie Title</option>
				</c:forEach>
			</select>
		</div>
		<div class="member-reservation__find__theater">
			<span>관 </span>
			<select>
					<option>선택</option>
				<c:forEach begin="1" end="3" varStatus="status">
					<option>${status.count }</option>
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
			<span class="member-reservation__ticket-num member-reservation__td">예매번호</span>
			<span class="member-reservation__ticketing-date member-reservation__td">예매일시</span>
			<span class="member-reservation__user-id member-reservation__td">아이디</span>
			<span class="member-reservation__movie-title member-reservation__td">영화제목</span>
			<span class="member-reservation__theater member-reservation__td">상영관</span>
			<span class="member-reservation__ticket-count member-reservation__td">매수</span>
			<span class="member-reservation__seat member-reservation__td">좌석</span>
		</div>
		<c:forEach begin="1" end="10">
			<div class="member-reservation__contents__content member-reservation__tr ">
				<span class="member-reservation__ticket-num member-reservation__td">1130-22193893</span>
				<span class="member-reservation__ticketing-date member-reservation__td">2016-11-28 17:36</span>
				<span class="member-reservation__user-id member-reservation__td">test3</span>
				<span class="member-reservation__movie-title member-reservation__td">무현, 두 도시 이야기</span>
				<span class="member-reservation__theater member-reservation__td">1</span>
				<span class="member-reservation__ticket-count member-reservation__td">4</span>
				<span class="member-reservation__seat member-reservation__td">A1,A2,A3,A4</span>
			</div>
		</c:forEach>
	</div>
</div>