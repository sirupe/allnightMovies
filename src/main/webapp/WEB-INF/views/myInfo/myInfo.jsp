<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div-myinfo js_myInfoContainer">
	<div class="div-myinfo__title">
	   <span class="js_myInfoTitleClick tab-myinfo__title"><a>내정보</a></span>
	   <span class="js_reserveInfoTitleClick tab-reservationInfo__title"><a>예매정보</a></span>
	</div>
	<div>  
		<div class="js_myInfoInnerContainer div-myinfo__content">
			<span>
			  <label class="label-myinfo__content__id">아이디</label>
			  <input id="myinfo-id" name ="myInfoID" value="${myInfoList.getUserID() }" class="text-myinfo__content" type="text" readonly="readonly">
			</span>
			<span class="span-myinfo__content">
			   <label class="label-myinfo__content__name">이름</label>
			   <input id="myinfo-name" value="${myInfoList.getUserName() }" class="text-myinfo__content"  type="text" readonly="readonly">
			</span>
			<span>
			   <label class="label-myinfo__content__gender">성별</label>
			   <input id="myinfo-gender" value="${myInfoList.getUserGender() }" class="text-myinfo__content"  type="text" readonly="readonly">
			</span>
			<span>
			   <label class="label-myinfo__content__email">이메일</label>
			   <input id="myinfo-email" value="${myInfoList.getUserEmail() }" class="text-myinfo__content"  type="text" readonly="readonly">
			</span>
			<span>
			   <label class="label-myinfo__content__birth">생일</label>
			   <input id="myinfo-birth" value="${myInfoList.getUserBirth() }" class="text-myinfo__content"  type="text" readonly="readonly">
			</span>
			
			<span>
			   <button class="button-myinfo-change-email js_myInfo_changeEmailBtn">이메일 변경</button>
			   <button class="button-myinfo-change-pwd js_myInfo_changePwdBtn">비밀번호 변경</button>
			   <button class="button-myinfo-change-withdraw js_myInfo_withdrawBtn">회원탈퇴</button>
			</span>
		</div>
	</div>
</div>