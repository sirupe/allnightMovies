<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="stylesheet" href="/resources/css/reservation/ticketing.css">
<div class="calendar">
	<div class="calendar__year">
		${cal.year }년 ${cal.month }월
	</div>
	<table class="calendar__dayTable">
		<tr class="calendar__week__row">
			<td class="calendar__week__data">일</td>
			<td class="calendar__week__data">월</td>
			<td class="calendar__week__data">화</td>
			<td class="calendar__week__data">수</td>
			<td class="calendar__week__data">목</td>
			<td class="calendar__week__data">금</td>
			<td class="calendar__week__data">토</td>
		</tr>
		
		<c:forEach items="${cal.days }" var="days">
			<tr class="calendar__day__row">
				<c:forEach items="${days }" var="day">
					<c:choose>
						<c:when test="${day != 0 }">
							<td class="calendar__day__data">
								${day }
							</td>
						</c:when>
						<c:otherwise>
							<td class="calendar__day__data"></td>
						</c:otherwise>
					</c:choose>
				</c:forEach>
			</tr>
		</c:forEach>
	</table>
</div>