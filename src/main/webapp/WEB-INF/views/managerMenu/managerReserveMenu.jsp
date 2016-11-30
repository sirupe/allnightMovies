<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="member-reservation">
	<div class="member-reservation__find">
		<div class="member-reservation__find__date">
			<span>날짜 </span>
			<input type="date"/>
		</div>
		<div class="member-reservation__find__movie-title">
			<span>영화 </span>
			<select>
				<c:forEach begin="1" end="10">
					<option>Movie Title</option>
				</c:forEach>
			</select>
		</div>
		<div class="member-reservation__find__theater">
			<span>관 </span>
			<select>
				<c:forEach begin="1" end="3" varStatus="status">
					<option>${status.count }</option>
				</c:forEach>
			</select>
		</div>
		<div class="member-reservation__find__time">
			<span>상영시간 </span>
			<select>
				<c:forEach begin="1" end="5">
					<option>12:00</option>
				</c:forEach>
			</select>
		</div>
		<div class="member-reservation__find__btn">
			<button>조회</button>
		</div>
	</div>

	<div>
		<div>
			<span>예매번호</span>
			<span>예매일시</span>
			<span>아이디</span>
			<span>영화제목</span>
			<span>상영관</span>
			<span>매수</span>
			<span>좌석</span>
		</div>
		<div>
			<span>1130-22193893</span>
			<span>2016-11-28 17:36</span>
			<span>test3</span>
			<span>무현, 두 도시 이야기</span>
			<span>1</span>
			<span>4</span>
			<span>A1,A2,A3,A4</span>
		</div>
	</div>
</div>