<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<div class="questionBoard_container js_questionBoardContainer">
	<div class="questionBoard_top">
		<span class="questionBoard_top_no">
			번호
		</span>
		<span class="questionBoard_top_title">
			제목
		</span>
		<span class="questionBoard_top_user">	
			글쓴이
		</span>
		<span class="questionBoard_top_date">
			작성일
		</span>
		<span class="questionBoard_top_ref">
			
		</span>
	
	</div>
	
	<c:forEach items="${questionBoardPage }" var="questionBoardPage">	
		<div class="questionBoard_middle">
			<span class="questionBoard_top_no">
				<label class="js_questionBoard_no">${questionBoardPage.getNo() }</label>
			</span>
			<span class="questionBoard_top_title">
				<label class="js_questionBoard_title" data-questionBoardPageNum="${questionBoardPage.getNo() }">
						${questionBoardPage.getTitle()}</label>
			</span>
			<span class="questionBoard_top_user">	
				${questionBoardPage.getUser_Id() }
			</span>
			<span class="questionBoard_top_date">
				${questionBoardPage.getWrite_date() }
			</span>
			<span class="questionBoard_top_ref">
				
			</span>
		</div>
	</c:forEach>

	<div class="questionBoard_bottom">
		<c:if test="${questionBoardGroup.isPreButton()}"><span data-QuestionprePage="${questionBoardGroup.viewStartPageNum - 1}" class="js_questionPreButton">◀</span></c:if>
			<c:forEach begin="${questionBoardGroup.viewStartPageNum }" end="${questionBoardGroup.viewEndPageNum }" var="page">
				<span>
					<c:choose>
						<c:when test="${checkPage == questionBoardGroup.userClickPageNum }">
							[<label class="js_currentQuestionPage">${page }</label>]
						</c:when>	
						
						<c:otherwise>
							[<label class="js_QuestionPagingNumber">${page }</label>]
						</c:otherwise>
					</c:choose>
				</span>
			</c:forEach>
		<c:if test="${questionBoardGroup.isNextButton() }"><span data-QuestionnextPage="${questionBoardGroup.viewEndPageNum +1 }" class="js_questionNextButton">▶</span></c:if>
	</div> 	
		
				<div class="serviceCenter_WriteFormButton">
					<button class="serviceCenter_QuestionWrite js_QuestionWriteForm" type="button">글쓰기</button>
				</div>

	
	
</div>


