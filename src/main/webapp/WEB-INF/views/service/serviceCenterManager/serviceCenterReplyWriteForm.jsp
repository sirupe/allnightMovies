<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="ReplyQuestionBoardWriteForm js_ReplyQuestionBoardWriteContainer font">
		<div class="ReplyQuestionBoard-content">
			<label class="ReplyQuestionBoard_content">문의 답글달기</label>
		</div>
		<div class="ReplyQuestionBoard">
			<div class="ReplyQuestionBoard-title">
				<label class="ReplyBoardtitle js_ReplyBoardTitle">제목</label>
				<input class="ReplyBoardwriteBoard js_ReplyBoardContent" type="text" value="fds">
				<input class="ReplyBoardcheck js_ReplyBoardCheck"  type="checkbox"><label>비밀글</label>
			</div>
			
			<div class="questionUpdateBoardView-detail">
				<label class="UpdateboardViewwriter">작성자</label>
				<input class="UpdateboardwriteBoardViewinput js_ReplyUpdateboardUserId" value = "" type="text" >
				<label class="UpdateboardViewwriteDate">작성일</label>
				<input class="UpdateboardwriteBoardViewinput js_ReplyUpdateboardWriteDate"  value="" type="text" >
			</div>
			
			
			<div class="ReplyQuestionBoard-sub">
				<div class="ReplyQuestionBoard_subject">
					<label class="ReplyBoardSub">내용</label>
					<textarea class="ReplyBoardTextarea js_ReplyBoardTextArea" rows="" cols="">dd</textarea>
				</div>
				<div class="ReplyQuestionBoard-pwd">
					<label class="ReplyBoardPwd">비밀번호</label>
					<input class="ReplyBoardwriteBoardPwd js_ReplyBoardWriteBoardPwd" type="password" readonly>
				</div>
			</div>
			<div class="ReplyQuestionbutton">
				<button class="ReplyQuestionButton_cancel js_ReplyQuestionButtonCancel">취소</button>
				<button class="ReplyQuestionButton_confirm js_ReplyQuestionButtonConfirm" type="button">확인</button>
			</div>
		
		</div>

</div>