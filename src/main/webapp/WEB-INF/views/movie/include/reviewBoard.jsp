<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script async="async" type="text/javascript" src="/resources/js/movie/reviewBoard/reviewBoard.js"></script>

<div class="js_reviewBoardContainer">
	<div class="reviewBoard">
		<span class="reviewBoardFont">
			<!-- <label class="reviewBoard-score"> -->
			<span class="star-input">
			  <span class="input">
			    <input id="p1" type="radio" name="star-input" value="1"><label for="p1">1</label>
			    <input id="p2" type="radio" name="star-input" value="2"><label for="p2">2</label>
			    <input id="p3" type="radio" name="star-input" value="3"><label for="p3">3</label>
			    <input id="p4" type="radio" name="star-input" value="4"><label for="p4">4</label>
			    <input id="p5" type="radio" name="star-input" value="5"><label for="p5">5</label>
			    <input id="p6" type="radio" name="star-input" value="6"><label for="p6">6</label>
			    <input id="p7" type="radio" name="star-input" value="7"><label for="p7">7</label>
			    <input id="p8" type="radio" name="star-input" value="8"><label for="p8">8</label>
			    <input id="p9" type="radio" name="star-input" value="9"><label for="p9">9</label>
			    <input id="p10" type="radio" name="star-input"  value="10"><label for="p10">10</label>
			  </span>
			  <output for="star-input"><b>0</b>점</output>
			</span>
		</span>
		<c:choose>
			<c:when test="${userCheck == null}">
				<textarea class="reviewTextarea js_reviewText" placeholder="로그인 후 이용해주세요" readonly="readonly"></textarea>
			</c:when>
			<c:otherwise>
				<textarea class="reviewTextarea js_reviewText" placeholder="글자수는 120자로 제한됩니다."></textarea>
			</c:otherwise>
		</c:choose>
		<button class="reviewBoardBtn js_revewInsertBtn" type="button">등록</button>
	</div>
	<c:forEach begin="1" end="${reviewBoardCount}" items="${reviewBoardDTO}" var="reviewBoardDTO">
		<div class="reviewBoard">
			<span class="reviewBoardFont">
				<label>${reviewBoardDTO.reviewEvaluate}점</label>
				<label>${reviewBoardDTO.writeDate}</label>
			</span>
			<textarea class="reviewContentTextarea" readonly="readonly">${reviewBoardDTO.reviewContents}</textarea>
			<label class="">${reviewBoardDTO.reviewWriter}</label>
		</div>
	</c:forEach>
</div>