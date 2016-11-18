// 아이디 찾기 슬라이드


//회원정보로 아이디찾기 확인 버튼
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
		$('#insertConfirm').html('<label style="color:red;">모두 입력해주세요!<label>');
	} else {
		$('#insertConfirm').html('');
		submit(
			'POST',
			'/movie/mainService/searchId',
			'searchId',
			'searchIdResult',
			'searchId/searchId',
			'searchId/searchId'
		);
	}
}

//생일 검사
function userFindIdBirth() {
	var isBirthMsg = true;
	var userBirthDay = new Date($('#user-find-id_birthday').val());
	if(userBirthDay > new Date() || userBirthDay == '') {
		$('#insertConfirm').html('<label style="color: red;">입력하신 날짜가 정확하지 않습니다.</label>');
		isBirthMsg = false;
	}
	return isBirthDay;
}

//이메일 인증번호 체크


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


//전체 다검사하기.

function allCheck() {
	
}

