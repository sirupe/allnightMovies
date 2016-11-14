
function searchPwdResult() {
	var useridResult = validationID();
	if(useridResult) {
		submit(
			'POST',
			'/movie/mainService/searchIDAndEmail',//main service 에 searchID메소드
			'searchPwd',				  //디렉토리
			'searchPwdResult',			  //페이지
			'searchPwd/searchPwd',   	  //자바스크립트
			'searchPwd/searchPwd'	 	  //CSS
		);	
	}
}

function sendConfirmEmail() {
	submit(
		'POST',
		'/movie/mainService/sendConfirmNum', 
		'searchPwd',				    //디렉토리                           
		'searchPwdConfirm',			    //페이지                            
		'searchPwd/searchPwd',   	    //자바스크립트                         
		'searchPwd/searchPwd'	 	    //CSS                            
	);
}

function checkConfirmNum() {
	
	var userCertificationNum = $('#searchpwd-confirm-num').val();
	var certificationNum = $('#certification-num').val();
	var resultBool = $('#result-bool').val()
	
	var resultMsg = '<label style="color:green;"> </label>';
	
	if(userCertificationNum == '') {
		resultMsg = '<label style="color:red;">인증번호를 입력하세요</label>';
	} else if(userCertificationNum != certificationNum){
		resultMsg = '<label style="color:red;">인증번호를 다시 확인하세요</label>';
	} else {
		submit(
			'POST',
			'/movie/mainService/checkConfirmNum', 
			'searchPwd',				//디렉토리                           
			'searchPwdChangePwd',		//페이지                            
			'searchPwd/searchPwd',   	//자바스크립트                         
			'searchPwd/searchPwd'	 	//CSS                            
		);
	}
	$('#searchpwd-confirm-num-text').html(resultMsg);
}

function checkRePWD() {
	if($('#newPWD').val() != $('#newPWD-check').val()) {
		alert('비밀번호가 일치하지 않습니다.');
	} else if($('#newPWD').val() == '' || $('#newPWD-check').val() == '') {
		alert('비밀번호를 입력해주세요');
	} else {
		submit(
			'POST',
			'/movie/mainService/updatePWD',
			'searchPwd',
			'searchPwdChangeCompleted',
			'searchPwd/searchPwd',
			'searchPwd/searchPwd'
		);
	}
}

function validationCheck() {
	var pwd = validationPWD();
	var repwd = validationRePWD();
	
	if(pwd && repwd) {
		console.log('비번정합성' + pwd)
		console.log('비번정합성re' + repwd)
		submit(
			'POST',
			'/movie/mainService/updatePWD',
			'searchPwd',
			'searchPwdChangeCompleted',
			'searchPwd/searchPwd',
			'searchPwd/searchPwd'	
		);
	}
}

//정합성검사
function validationPWD() {
	var isResult = true;
	var rePwd = $('#newPWD').val();
	var resultMsg = '<label style="color:green;">사용 가능합니다.</label>';
	
	if(!pwdRegexCheck(rePwd)) {
		isResult = false;
		resultMsg = '<label style="color:red;">영문,숫자,특수문자 포함 8~15자 이내로 입력해주세요.</label>'
	}
	if(rePwd == '') {
		isResult = false;
		resultMsg = '필수 입력사항입니다.';
	}
	
	$('#newPWD-text').html(resultMsg);
	return isResult;
}

function validationRePWD() {
	var isResult = true;
	var pwd = $('#newPWD').val();
	var rePwd = $('#newPWD-check').val();
	var resultMsg = '<label style="color:green;">비밀번호가 일치합니다.</label>';
		
	if(pwd != rePwd) {
		isResult = false;
		resultMsg ='<label style="color: red;">입력하신 비밀번호와 일치하지 않습니다.</label>';
	}
	if(rePwd == '') {
		isResult = false;
		resultMsg = '필수 입력사항입니다.';
	}
	
	$('#newPWD-re-text').html(resultMsg);
	return isResult;
}

function validationID() {
	var isResult = true;
	var searchUserID = $('#search-userid').val();
	var resultMsg = '<label style="color:green;"> </label>';
	
	if(!idRegexCheck(searchUserID)) {
		isResult = false;
		resultMsg = '<label style="color:red;">아이디 형식 오류 입니다.</label>';
	}
	if(searchUserID == '') {
		isResult = false;
		resultMsg = '필수 입력사항입니다.';
	}
	$('#search-userid-result').html(resultMsg);
	return isResult;
}

