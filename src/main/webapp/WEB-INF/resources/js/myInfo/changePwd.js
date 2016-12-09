function init() {
	setEvent();
}
init();

function setEvent() {
	var $container = $('.js_pwdChangeContainer');
	
	$container
		.on('click', '.js_pwdChangeMyinfoBtn', locationMyinfo)
		.on('click', '.js_pwdChangeChangePwdBtn', changePwdInfo)
		.on('keyup', '.js_pwdChangePresentPwdText', validationPresentPWD)
		.on('keyup', '.js_pwdChangeNewPwdText', validationPWD)
		.on('keyup', '.js_pwdChangeRePwdText', validationRePWD)
		.on('click', '.js_pwdChangeMainBton', locationMain)		//myInfoChangePwdResult
}

function locationMyinfo() {
	var url    = '/movie/mainService/viewMyInfo';
		dir    = 'myInfo';                                
		page   = 'myInfo';                                
		js     = 'myInfo/myInfo';                         
		css    = 'myInfo/myInfo';  
	
	submit(url, dir, page, js, css);
}

/*비밀번호 변경 완료*/
function changePwdInfo() {
	var $presentPWD 	   = $('.js_pwdChangePresentPwdText');
	 	$changeNewPWD 	   = $('.js_pwdChangeNewPwdText');
	 	$changeNewPWDcheck = $('.js_pwdChangeRePwdText');
	 	presentPWD		   = $presentPWD.val();
	 	changeNewPWD	   = $changeNewPWD.val();
	 	changeNewPWDcheck  = $changeNewPWDcheck.val();
	 	
	 	url	   = '/movie/async/asyncService/chagePwdSuccessCheck';
	 	params = {
					'myInfoPresentPwd' : presentPWD,
					'myInfoNewPwd' : changeNewPWD,
					'myInfoNewPwdCheck' : changeNewPWDcheck
				 };
	 	cbf	   = function(changeResult) {
	 				if(changeResult.data == 'false') {
						alert('비밀번호 변경에 실패하였습니다. 다시시도해주세요.');
					} else {
						location.href=changeResult.data;
					}
				 };
	
	if(validationPWD() && validationRePWD() && validationPresentPWD()) {
		$.post(url, params, cbf);
	} else if(presentPWD == '' || changeNewPWD == '' || changeNewPWDcheck == '') {
		alert('필수 입력사항을 정확히 입력해주세요');
	} else {
		alert('필수 입력사항을 정확히 입력해주세요');
	}
}

//현재비밀번호 정합성검사
function validationPresentPWD() {
	var $presentPWD 	 = $('.js_pwdChangePresentPwdText');
		$presentPWDLebel = $('.js_pwdChangePresentPwdLabel');
		presentPWD 		 = $presentPWD.val();
		resultMsg 		 = '';
		isResult 		 = true;
		
	if(presentPWD == '') {
		isResult = false;
		resultMsg = '필수 입력사항입니다.';
	}
	$presentPWDLebel.html(resultMsg);
	return isResult = true;
}

//비밀번호정합성검사
function validationPWD() {
	var $newPWD 	 = $('.js_pwdChangeNewPwdText');
		$newPWDLabel = $('.js_pwdChangeNewPwdLabel');
		newPWD 		 = $newPWD.val();
		resultMsg 	 = '<label style="color:green;">사용 가능합니다.</label>';
		isResult 	 = true;
	
	if(newPWD == '') {
		isResult = false;
		resultMsg = '필수 입력사항입니다.';
	}
	if(!pwdRegexCheck(newPWD)) {
		isResult = false;
		resultMsg = '<label style="color:red;">영문,숫자,특수문자 포함 8~15자 이내로 입력해주세요.</label>'
	}
	$newPWDLabel.html(resultMsg);
	return isResult;
}

//비밀번호 정합성 재검사
function validationRePWD() {
	var $newPWD 		  = $('.js_pwdChangeNewPwdText');
		$checkNewPWD	  = $('.js_pwdChangeRePwdText');
		$checkNewPWDLabel = $('.js_pwdChangeRePwdLabel');
		newPWD			  = $newPWD.val();	
		checkNewPWD		  = $checkNewPWD.val();
		resultMsg = '<label style="color:green;">비밀번호가 일치합니다.</label>'
		isResult = true;
	
	if(newPWD != checkNewPWD) {
		isResult = false;
		resultMsg = '<label style="color:red;">입력하신 비밀번호와 일치하지 않습니다.</label>'
	}
	if(checkNewPWD == '') {
		isResult = false;
		resultMsg = '필수 입력사항입니다.';
	}
	$checkNewPWDLabel.html(resultMsg);
	return isResult;
}
