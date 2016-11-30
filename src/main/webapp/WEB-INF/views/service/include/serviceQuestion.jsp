<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<div class="questionBoard_container js_questionBoardContainer">
	<div class="questionBoard_sub">문의사항이나 불편사항은 이 곳에 남겨주세요. 최대한 빠른 시간 안에 답변 드리겠습니다.</div>
	<div class="questionBoard_top">
		<span class="no">
			번호
		</span>
		<span class="toptitle">
			제목
		</span>
		<span class="user">	
			글쓴이
		</span>
		<span class="date">
			작성일
		</span>
	</div>
	
	<div class="questionBoard_list">
	<c:forEach items="${questionBoardPage }" var="questionBoardPage">	
		<div class="questionBoard_middle">
			<span class="no">
				<label class="js_questionBoard_no">${questionBoardPage.no }</label>
			</span>
			<c:choose>
				<c:when test="${ questionBoardPage.isPwd == 1}">
					<span class="title">

						<c:if test="${questionBoardPage.replyStep == 1}">
							<span class="question__tab">&nbsp;&nbsp;&nbsp;</span>
						</c:if>
						<label class="js_questionBoard_title" data-questionBoardPageNum="${questionBoardPage.no }">
								<img src="/resources/img/lock.png" >${questionBoardPage.title}</label>
					</span>
				</c:when>
				<c:otherwise>
					<div class="title">
						<c:if test="${questionBoardPage.replyStep == 1}">
							<span class="question__tab">&nbsp;&nbsp;&nbsp;</span>
						</c:if>
						<label class="js_questionBoard_title" data-questionBoardPageNum="${questionBoardPage.no }">
							${questionBoardPage.title}</label>
					</div>
				</c:otherwise>
				
			</c:choose>
			<span class="user">	
				${questionBoardPage.getUser_Id() }
			</span>
			
			<span class="date">
				${questionBoardPage.getWrite_date() }
			</span>
		</div>
	</c:forEach>
	</div>
	
	<div class="questionBoard_bottom">
		<c:if test="${questionBoardGroup.isPreButton()}"><span data-QuestionprePage="${questionBoardGroup.viewStartPageNum - 1}" class="js_questionPreButton">◀</span></c:if>
			<c:forEach begin="${questionBoardGroup.viewStartPageNum }" end="${questionBoardGroup.viewEndPageNum }" var="page">
				<span>
					<c:choose>
						<c:when test="${checkPage == page }">
							<label class="questionBoard_bottom--active js_currentQuestionPage">${page }</label>
						</c:when>	
						
						<c:otherwise>
							<label class="js_QuestionPagingNumber">${page }</label>
						</c:otherwise>
					</c:choose>
				</span>
			</c:forEach>
		<c:if test="${questionBoardGroup.isNextButton() }"><span data-QuestionnextPage="${questionBoardGroup.viewEndPageNum +1 }" class="js_questionNextButton">▶</span></c:if>
	</div> 

		<button class="serviceCenter_QuestionWrite js_QuestionWriteForm" type="button">글쓰기</button>
</div>


