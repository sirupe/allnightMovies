<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<body>
	<form name="join" method="post" action="/check/mainService/joinService">
		<div class="body">
		    <div class="label">
		        <div>이름</div>
		        <div>아이디</div>
		        <div>비밀번호</div>
		        <div>재확인</div>
		        <div>성별</div>
		        <div>이메일</div>
		        <div>핸드폰</div>
		    </div>
		
		    <div class="input">
		    	<input type="hidden" id="hiddenID" value=""/>
		        <div class="input__name"><input type="text" name="userName" placeholder="이름 " value="지은정"/></div>
		        <div class="input__name"><input type="text" name="userID" id="idValue" placeholder="아이디 " value="test"/><input type="button" value="중복확인" onclick="checkID('join')"/></div>
				<div class="input__password"><input type="password" name="userPWD" placeholder="비밀번호 " value="P@ssw0rd"/></div>
				<div class="input__password"><input type="password" name="userRePWD" placeholder="비밀번호 재확인 " value="P@ssw0rd"/></div>
				<div class="input__gender">
					<input type="radio" name="userGender" value="male" checked="check"/>남 
					<input type="radio" name="userGender" value="female" />여
				</div>
				<div class="input__mail">
					<input type="text" name="userEmailID" placeholder="이메일 아이디 " value="sirupe"/> @ 
					<input type="text" name="userEmailAddr" placeholder="이메일 주소 " value="nate.com"/>
				</div>
				<div class="input__phone">
					<input type="date" name="userBirth"/>
				</div>
			</div>
		
			<div class="submit">
			    <input type="button" value="취소" />
			    <input type="button" value="회원가입" id="joinbtn" onclick="checkWrite()"/>
		    </div>
		</div>
	    
	</form>
</body>
