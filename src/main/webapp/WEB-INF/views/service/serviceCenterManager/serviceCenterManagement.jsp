<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="managementQuestionBoardWriteForm js_managementQuestionBoardWriteContainer font">
		<div class="managementQuestion-content">
			<label class="managementQuestion_content">문의 등록하기</label>
		</div>
		<div class="managementQuestionBoard">
			<div class="managementQuestionBoard-title">
				<label class="managementQuestiontitle js_managementQuestionButton_confirmTitle">제목</label>
				<input class="managementQuestionwriteBoard js_managementQuestionContent" type="text" value="인터넷 예매분을 전화로 취소할 수 있나요?">
			</div>
			
			<div class="managementQuestion-sub">
				<div class="managementQuestion_subject">
					<label class="managementQuestionSub">내용</label>
					<textarea class="managementQuestionTextarea js_managementQuestionButton_confirmTextArea" rows="" cols="">인터넷 예매취소는 인터넷, 상담원을 통한 전화 취소 둘다 가능합니다</textarea>
				</div>
			</div>
			<div class="managementQuestionbutton">
				<button class="managementQuestionButton_cancel js_managementQuestionButtonCancel">취소</button>
				<button class="managementQuestionButton_confirm js_managementQuestionButtonConfirm" type="button">확인</button>
			</div>
		
		</div>

</div>