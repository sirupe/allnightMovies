<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="reCheckFormContainer">

			<label class="reCheckFormContainer_label">글등록시 입력한 비밀번호를 입력해 주세요. :)</label>
		<div class="QuestionBoardReCheckPWd_content">
			<label class = "QuestionBoardReCheckPWd_label">비밀번호 : </label>
			<input class = "QuestionBoardReCheckPWd_input js_questionBoardReChecked" type="password" style="ime-mode:disabled;" maxlength = 4 onkeyPress="RepassWordCheck(this)" >
		</div>
		
		<div class="QuestionBoardReCheckPWd_Btn">
			<button class="QuestionBoardReCheckPWd_checkBtn1 js_rePwdCheckQuestionForm" type="button">확인</button>
			<button class="QuestionBoardReCheckPWd_checkBtn2 js_QuestionList" type="button">목록보기</button>
		</div>

</div>


<input type="hidden" class="js_QuestionReCheckPwdboardViewNo" data-questionBoardPageNum="${questionBoardList.getNo()}">