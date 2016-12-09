<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<div class="theater-seat__count  display-flex">
	<div class="theater-seat__count__person">
		<span class="theater-seat__count__text">인원</span>
		<c:forEach begin="1" end="4" varStatus="status">
			<span class="js_ticketingPersonCnt  theater-seat__count__num  cursor">${status.count }</span>			
		</c:forEach>
	</div>
	
	<div class="theater-seat__count__price">
		<span class="theater-seat__price  theater-seat__count__text">금액</span>
		<span class="js_moviePrice  theater-seat__price__won" data-price="${moviePrice }">
			 <fmt:formatNumber value="${moviePrice }" pattern="#,###" />
		</span>
		<span class="theater-seat__price  theater-seat__count__text"> 원</span>
	</div>
</div>
<div class="theater-seat__container">
	<div class="theater-seat__screen">screen</div>
	<div class="js_theaterSeatTable theater-seat__seat-info">
		<c:forEach items="${seatInfoList}" var="seatInfo" varStatus="status">
			<%-- o${seatInfo.seatRow }o --%>
			<c:if test="${status.count % colCnt == 1 }">
				<div class="theater-seat__seat-info__th">${seatInfo.seatRow }</div>		
			</c:if>
			
	
			<c:choose>
				<c:when test="${seatInfo.status == 0 }">
					<div class="theater-seat__seat-info__td">${seatInfo.seatCol}</div>
				</c:when>
			
				<c:when test="${seatInfo.name == seatInfo.theaterSeat}">
					<div class="theater-seat__seat-info__td theater-seat__seat-info__td-impossible">
						<span>${seatInfo.seatCol}</span>
					</div>
				</c:when>
			
				<c:otherwise>
					<div class="js_seatNum theater-seat__seat-info__td theater-seat__seat-info__td__color" data-seatNum="${seatInfo.name }">
						<span>${seatInfo.seatCol}</span>
					</div>		
				</c:otherwise>
			</c:choose>
			
	
			<c:if test="${status.count % colCnt == 0 }">
				<br>
			</c:if>
		
		</c:forEach>
	</div>
</div>

<button type="button" class="js_letTicketingBtn  theater-seat__ticketing-btn  font-family">
	예매하기
</button>


<div class="js_payPopupPage  pay-popup-page" >
	<div class="pay-popup-page__background">
		<div class="pay-popup-page__border">
			<div class="pay-popup-page__title"></div>
			<div class="pay-popup-page__date-time"></div>
			<div class="pay-popup-page__theater-seat"></div>
			<div class="pay-popup-page__message">
				
			</div>
			<div class="pay-popup-page__btn"></div>
		</div>
	</div>

</div>