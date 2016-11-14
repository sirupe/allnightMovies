function idCheck() {
	var re = true;
	$(document).ready(function() {
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
			var re = $('#idCheckResult').val() == 'true';
		}
		if(userID == "") {
			$('#idResult').html('필수 입력사항입니다.');
			re = false;
		}
	});
	return re;
}

function pwdCheck() {
	var resultBool = true;
	$(document).ready(function() {
		var pwd = $('#user-pwd').val();
		var resultMsg = '<label style="color:green;">사용 가능합니다.</label>';
		if(pwd == "") {
			resultBool = false;
			resultMsg = '필수 입력사항입니다.';
		}
		if(!pwdRegexCheck(pwd)) {
			resultMsg = '<label style="color:red;">영문,숫자,특수문자 포함 8~15자 이내로 입력해주세요.</label>';
			resultBool = false;
		}
		$('#pwdResult').html(resultMsg);
		
//		$('#userPWD').focusout(function(e) {
//			// 이벤트버블링을 막는다. (이벤트 버블링? - 자식 엘리먼트의 이벤트가 부모 엘리먼트에게 퍼지며 이벤트가 여러차례 실행되는 것.)
//			e.stopPropagation();
//			// 동일한 DOM에서 이벤트가 여러차례 실행되는 것을 막는다.
//			e.stopImmediatePropagation();
//			$.post(
//				'/movie/mainService/pwdCheck',
//				{'userPWD' : pwd,'userRePWD' : rePWD},
//				function(result) {
//					$('#rePwdResult').html(result);
//				}
//			);
//			console.log('포커스에서 벗어났다.');
//		});
		rePwdCheck();
	});
	return resultBool;
}

function rePwdCheck() {
	var resultBool = true;
	var pwd = $('#userPWD').val();
	var rePWD = $('#userRePWD').val();
	$(document).ready(function() {
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
	});
//	$('#userRePWD').focusout(function(e) {
//		// 이벤트버블링을 막는다. (이벤트 버블링? - 자식 엘리먼트의 이벤트가 부모 엘리먼트에게 퍼지며 이벤트가 여러차례 실행되는 것.)
//		e.stopPropagation();
//		// 동일한 DOM에서 이벤트가 여러차례 실행되는 것을 막는다.
//		e.stopImmediatePropagation();
//		$.post(
//			'/movie/mainService/pwdCheck',
//			{'userPWD' : pwd,'userRePWD' : rePWD},
//			function(result) {
//				$('#rePwdResult').html(result);
//			}
//		);
//		console.log('포커스에서 벗어났다.');
//	});
	
	return resultBool;
}

function userNameCheck() {
	var regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|\*]+$/;
	var resultMsg = '<label style="color:green;">사용이 가능합니다.</label>';
	var resultBool = true;
	$(document).ready(function() {
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
	});
	return resultBool;
}

function userBirthdayCheck() {
	var resultMsg = '<label style="color:green;">사용이 가능합니다.</label>';
	var resultBool = true;
	$(document).ready(function() {
		var birth = $('#user-birthday').val();
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
	});
	return resultBool;
}

function userEmailCheck() {
	
	var regex = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
	var resultMsg = '<label style="color:green;">사용이 가능합니다.</label>';
	var resultBool = true;
	$(document).ready(function() {
		
		var email = $('#user-email').val();
		if(!regex.test(email)) {
			console.log('input check');
			resultMsg = '<label style="color: red;">이메일 형식에 맞지 않습니다.</label>';
			resultBool = false;
		}
		if(email == '') {
			resultMsg = '필수 입력사항입니다.';
			resultBool = false;
		}
		$('#user-email-check').html(resultMsg);
	});
	return resultBool;
}

function sendEmail() {
	$(document).ready(function() {
		var email = $('#user-email').val();
		if(userEmailCheck()) {
			$.post(
				'/movie/mainService/sendEmail',
				{'userEmail' : email},
				function(result) {
					alert('이메일이 발송되었습니다.');
				}
			);
		} else {
			alert('이메일을 정확하게 입력해주세요.');
		}
	});
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