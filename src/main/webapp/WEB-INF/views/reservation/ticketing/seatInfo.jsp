<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<div class="theater-seat__count">
	<span class="theater-seat__count__text">인원</span>
	<c:forEach begin="1" end="4" varStatus="status">
		<span class="js_ticketingPersonCnt  theater-seat__count__num  cursor">${status.count }</span>			
	</c:forEach>
	<span class="theater-seat__price  theater-seat__count__text">금액</span>
	<span ckass="theater-seat__price  theater-seat__count__text">${moviePrice } 원</span>
</div>
<table class="theater-seat__seat-info">
	<tr class="theater-seat__seat-info__tr  theater-seat__screen"></tr>
	<c:forEach items="${seatList }" var="seatInfo">
		
		<tr class="theater-seat__seat-info__tr">
			<th class="theater-seat__seat-info__th">${seatInfo.theaterSeatRow }</th>
			
			
			
			<fmt:parseNumber value="${seatInfo.theaterSeatColStart }" type="Number" var="start"/>
			<fmt:parseNumber value="${seatInfo.theaterSeatColEnd}" type="Number" var="end"/>
			
			<c:forEach begin="1" end="${end}" varStatus="status">
				<c:choose>
					<c:when test="${status.count < start }">
						<td></td>
					</c:when>
					<c:otherwise>
						<td class="theater-seat__seat-info__td  theater-set__border ">
							${status.index}
						</td>
					</c:otherwise>
				</c:choose>
				<c:if test="${seatInfo.theater == 1 }">
					<c:choose>
						<c:when test="${seatInfo.theaterWayInfo == status.index}">
							<td class="theater-seat__seat-info__td"></td>
						</c:when>
					</c:choose>
				</c:if>
			</c:forEach>
			
		</tr>
		<c:if test="${seatInfo.theaterWayInfo == seatInfo.theaterSeatRow }">
			<tr class="theater-seat__seat-info__tr"></tr>
		</c:if>
	</c:forEach>
</table>