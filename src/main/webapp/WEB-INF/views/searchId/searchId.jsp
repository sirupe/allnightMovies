<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
  <div class="searchID-form js_userFindIdcontainer">
		<div class="searchID-form_name_bar"> 
					아이디 찾기
		</div>
		<div class="searchID-form_container">
			<div class="searchID-form_title">
				<label><input id="rdb1" type="radio" name="searchID" value="1" class="user-find-info"/>입력한 회원정보로 찾기</label>
				<!-- <input type="radio" class="user-find-info">회원정보로 찾기 -->
			</div>

		<div id="blk-1" class="searchIdHide" style="display:none">
			<div class="searchID-form_content">
				
				<div class="searchID-form_content__name">
					<div class="searchID-form_content__name_label">
							<label class="js_searchID_name">이름</label>
					</div>
					<div class="searchID-form_content__name_input">
						<input type="text" name="searchIdUserName" class="searchID-form_content__name_input js_userSearchName">
					</div>
				</div>
				
				<div class="searchID-form_content__birth">
					<div class="searchID-form_content__birth_label">
						<label class="js_searchID_birth">생년월일</label>
					</div>

					<div class="searchID-form_content__birth__input js_userFindIdBirth">
						<input type="date" name="searchIdUserBirth" class="js_userSearchIDBirth" value="1994-05-08" />
					</div>
				</div>
				
				<div  class="searchID-form_content__gender">
					<div class="searchID-form_content__gender_label">
						<label>성별</label>
					</div>
					<select class="searchID-form_content__gender_option js_userFindgender"  name="searchIdUserGender" value="남자">
						<option>남자</option>
						<option>여자</option>
					</select>
				</div>
					<div class="userIDCheck">
						<div class="userIDCheck_All__resultText js_insertConfirm">필수입력사항입니다.</div>
					</div>
				<div class= "userSearchId_check ">
					<Button class="button__userSearchId_check js_confirmIdCheck" type="button">확인</Button>
				</div>
			</div>
		</div>
	</div>

    		 <div class="searchID-form_content__email">
				<div class="searchID-form_content__title_email">
					<label><input type="radio" id="rdb2" name="searchID" value="2" class="user-find-info_email">회원가입시 입력한 이메일로 찾기</label>
					</div>
					
					
				<div id="blk-2" class="searchIdHide" style="display:none">
				
					<div class="searchID-form_content_email">
						<div class="searchID-form_content__title__email">
							<div class="searchID-form_content__email_label">
									이메일
							</div>
							<div class="searchID-form_content__email_input">
								<input type="text" class="searchID-form_content__email_inputbox js_userFindIdEmail" name="searchIdUserEmail" value="tnwls147258@naver.com">
								<Button class="button__emailConfirmNumber_send js_emailCheck_send" type="button">인증번호보내기</Button>
								<div class="userConfirmNumberCheck_Email_resultText js_insertConfirmNumber">필수입력사항입니다.</div>
							</div>


						</div>
						
						<div class="searchID-form_content__emailConfirmNumber">
							<div class="searchID-form_content__emailConfirmNumber__label">
									인증번호
							</div>
							<div class="searchID-form_content__emailConfirmNumber__input">
								<input type="text"  class="searchID-form_content__emailConfirmNumber__input_box js_userFindIdConfirmNumber" readonly>
								<Button class="button__emailConfirmNumber_check js_confirmNumber_Check js_emailConfirmNumberCheck" type="button" readonly>인증확인</Button>
								
							</div>
						
						</div>
						<div class="userIDCheck">
							<div  class="userIDCheck_All__Email_resultText js_insertConfirmEmail">필수입력사항입니다.</div>
						</div>
						<div class = "emailConfirmNumber_check ">
							<Button class="button__emailConfirmNumber_check js_email_resultCheck" type="button">확인</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
