//내정보보기페이지
function viewMyInfo() {
	submit(
		'POST',
		'/movie/mainService/viewMyInfo',
		'myInfo',
		'myInfo',
		'myInfo/myInfo',
		'myInfo/myInfo'
	);
}

//메인페이지
function locationMain() {
	submit(
		'POST',
		'/movie/mainService/getTemplate', 
		'include',				                       
		'mainPage',		            
		'template',   	                   
		'home'	 	                   
	);	
}

//이메일 정보 창
function changeEmailInfoForm() {
	submit(
		'POST',
		'/movie/mainService/getTemplate',
		'myInfo',
		'myInfoChangeEmail',
		'myInfo/myInfo',
		'myInfo/myInfo'
	);	
}

//이메일 정보 변경 
	

//이메일 정합성검사
function validationEmail() {
	
}

//비밀번호 변경 창
function changePwdInfoForm() {
	submit(
		'POST',
		'/movie/mainService/getTemplate',
		'myInfo',
		'myInfoChangePwd',
		'myInfo/myInfo',
		'myInfo/myInfo'
	);	
}

//TODO 수정중
function changePwdInfo() {
	var presentPWD = $('#present-pwd').val();
	var changeNewPWD = $('#myinfo-newpwd').val();
	var changeNewPWDcheck=$('#myinfo-check-newpwd').val();
	
	if(validationPWD() && validationRePWD() && validationPresentPWD()) {
		$.post(
				
		)
	}
}

//현재비밀번호 정합성검사
function validationPresentPWD() {
	var isResult = true;
	var presentPWD = $('#present-pwd').val();
	var presentPWDText = $('#validation-present-pwd');
	var resultMsg = '';
		
	if(presentPWD == '') {
		isResult = false;
		resultMsg = '필수 입력사항입니다.';
	}
	
	presentPWDText.html(resultMsg);
	return isResult = true;
}

//비밀번호정합성검사
function validationPWD() {
	var isResult = true;
	var newPWD = $('#myinfo-newpwd').val();
	var newPWDText = $('#validation-newpwd');
	var resultMsg = '<label style="color:green;">사용 가능합니다.</label>';
	
	if(newPWD == '') {
		isResult = false;
		resultMsg = '필수 입력사항입니다.';
	}
	if(!pwdRegexCheck(newPWD)) {
		isResult = false;
		resultMsg = '<label style="color:red;">영문,숫자,특수문자 포함 8~15자 이내로 입력해주세요.</label>'
	}
	newPWDText.html(resultMsg);
	return isResult;
}

//비밀번호 정합성 재검사
function validationRePWD() {
	var isResult = true;
	var newPWD = $('#myinfo-newpwd').val();
	var checkNewPWD = $('#myinfo-check-newpwd').val();
	var checkNewPWDText = $('#validation-check-newpwd');
	var resultMsg = '<label style="color:green;">비밀번호가 일치합니다.</label>'
	
	if(newPWD != checkNewPWD) {
		isResult = false;
		resultMsg = '<label style="color:red;">입력하신 비밀번호와 일치하지 않습니다.</label>'
	}
	if(checkNewPWD == '') {
		isResult = false;
		resultMsg = '필수 입력사항입니다.';
	}
	checkNewPWDText.html(resultMsg);
	return isResult;
}
