<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="questionBoardWriteForm js_questionBoardWriteContainer font">
	<label class="questionBoardWrite_title">문의하기</label>
	
	<div class="questionBoard-info">
		<div class="questionBoard_sub">문의사항이나 불편사항은 이 곳에 남겨주세요. 최대한 빠른 시간 안에 답변 드리겠습니다.</div>
		<div class="questionBoard_sub2">금요일 오후 6시 이후 접수된 문의는 그 다음주에 처리될 수 있습니다. FAQ를 이용하시면 궁금증을 더 빠르게 해결하실 수 있습니다.</div>
	</div>
		<div class="questionBoard-content">
			<label class="questionBoard_content">문의 등록</label>
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