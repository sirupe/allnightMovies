<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<!-- <script type="text/javascript" src="http://code.jquery.com/jquery-1.8.3.min.js"></script> -->
	<div class="div__serviceCenter_form js_serviceCenter">
		<div class="div__serviceCenter_form_title">
				고객센터
		</div>
			<div class="div__serviceCenter__content">
				<div class="div__serviceCenter__content__header">
					<div class="div__serviceCenter__logo">
						<img src="/resources/img/allnight.png" class="serviceCenter_logo_image">
					</div>

					<div class="div__serviceCenter__intro">
						<div class="div__serviceCenter__intro_bundle">
						 	<img src="/resources/img/question2.png" class="serviceCenter_question_image">
						 	<div class="serviceCenter_intro_title">*고객센터*</div>
					 	</div>
					 		<div class="serviceCenter_intro_message">저희 AllNightMoive극장에 문의사항이 있으시다면 전화나 이메일로 문의 주세요 :) </div>
					</div>
				</div>
				
				<div class="div__serviceCenter__Container">
					<ul class="serviceCenter_Tab">
						<li><a href="#tab_content_frequenty" class="js_frequently">자주묻는질문</a></li>
						<li><a href="#tab_content_question" class="js_frequently js_QuestionBoard">문의게시판</a></li>
					</ul>
						
						<div class="div__serviceCenter_Container_Tab" >
							<div class="div__serviceCenter_Content js_service_content_tab" id="tab_content_frequenty">
								<jsp:include page="../service/include/serviceFrequenty.jsp" />
							</div>
							<div class="div__serviceCenter_Content js_servcie_content_tab" id="tab_content_question">
								<jsp:include page="../service/include/serviceQuestion.jsp" />
							</div>
						</div>
				</div>
				
				
				<div class="div__serviceCenter_info">
					<div class="div__serviceCenter_Tel">
						<label>TEl : 010-7222-1032</label>
					</div>
					
					<div class="div_serviceCenter_Email">
						<label>EMAIL : sirupe@nate.com</label>
					</div>
				</div>
			</div>
		</div>