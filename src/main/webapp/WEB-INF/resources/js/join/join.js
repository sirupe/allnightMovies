function idCheck() {
	var re = true;
	var idTextField = $('#user-id');
	var userID = idTextField.val();
	var idLeng = userID.length;
	var resultMsg;
	if(idLeng < 4 || idLeng > 15) {
		$('#idResult').html('<label style="color:red;">4~15자 이내로 입력해주세요.<label>');
		re = false;
	} else {
		$.post(
			'/movie/mainService/idCheck',
			{'userIDCheck' : userID},
			function(result) {
				$('#idResult').html(result);
			}
		);
		var re = $('#id-bool').val() == 'true';
	}
	if(userID == "") {
		$('#idResult').html('필수 입력사항입니다.');
		re = false;
	}
	return re;
}

function pwdCheck() {
	var resultBool = true;
	var pwd = $('#user-pwd').val();
	var resultMsg = '<label style="color:green;">사용 가능합니다.</label>';
	
	if(!pwdRegexCheck(pwd)) {
		resultMsg = '<label style="color:red;">영문,숫자,특수문자 포함 8~15자 이내로 입력해주세요.</label>';
		resultBool = false;
	}
	if(pwd == "") {
		resultBool = false;
		resultMsg = '필수 입력사항입니다.';
	}
	$('#pwdResult').html(resultMsg);
	
	rePwdCheck();
	return resultBool;
}

function rePwdCheck() {
	var resultBool = true;
	var pwd = $('#user-pwd').val();
	var rePWD = $('#user-re-pwd').val();
	var resultMsg = '<label style="color:green;">비밀번호가 일치합니다.</label>';
	if(rePWD == "") {
		resultBool = false;
		resultMsg = '필수 입력사항입니다.';
	}
	if($('#user-pwd').val() != rePWD) {
		resultBool = false;
		resultMsg = '<label style="color: red;">입력하신 비밀번호와 일치하지 않습니다.</label>';
	}
	$('#rePwdResult').html(resultMsg);

	return resultBool;
}

function userNameCheck() {
	var regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|\*]+$/;
	var resultMsg = '<label style="color:green;">사용이 가능합니다.</label>';
	var resultBool = true;
	var name = $('#user-name').val();
	if(!regex.test(name)) {
		resultMsg = '<label style="color: red;">한글과 영문만 입력이 가능합니다.</label>';
		resultBool = false;
	}
	if(name == '') {
		resultMsg = '필수 입력사항입니다.';
		resultBool = false;
	}
	$('#user-name-result').html(resultMsg);
	return resultBool;
}

function userBirthdayCheck() {
	var resultMsg = '<label style="color:green;">사용이 가능합니다.</label>';
	var resultBool = true;
	var birth = $('#user-birth').val();
	if(birth == '') {
		resultMsg = '필수 입력사항입니다.'
		resultBool = false;
	}
	var birthDay = new Date($('#user-birthday').val());
	if(birthDay > new Date()) {
		resultMsg = '<label style="color: red;">입력하신 날짜가 정확하지 않습니다.</label>';
		resultBool = false;
	}
	$('#user-birthday-check').html(resultMsg);
	return resultBool;
}

function userEmailCheck() {	
	var resultMsg = '<label style="color:green;">사용이 가능합니다.</label>';
	var resultBool = true;
	var email = $('#user-email').val();
	if(!emailRegexCheck(email)) {
		resultMsg = '<label style="color: red;">이메일 형식에 맞지 않습니다.</label>';
		resultBool = false;
	}
	if(email == '') {
		resultMsg = '필수 입력사항입니다.';
		resultBool = false;
	}
	$('#user-email-check').html(resultMsg);
	$('#confirm-number').removeAttr('readonly');
	$('#confirm-number').css('background-color', "#FCFCFC");
	$('#confirm-result').html('<label style="color: red;">인증을 받아주세요.</label>');
	return resultBool;
}

function sendEmail() {
	var email = $('#user-email').val();
	
	if(userEmailCheck()) {
		$.post(
			'/movie/mainService/sendEmail',
			{'userEmail' : email},
			
			function(result) {
				$('#user-email-check').html(result);
			}
		);
	}
}

function confirmNumCheck() {
	var resultBool = true;
	var confirmNum = $('#confirm-number');
	var confirmResult = $('#confirm-result');
	
	if(confirmNum.attr('readonly') != 'readonly') {
		resultBool = false;
		if(confirmNum.val().length == 6) {
			$.post(
				'/movie/mainService/confirmCheck',
				{'confirmNum': confirmNum.val()},
				function(result) {
					$('#confirm-result').html(result);
					if($('#confirm-bool').val() == 'true') {
						confirmNum.attr({'readonly':'readonly'});
						confirmNum.css("background-color", "#dcdcdc");
						resultBool = true;
					}
				}
			)
		} else {
			confirmResult.html('<label style="color:red;">인증번호는 숫자 6자리 입니다.</label>');
		}
	}
	return resultBool;
}

function joinSuccessCheck() {
	console.log('joinSuccessCheck');
	
	if(joinSuccessCheckValidation()) {
		$.post(
			'/movie/mainService/joinSuccessCheck',
			{
				'userIDCheck' : $('#user-id').val(),
				'userPWD': $('#user-pwd').val(),
				'userRePWD': $('#user-re-pwd').val(),
				'userName': $('#user-name').val(),
				'userGender': $('#user-gender').val(),
				'userEmail': $('#user-email').val(),
				'userBirth': $('#user-birth').val()
			},
			function(result) {
				console.log('다녀옴');
			}
		);
	}
}

function joinSuccessCheckValidation() {
	if(!idCheck()) {
		return false;
	}
	if(!pwdCheck()) {
		return false;
	}
	if(!rePwdCheck()) {
		return false;
	}
	if(!userBirthdayCheck()) {
		return false;
	}
	if(!userNameCheck()) {
		return false;
	}
	if(!confirmNumCheck()) {
		return false;
	}
	return true;
}

function sendAjaxRequestFocusout(elements, location, data, func) {
	elements.focusout(function(e) {
		// 이벤트버블링을 막는다. (이벤트 버블링? - 자식 엘리먼트의 이벤트가 부모 엘리먼트에게 퍼지며 이벤트가 여러차례 실행되는 것.)
		e.stopPropagation();
		// 동일한 DOM에서 이벤트가 여러차례 실행되는 것을 막는다.
		e.stopImmediatePropagation();
		$.post(location, data, func);
	});
}

