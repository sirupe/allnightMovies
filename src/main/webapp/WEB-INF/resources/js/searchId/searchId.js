// 아이디 찾기 슬라이드
$(function() {
    $("[name=searchID]").click(function(){
    	$('#user-SearchName').val('');
    	$('#user-find-id_birthday').val('');
    	//$('#userFindgender').val('');
    	$('#userFindIdEmail').val('');
    	$('#userFindIdConfirmNumber').val('');
    	
        $('.searchIdHide').hide();
        $("#blk-"+$(this).val()).show('slow');
    });
 });


//text공백 검사
function searchIdcheckConfirm() {
	var isResult = true;
	var searchNameCheckText    = $('#user-SearchName'); //아이디
	var searchBirthCheckText = $('#user-find-id_birthday');
	var searchGenderText     = $('#userFindgender');
	var userIdCheck          = searchNameCheckText.val();
	var userBirthCheck       = searchBirthCheckText.val();
	var userGenderCheck      = searchGenderText.val();
	
	if(userIdCheck == '' || userBirthCheck == '' || userGenderCheck == '') {
		isResult = false;
		$('#insertConfirm').html('<label style="color:red;">모두 입력해주세요.<label>');
	} 
	return isResult;
}

//생일 검사
function userFindIdBirth() {
	var isBirthMsg = true;
	var userBirthDay = new Date($('#user-find-id_birthday').val());
	if(userBirthDay > new Date() || userBirthDay == '') {
		$('#insertConfirm').html('<label style="color: red;">입력하신 날짜가 정확하지 않습니다.</label>');
		isBirthMsg = false;
	}
	return isBirthMsg;
}

//이메일로 아이디 찾기
function user_id_find_checkemail() {
	submit(
			'POST',
			'/movie/mainService/FindIdcheckEmail',
			'searchId',
			'searchIdEmailResult',
			'searchId/searchId',
			'searchId/searchId'
			
	);
}

//이메일인증번호 보내기 누를때 - > 정합성검사
function emailCheck_send() {
	var resultMsg = '<label style="color:green;">사용가능합니다.</label>';
	var isResult = true;
	var email = $('#userFindIdEmail').val();
	if(!emailRegexCheck(email)) {
		resultMsg = '<label style="color: red;">이메일 형식이 맞지 않습니다.</label>';
		isResult = false;
	}
	if(email == '') {
		resultMsg = '필수 입력사항입니다';
		isResult = false;
	}
	if(isResult) {
		$.post(
			'/movie/async/asyncService/ConfirmNumberCheck',
			function(result) {
				$('#insertConfirmNumber').html(result.data);
			}
		);
	}
	$('#insertConfirmNumber').html(resultMsg);
	$('#userFindIdConfirmNumber').removeAttr('readonly');
	return isResult;
	//이메일 정합성검사
	//이메일 안적었다면 적어달라하기
	//일치하면 텍스트박스 막기
	//확인
}

//이메일 보내기눌렀을때 이메일로인증번호 보내기
function confirmNumber_Check() {
	var email = $('#userFindIdEmail');
	
	if(emailCheck_send()) {
		$.post(
				'/movie/AsyncService/userSendEmail',
				{'userSendEmail' : email},
				
				function(result) {
					
				}
		)
		
	}
}

//이메일 검사
function email_resultCheck() {
	//비었는지 전체 검사 -- 인증번호 / 이메일 
	// 다음 페이지 아이디 알려주기
	
	
}

//전체 다검사하기.
function allCheck() {
	if(!searchIdcheckConfirm()) {
		return false;
	} 
	if(!userFindIdBirth()) {
		return false;
	}
	return true;
}

function confirmIdCheck() {
	if(allCheck()) {
		$('#insertConfirm').html('');
		submit(
			'POST',
			'/movie/mainService/searchId',
			'searchId',
			'searchIdResult',
			'searchId/searchId',
			'searchId/searchId'
		);
	} else {
		$('#insertConfirm').html('<label style="color:red;">정확히 입력 바랍니다.<label>');
	}
}