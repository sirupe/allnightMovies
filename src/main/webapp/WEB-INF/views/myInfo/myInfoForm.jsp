<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="div-myinfo">
	<div class="div-myinfo__title">
		내정보
	</div>
	
	<div class="div-myinfo__content">
		<span class="span-myinfo__content">
			<label class="label-myinfo__content__id">아이디</label>
			<input id="myinfo-id" name ="myInfoID" class="text-myinfo__content" type="text" value="" readonly="readonly">
		</span>
		<span class="span-myinfo__content">
			<label class="label-myinfo__content__name">이름</label>
			<input id="myinfo-name" name ="myInfoName" class="text-myinfo__content"  type="text" value="" readonly="readonly">
		</span>
		<span class="span-myinfo__content">
			<label class="label-myinfo__content__gender">성별</label>
			<input id="myinfo-gender" name ="myInfoGender" class="text-myinfo__content"  type="text" value="" readonly="readonly">
		</span>
		<span class="span-myinfo__content">
			<label class="label-myinfo__content__email">이메일</label>
			<input id="myinfo-email" name ="myInfoEmail" class="text-myinfo__content"  type="text" value="" readonly="readonly">
		</span>
		<span class="span-myinfo__content">
			<label class="label-myinfo__content__birth">생일</label>
			<input id="myinfo-birth" name ="myInfoBirth" class="text-myinfo__content"  type="text" value="" readonly="readonly">
		</span>
	
		<span class="span-myinfo__buttons__email">
			<button class="button-myinfo-change-email" onclick="">이메일 변경</button>
			<button class="button-myinfo-change-pwd" onclick="">비밀번호 변경</button>
		</span>
	</div>
	
</div>