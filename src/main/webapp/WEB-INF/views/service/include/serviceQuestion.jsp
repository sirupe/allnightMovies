<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="questionBoard_container">
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
	
	<c:forEach items="${questionBoardPage }" var="questionBoard">	
		<div class="questionBoard_middle">
			<span class="questionBoard_top_no">
				${questionBoard.getNo() }
			</span>
			<span class="questionBoard_top_title">
				<label class="js_questionBoard_title">
						${questionBoard.getTitle()}</label>
			</span>
			<span class="questionBoard_top_user">	
				${questionBoard.getUser_Id() }
			</span>
			<span class="questionBoard_top_date">
				${questionBoard.getWrite_date() }
			</span>
			<span class="questionBoard_top_ref">
				
			</span>
		</div>
	</c:forEach>


		<div class="questionBoard_bottom">
			<c:forEach begin="${questionBoardGroup.viewStartPageNum }" end="${questionBoardGroup.viewStartPageNum }" var="questionBoardGroup">
				<span>
					${ questionBoardGroup}
				</span>
			</c:forEach>
				<div>
					글쓰기 버튼
				</div>
		</div>
	</div>




