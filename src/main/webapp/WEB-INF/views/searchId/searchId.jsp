<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
  <div class="user-find-id-user-info-container">
		<div class="user-find-id__name_bar"> 
					아이디 찾기
		</div>
		<div class="user-find-id_container">
			<div class="user-find-id__title">
				<label><input id="rdb1" type="radio" name="searchID" value="1" class="user-find-info"/>입력한 회원정보로 찾기</label>
				<!-- <input type="radio" class="user-find-info">회원정보로 찾기 -->
			</div>

		<div id="blk-1" class="searchIdHide" style="display:none">
			<div class="user-find-id-info__content">
				
				<div class="user-find-id-info__content__name">
					<div class="user-find-info-content__name__label">
							이름
					</div>
					<div class="user-find-info-content__name__input">
						<input type="text" id="user-SearchName" name="searchIdUserName" class="user-find-info-content__name__input__box">
					</div>
				</div>
				
				<div class="user-find-id-info__content__birth">
					<div class="user-find-id-info__content__birth__label">
						<label>생년월일</label>
					</div>

					<div class="user-find-id-info__content__birth__input">
						<input type="date" id="user-find-id_birthday" name="searchIdUserBirth" value="1994-05-08" onkeyup="userFindIdBirth()" />
					</div>
				</div>
				
				<div  class="user-find-id-info__content__gender">
					<div class="user-find-id-info__gender__label">
						<label>성별</label>
					</div>
					
					<select class="user-find-id-info__content__gender" id="userFindgender" name="searchIdUserGender" value="남자">
						<option>남자</option>
						<option>여자</option>
					</select>

				</div>
				
					<div class="userIDCheck">
						<div id="insertConfirm" class="join__resultText"></div>
					</div>
				<div class= "emailConfirmNumber_check">
					
					<Button class="user-find-id-info_emailConfirmNumber_check_button" type="button" onclick="confirmIdCheck()">확인</Button>
				</div>
				
			</div>
		</div>
	</div>

    		 <div class="user-find-id_email_container">
				<div class="user-find-id__title_email">
					<label><input type="radio" id="rdb2" name="searchID" value="2" class="user-find-info_email">회원가입시 입력한 이메일로 찾기</label>
						
					</div>
						<div id="blk-2" class="searchIdHide" style="display:none">
					<div class="user-find-id-info__content">
						<div class="user-find-id-info__content__email">
							<div class="user-find-info-content__email__label">
									이메일
							</div>
							<div class="user-find-info-content__email__input">
								<input type="text" id="userFindIdEmail" class="user-find-info-content__email__input__box">
							</div>

						</div>
						
						<div class="user-find-id-info__content__emailConfirmNumber">
							<div class="user-find-info-content__emailConfirmNumber__label">
									인증번호
							</div>
							<div class="user-find-info-content__emailConfirmNumber__input">
								<input type="text" id="userFindIdConfirmNumber" class="user-find-info-content__emailConfirmNumber__input__box">
							</div>
		
							<div>
								<Button class="user-find-id-info_emailConfirmNumber_button" onclick="">확인</Button>
							</div>
						
						</div>
						<div class="userIDCheck">
							<div id="insertConfirm" class="join__resultText">??</div>
						</div>
						<div class = "emailConfirmNumber_check">
							<Button class="user-find-id-info_emailConfirmNumber_check_button" type="button" onclick="user_id_find_checkemail()">확인</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
