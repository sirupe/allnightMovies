<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<div class="div__serviceCenter_form js_serviceCenter point">
		<label class="servieCenterTitle">고객센터</label>
		
		<div class="div__serviceCenter__content js_content">
		
			<div class="div__serviceCenter__intro">
		 		<label>극장에 문의사항이 있으시다면  전화나 문의 게시판을 이용해주세요.</label><br><br>
		 		<label>고객센터  : 1588 ~2030</label>
			</div>
			
			<div class="div__serviceCenter__Container js_container">
				<ul class="serviceCenter_Tab">
					<li><label class="js_frequentlyBoard service-tab-menu">자주하는질문</label></li>
					<li><label class="js_QuestionBoard service-tab-menu">문의게시판</label></li>
				</ul>
					
				<div class="div__serviceCenter_Container_Tab" >
					<div class="div__serviceCenter_Content js_serviceContentTab">
						<jsp:include page="../service/include/serviceFrequenty.jsp" />
					
					</div>
				</div>
			</div>
		</div>
	</div>