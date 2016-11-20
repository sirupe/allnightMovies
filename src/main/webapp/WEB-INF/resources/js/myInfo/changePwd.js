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

/*비밀번호 변경 완료*/
function changePwdInfo() {
	var presentPWD = $('#present-pwd').val();
	var changeNewPWD = $('#myinfo-newpwd').val();
	var changeNewPWDcheck=$('#myinfo-check-newpwd').val();
	
	if(validationPWD() && validationRePWD() && validationPresentPWD()) {
		$.post(
			'/movie/async/asyncService/chagePwdSuccessCheck',
			{
				'myInfoPresentPwd' : presentPWD,
				'myInfoNewPwd' : changeNewPWD,
				'myInfoNewPwdCheck' : changeNewPWDcheck
			},
			 function(changeResult) {
				if(changeResult.data == 'false') {
					alert('비밀번호 변경에 실패하였습니다. 다시시도해주세요.');
				} else {
					location.href=changeResult.data;
				}
			 }
		)
	} else if(presentPWD == '' || changeNewPWD == '' || changeNewPWDcheck == '') {
		alert('필수 입력사항을 정확히 입력해주세요');
	} else {
		alert('필수 입력사항을 정확히 입력해주세요');
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
