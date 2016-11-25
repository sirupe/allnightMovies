<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="js_payPopupPage  pay-popup-page" >
	<div class="pay-popup-page__background">
		<div class="js_popupMovieBaseGround pay-popup-page__border">
			<div class="js_popMoviePoster pay-popup-page__poster padding20">
			</div>
			<div class="pay-popup-page__text padding20">
				<div class="js_popMovieTitle pay-popup-page__title"></div>
				<div class="pay-popup-page__result popup__date">
					<span class="pay-popup-page__result__label">예매일시</span>
					<span class="js_popMovieDate padding-right"></span>
					<span class="js_popMovieTime padding-right"></span>
				</div>
				<div class="pay-popup-page__result popup__theater">
					<span class="pay-popup-page__result__label">좌석정보</span>
					<span class="js_popMovieTheater padding-right"></span>
					<span class="js_popMovieCnt padding-right"></span>
					<span class="js_popMovieSeat padding-right"></span>
				</div>
				<div class="pay-popup-page__result popup__price">
					<span class="pay-popup-page__result__label">금액정보</span>
					<span class="js_popMoviePrice padding-right"></span>
				</div>
				<div class="pay-popup-page__result__message">
					선택하신 예매정보를 확인하신 후 결제를 진행해주세요.
				</div>
				<div class="pay-popup-page__btn">
					<button class="js_popMoviePaying" type="button">결제하기</button>
					<button class="js_popMovieCancel" type="button">취소</button>
				</div>
			</div>
		</div>
	</div>
</div>