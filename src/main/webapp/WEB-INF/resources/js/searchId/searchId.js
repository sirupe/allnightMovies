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
	var $searchIdUserName    = $('#user-SearchName'); //아이디
		$searchIdUserBirth   = $('#user-find-id_birthday');
	    $searchIdUserGender  = $('#userFindgender');
	if($searchIdUserName.val() == '' || 
			$searchIdUserBirth.val() == '' || 
				$searchIdUserGender.val() == '') {
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

//이메일인증번호 보내기 누를때 - > 정합성검사/첫번째 버튼
function emailCheck_send() {
	//var resultMsg = '<label style="color:green;">사용가능합니다.</label>';
		$searchIdUserEmail = $('#userFindIdEmail');
		searchIdUserEmail  = $('#userFindIdEmail').val();
		
		url       = '/movie/async/asyncService/ConfirmNumberSend';
		params    = {'searchIdUserEmail' : searchIdUserEmail};
		cnf       = function(result) {
						if(result.success) {
							$('#insertConfirm').html(result.data);
						} else {
							$('#insertConfirm').html('<label style="color: red;">정확히 입력해주세요</label>');
					}
			};
			
			if(searchIdUserEmail != '' && emailRegexCheck(searchIdUserEmail)) {
				$.post(url,params,cnf);
			} else {
				$('#insertConfirm').html('<label style="color: red;">정확히 입력해주세요</label>');
			}
	//$('#insertConfirmNumber').html(resultMsg);
	$('#userFindIdConfirmNumber').removeAttr('readonly');
	$('#emailConfirmNumberCheck').removeAttr('disabled');
	//return isResult;
	//이메일 정합성검사
	//이메일 안적었다면 적어달라하기
	//일치하면 텍스트박스 막기
	//확인
}

//인증번호 확인 /인증번호 일치하는지 안하는지
function confirmNumber_Check() {
	var isResult                = true;
	var confirmNumbtn           = $('#emailConfirmNumberCheck');
	var insertConfirmNumResult  = $('#insertConfirmEmail');
	var $searchIdUserConfirmNum = $('#userFindIdConfirmNumber');
		searchIdUserConfirmNum  = $('#userFindIdConfirmNumber').val();
	 
		url    = "/movie/async/asyncService/confirmNumberCheck";
		params = {'searchIdUserConfirmNum' : searchIdUserConfirmNum};
		cbf = 
			function(result) {
				$('#insertConfirmEmail').html(result);
				if($('#isConfirmNum').val() == 'true') {
					searchIdUserConfirmNum.attr({'readonly' : 'readonly'});
					confirmNumbtn.attr({'readonly' : 'readonly'})
					isResult = true;
				} else {
					isResult = false;
					alert('인증번호가 일치하지 않습니다.');
					//insertConfirmNumResult.html('<label style="color:red;">인증번호가 일치하지 않습니다.</label>');
				}
		}
		if(searchIdUserConfirmNum != '') {
			isResult = true;
			$.post(url, params, cnf);
		} else {
			isResult = false;
			alert('모두 입력해주세요!');
		}
}

//이메일 검사
function email_resultCheck() {
	var confirmNumbtn           = $('#emailConfirmNumberCheck');
	var insertConfirmNumResult  = $('#insertConfirmEmail');
	
	method = 'POST';
	url = 'movie/mainService/searchIDEmailResult';
	dir = 'searchId';
	page = 'searchId/searchIdEmailResult';
	js = 'searchId/searchId';
	css = 'searchId/searchId';
	
	if(insertConfirmNumberResult != '') {
		submit(method, url, dir, page, js, css);
	} else {
		alert('모두 입력해주세요!');
	}
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

/*************시작***************/
function setSearchIDStart() {
	var $container = $('.js_userFindIdcontainer');
	
	$container.on('click','.js_confirmIdCheck',confirmIdCheck);
	$container.on('keyup','.js_userFindIdBirth',userFindIdBirth);
	$container.on('click','.js_emailCheck_send',emailCheck_send);
	$container.on('click','.js_confirmNumber_Check',confirmNumber_Check);
	$container.on('click','.js_email_resultCheck',email_resultCheck)
}

function setSearchID() {
	setSearchIDStart();
}

setSearchID();