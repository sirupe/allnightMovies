function init() {
	setEvent();
}
init();

function setEvent() {
	var $container = $('.js_searchPwdContainer');
	
	$container
		.on('click', '.js_searchPwdNextBtn', searchPwdResult)		  //searchPwd
		.on('click', '.js_searchPwdMainBtn', locationMain)			  //searchPwdResult
		.on('click', '.js_searchPwdSendConfirmNum', sendConfirmEmail) //searchPwdResult
		.on('click', '.js_searchPwdCheckConfirmNum', checkConfirmNum) //searchPwdConfirm
		.on('keyup', '.js_searchPwdNewPwdInput', validationPWD)		  //searchPwdChangePwd
		.on('keyup', '.js_searchPwdReNewPwdInput', validationRePWD)	  //searchPwdChangePwd
		.on('click', '.js_searchPwdCheckPwdBtn', checkRePWD)	  //searchPwdChangePwd
}

function searchPwdResult() {
	var $inputID = $('.js_searchPwdidInput');
		inputID  = $inputID.val();
		
		url 	 = '/movie/mainService/searchID'; //main service 에 searchID메소드  
		dir  	 = 'searchPwd';				 	  //디렉토리                        
		page 	 = 'searchPwdResult';			  //페이지                         
		js   	 = 'searchPwd/searchPwd';   	  //자바스크립트                      
		css  	 = 'searchPwd/searchPwd';	 	  //CSS     
		
	if(inputID != '') {
		submit(url, dir, page, js, css);
	} else {
		alert('아이디를 입력하세요.');
	}
}

function sendConfirmEmail() {
	var url    = '/movie/mainService/searchPwdsendEmail'; 
		dir    = 'searchPwd';				 	  
		page   = 'searchPwdConfirm';			  
		js     = 'searchPwd/searchPwd';   	  
		css    = 'searchPwd/searchPwd';	 	
		
	submit(url, dir, page, js, css);
}

function checkConfirmNum() {
	var $userConfirmNum = $('.js_searchPwdConfirmInput');
		userConfirmNum = $userConfirmNum.val();
		isSearchPwdChange = false;
		
		url    = '/movie/async/asyncService/checkPwdConfirmNum';
		params = {'searchPwdConfirmNum' : userConfirmNum};
		cbf    = function(searchPwdResult) {
					 if(searchPwdResult.data == 'false') {
					 	alert('인증번호를 다시 확인해주세요');
					 } else {
					 	location.href=searchPwdResult.data;
					 }
				 }
	if(userConfirmNum != '') {
		$.post(url, params, cbf);
	} else {
		alert('인증번호를 입력하세요');
	}
}

function checkRePWD() {
	var pwd = validationPWD();
		repwd = validationRePWD();
		$newPwd = $('.js_searchPwdNewPwdInput');
		$newPwdText = $('.js_searchPwdReNewPwdText');
		newPwd = $newPwd.val();
		
		url  = '/movie/mainService/updatePWD';
		dir  = 'searchPwd';	
		page = 'searchPwdChangeCompleted';
		js   = 'searchPwd/searchPwd';
		css  = 'searchPwd/searchPwd';	 	
		
	if(pwd && repwd) {
		submit(url, dir, page, js, css);
	} else {
		$newPwdText.html('<label style="color: red;">입력하신 비밀번호와 일치하지 않습니다.</label>');
	}
}

//정합성검사 CSS 
function validationPWD() {
	var isResult = true;
		$newPwd = $('.js_searchPwdNewPwdInput');
		$newPwdText = $('.js_searchPwdNewPwdText');
		newPwd = $newPwd.val();
		resultMsg = '<label style="color:green;">사용 가능합니다.</label>';
	
	if(!pwdRegexCheck(newPwd)) {
		isResult = false;
		resultMsg = '<label style="color:red;">영문,숫자,특수문자 포함 8~15자 이내로 입력해주세요.</label>'
	}
	if(newPwd == '') {
		isResult = false;
		resultMsg = '필수 입력사항입니다.';
	}
	$newPwdText.html(resultMsg);
	return isResult;
}

function validationRePWD() {
	var isResult = true;
		$newPwd = $('.js_searchPwdNewPwdInput');
		$reNewPwd = $('.js_searchPwdReNewPwdInput');
		$reNewPwdText = $('.js_searchPwdReNewPwdText');
		newPwd = $newPwd.val();
		reNewPwd = $reNewPwd.val();
		resultMsg = '<label style="color:green;">비밀번호가 일치합니다.</label>';
		
	if(newPwd != reNewPwd) {
		isResult = false;
		resultMsg ='<label style="color: red;">입력하신 비밀번호와 일치하지 않습니다.</label>';
	}
	if(reNewPwd == '') {
		isResult = false;
		resultMsg = '필수 입력사항입니다.';
	}
	
	$reNewPwdText.html(resultMsg);
	return isResult;
}
