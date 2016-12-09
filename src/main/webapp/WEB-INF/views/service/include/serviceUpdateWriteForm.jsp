<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="questionBoardUpdateForm js_questionBoardUpdateWriteContainer font">
	<label class="questionBoardWrite_title">문의하기</label>
	
	
	<div class="questionUpdateBoard-info">
		<div class="questionUpdateBoardView_sub">문의사항이나 불편사항은 이 곳에 남겨주세요. 최대한 빠른 시간 안에 답변 드리겠습니다.</div>
		<div class="questionUpdateBoardView_sub2">금요일 오후 6시 이후 접수된 문의는 그 다음주에 처리될 수 있습니다. FAQ를 이용하시면 궁금증을 더 빠르게 해결하실 수 있습니다.</div>
	</div>
		<div class="questionUpdateBoard-content">
			<label class="questionUpdateBoardView_content">문의 내용</label>
		</div>
		
		<div class="questionUpdateBoard">
		<c:choose>
			<c:when test="${questionBoardList.getIsPwd() == 1 }">
				<div class="questionUpdateBoardView-title">
					<label class="UpdateboardViewtitle">제목</label>
						<input class="UpdateboardViewwriteBoard js_UpdateboardContent" type="text" value="${questionBoardList.getTitle() }" >
						<input class="UPdateboardViewcheck js_UpdateboardCheck" type="checkbox" checked ><label>비밀글</label>
				</div>
				<div class="questionUpdateBoardView-detail">
					<label class="UpdateboardViewwriter">작성자</label>
					<input class="UpdateboardwriteBoardViewinput js_UpdateboardUserId" value = "${questionBoardList.getUser_Id() }" type="text" readonly>
					<label class="UpdateboardViewwriteDate">작성일</label>
					<input class="UpdateboardwriteBoardViewinput js_UpdateboardWriteDate"  value="${questionBoardList.getWrite_date() }" type="text" readonly>
				</div>
		
		
				<div class="questionUpdateoardView-sub">
					<div class="questionUpdateBoardView_subject">
						<label class="UpdateboardViewSub">내용</label>
						<textarea class="UpdateboardViewTextarea js_UpdateBoardTextArea">${questionBoardList.getContent() }</textarea>
					</div>
					<div class="questionUpdateBoard-pwd">
						<label class="UpdateboardPwd">비밀번호</label>
						<input class="UpdateboardwriteBoardPwd js_UpdateboardWriteBoardPwd" value="${questionBoardList.getWritePwd()}" type="password" style="ime-mode:disabled;" maxlength = 4 onkeyPress="UpdateFormPassWordCheck(this)" readonly>
					</div>
					
				</div>
			</c:when>
			<c:otherwise>
				<div class="questionUpdateBoardView-title">
					<label class="UpdateboardViewtitle">제목</label>
						<input class="UpdateboardViewwriteBoard js_UpdateboardContent" type="text" value="${questionBoardList.getTitle() }" >
						<input class="UPdateboardViewcheck js_UpdateboardCheck" type="checkbox" ><label>비밀글</label>
				</div>
				<div class="questionUpdateBoardView-detail">
					<label class="UpdateboardViewwriter">작성자</label>
					<input class="UpdateboardwriteBoardViewinput js_UpdateboardUserId" value = "${questionBoardList.getUser_Id() }" type="text" readonly>
					<label class="UpdateboardViewwriteDate">작성일</label>
					<input class="UpdateboardwriteBoardViewinput js_UpdateboardWriteDate"  value="${questionBoardList.getWrite_date() }" type="text" readonly>
				</div>
		
		
				<div class="questionUpdateoardView-sub">
					<div class="questionUpdateBoardView_subject">
						<label class="UpdateboardViewSub">내용</label>
						<textarea class="UpdateboardViewTextarea js_UpdateBoardTextArea" rows="" cols="" >${questionBoardList.getContent() }</textarea>
					</div>
				<div class="questionUpdateBoard-pwd">
					<label class="UpdateboardPwd">비밀번호</label>
					<input class="UpdateboardwriteBoardPwd js_UpdateboardWriteBoardPwd" type="password" style="ime-mode:disabled;" maxlength = 4 onkeyPress="UpdateFormPassWordCheck(this)" readonly>
				</div>
			</div>
			</c:otherwise>
		</c:choose>
					<div class="serviceCenter_viewForm">
						<button class="serviceCenter_updateWriteBoardInsert js_QuestionUpdateBtn" type="button">등록하기</button>
						<button class="serviceCenter_updateWriteBoardDelete js_QuestionDeleteBtn" type="button">삭제하기</button>
						<button class="serviceCenter_QuestionWrite js_QuestionUpdateForm" type="button">글목록</button>
					</div>
		</div>
</div>
<input type="hidden" class="js_boardViewNo" data-userClickNum="${questionBoardList.getNo()}">