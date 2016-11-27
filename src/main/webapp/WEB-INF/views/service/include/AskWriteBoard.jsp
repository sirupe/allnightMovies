<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="questionBoardWriteForm js_questionBoardWriteContainer font">
		<div class="questionBoard-content">
			<label class="questionBoard_content">문의 글쓰기</label>
		</div>
		<div class="questionBoard">
			<div class="questionBoard-title">
				<label class="boardtitle js_boardTitle">제목</label>
				<input class="boardwriteBoard js_boardContent" type="text" value="fds">
				<input class="boardcheck js_boardCheck"  type="checkbox"><label>비밀글</label>
			</div>
			
			<div class="questionBoard-sub">
				<div class="questionBoard_subject">
					<label class="boardSub">내용</label>
					<textarea class="boardTextarea js_boardTextArea" rows="" cols="">dd</textarea>
				</div>
				<div class="questionBoard-pwd">
					<label class="boardPwd">비밀번호</label>
					<input class="boardwriteBoardPwd js_boardWriteBoardPwd" type="password" value="11">
				</div>
			</div>
			<div class="questionbutton">
				<button class="questionButton_cancel js_questionButtonCancel">취소</button>
				<button class="questionButton_confirm js_questionButtonConfirm">확인</button>
			</div>
		
		</div>

</div>