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


/*************시작***************/
function setSearchIDStart() {
	var $container = $('.js_userFindIdcontainer');
	
	$container.on('click','.js_confirmIdCheck',confirmIdCheck);
	$container.on('keyup','.js_userFindIdBirth',userFindIdBirth);
	$container.on('click','.js_emailCheck_send',emailCheck_send);
	$container.on('click','.js_confirmNumber_Check',confirmNumber_Check);
	$container.on('click','.js_email_resultCheck',email_resultCheck);
	$container.on('click','.js_locationMain', locationMain); // 홈으로
	$container.on('click','.js_locationSearchPwd', locationSearchPwd); // 비밀번호찾기
	
	$container.on('click','.js_locationSearchPwdEmail', locationMain);
	$container.on('click','.js_locationSearchPwdEmail', locationSearchPwd);
	$container.on('click','.js_locationSearchPwdEmail',locationSearchID)
}

function setSearchID() {
	setSearchIDStart();
}

setSearchID();

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
		$('.js_insertConfirm').html('');
		submit(
			'/movie/mainService/searchId',
			'searchId',
			'searchIdResult',
			'searchId/searchId',
			'searchId/searchId'
		);
	} else {
		$('js_insertConfirm').html('<label style="color:red;">정확히 입력 바랍니다.<label>');
	}
}

//아이디찾기(회원정보)
function searchIdcheckConfirm() {
	var isResult = true;
		resultMsg = '<label style="color:green;">회원정보찾는중 ...</label>';
		$searchIdUserName   = $('.js_userSearchName');
		$searchIdUserBirth  = $('.js_userSearchIDBirth');
		$searchIdUserGender = $('.js_userFindgender');
		$resultText         = $('.js_insertConfirm');
		
		searchIDUserName    = $searchIdUserName.val();
		searchIdUserBirth   = $searchIdUserBirth.val();
		searchIdUserGender  = $searchIdUserGender.val();
		
	if(searchIDUserName == '' || 
			searchIdUserBirth == '' || 
			searchIdUserGender == '') {
		isResult = false;
		resultMsg = '<label style="color:red;">모두 입력해주세요.<label>';
	} 
	$resultText.html(resultMsg);
	return isResult;
}


//생일 검사
function userFindIdBirth() {
	var isBirthMsg   = true;
		$searchIdUserBirth  = $('.js_userSearchIDBirth');
		birth = $searchIdUserBirth.val();
	    userBirthDay = new Date(birth);
	    resultMsg    = '<label style="color: green;">사용가능합니다.</label>';
	    $resultText  = $('.js_insertConfirm');
	    
	if(userBirthDay > new Date() || userBirthDay == '') {
		isBirthMsg = false;
		resultMsg = '<label style="color: red;">날짜 형식이 맞지 않습니다.</label>';
	}
	$resultText.html(resultMsg);
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
	var resultMsg = '<label style="color:green;">사용가능합니다.</label>';
		$searchIdUserEmail       = $('.js_userFindIdEmail'); //사용자이메일
		$insertConfirmNumber     = $('.js_insertConfirmNumber'); //경고메세지칸
		$userFindIdConfirmNumber = $('.js_userFindIdConfirmNumber'); //인증번호칸
		$emailConfirmNumberCheck = $('.js_emailConfirmNumberCheck'); //인증버튼
		$searchIdUserEmail       = $('.js_userFindIdEmail'); //사용자이메일
		
		searchIdUserEmail        = $('.js_userFindIdEmail').val();
		insertConfirmNumber      = $('.js_userFindIdEmail').val();
		userFindIdConfirmNumber  = $('.js_userFindIdConfirmNumber').val();
		emailConfirmNumberCheck  = $('.js_emailConfirmNumberCheck').val();
		
		url       = '/movie/async/asyncService/ConfirmNumberSend';
		params    = {'searchIdUserEmail' : searchIdUserEmail};
		cbf       = function(result) {
						if(result.success) {
							resultMsg = '<label style="color: green;">확인되었습니다! 인증번호입력해주세요.</label>';
						} else {
							resultMsg = '<label style="color: red;">정확히 입력해주세요</label>';
							
					}
			};
			if(searchIdUserEmail != '' && emailRegexCheck(searchIdUserEmail)) {
				resultMsg = '<label style="color: green;">인증번호가 전송되었습니다 :) 확인 부탁드립니다.</label>';
				
				$('.js_userFindIdEmail').attr({'readonly' : true});
				$('.js_emailConfirmNumberCheck').attr({'readonly' : true});
				
				$.post(url,params,cbf);
			} else {
				resultMsg = '<label style="color: red;">정확히 입력해주세요</label>';
			}
	$insertConfirmNumber.html(resultMsg);
	$userFindIdConfirmNumber.removeAttr('readonly');
	$emailConfirmNumberCheck.removeAttr('readonly');
	//return isResult;
	//이메일 정합성검사
	//이메일 안적었다면 적어달라하기
	//일치하면 텍스트박스 막기
	//확인
}

//인증번호 확인 /인증번호 일치하는지 안하는지
function confirmNumber_Check() {
	var isResult                 = true;
		resultMsg                = '';
		$confirmNumbtn           = $('.js_emailConfirmNumberCheck'); //인증일치확인버튼
		$insertConfirmNumResult  = $('.js_userFindIdConfirmNumber'); //인증번호입력칸
		$insertConfirmEmail      = $('.js_insertConfirmEmail'); // 경고메세지
		$searchIdUserEmail       = $('.js_userFindIdEmail'); //사용자이메일
		$insertConfirmNumber     = $('.js_insertConfirmNumber'); //경고메세지칸 -- > 위에메세지칸
		
		insertConfirmNumResult   = $('.js_userFindIdConfirmNumber').val();//인증번호
		confirnNumbtn            = $('.js_emailConfirmNumberCheck').val();
		insertConfirmEmail       = $('.js_insertConfirmEmail').val(); //경고메세지
		searchIdUserEmail        = $('.js_userFindIdEmail').val();
	 
		url    = '/movie/async/asyncService/confirmNumberCheck';
		params = {'searchIdUserConfirmNum' : insertConfirmNumResult};
		cbf = 
			function(bool) {
				if(bool.success) {
					resultMsg = '<label style="color:red;">인증번호가 일치합니다.</label>';
					$insertConfirmEmail.html(resultMsg);
					$('.js_emailConfirmNumberCheck').attr({'readonly' : true});
					$('.js_userFindIdConfirmNumber').attr({'readonly' : true});
					isResult = true;
				} else {
					isResult = false;
					$confirmNumbtn.removeAttr('readonly');
					$searchIdUserEmail.removeAttr('readonly'); //사용자이메일readonly풀기
					resultMsg = '<label style="color:red;">인증번호가 일치하지 않습니다. 다시받아주세요</label>';
					$insertConfirmEmail.html(resultMsg);
					$('.js_userFindIdEmail').val('');//이메일칸지우기
					$('.js_insertConfirmNumber').html('');//위에 경고메세지 지우기
					$('.js_insertConfirmEmail').html('');
					$('.js_userFindIdConfirmNumber').val(''); //인증번호칸 지우기
				}
		};
		if(insertConfirmNumResult != '') {
			isResult = true;
			$.post(url, params, cbf);
		} else {
			isResult = false;
			resultMsg = '<label style="color: red;">인증번호 입력해주세요</label>';
		}
		$insertConfirmEmail.html(resultMsg);
		return isResult;
}

//마지막 확인버튼
function email_resultCheck() {
	var isResult                  = true;
		resultMsg                 = null; 
		$confirmNumber_Check      = $('.js_email_resultCheck'); //인증
		$userFindIdConfirmNumber  = $('.js_userFindIdConfirmNumber'); //인증번호칸
		$userFindIdEmail          = $('.js_userFindIdEmail'); //사용자이메일칸
		$insertConfirmEmail       = $('.js_insertConfirmEmail'); // 경고메세지
		
		confirmNumber_Check      =  $('.js_confirmNumber_Check').val();
		userFindIdConfirmNumber  =  $('.js_userFindIdConfirmNumber').val();
		userFindIdEmail          =  $('.js_userFindIdEmail').val();
		insertConfirmEmail       =  $('.js_insertConfirmEmail').val();
		
		url    = '/movie/async/asyncService/emailSendMessage';
		params = {
				'searchIdUserEmail'      : userFindIdEmail, //사용자이메일
				'searchIdUserConfirmNum' : userFindIdConfirmNumber //인증번호칸
				};
		cbf    = function(emailAllCheck) {
					if(emailAllCheck) {
						location.href='/movie/mainService/searchIDEmailResult';
					} else {
						resultMsg = '<label style="color: red;">모두 입력 바랍니다.</label>';
						$insertConfirmEmail.html(resultMsg);
					}
				};
		
	if(userFindIdConfirmNumber != '' && userFindIdEmail != '') {
		$.post(url, params, cbf);
		resultMsg = '<label style="color: green;">보내는둥..</label>';
		isResult = true;
	} else {
		resultMsg = '<label style="color: red;">모두 확인 부탁드립니다.</label>';
		isResult = false;
	}
	$insertConfirmEmail.html(resultMsg);
	isResult = true;

}


