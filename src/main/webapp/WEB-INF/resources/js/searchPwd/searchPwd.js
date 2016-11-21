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

}

function searchPwdResult() {
	var $inputID = $('.js_searchPwd_idInput');
		inputID  = $inputID.val();
		
		method   = 'POST'; 
		url 	 = '/movie/mainService/searchID'; //main service 에 searchID메소드  
		dir  	 = 'searchPwd';				 	  //디렉토리                        
		page 	 = 'searchPwdResult';			  //페이지                         
		js   	 = 'searchPwd/searchPwd';   	  //자바스크립트                      
		css  	 = 'searchPwd/searchPwd';	 	  //CSS     
		
	if(inputID != '') {
		submit(method ,url, dir, page, js, css);
	} else {
		alert('아이디를 입력하세요.');
	}
}

function sendConfirmEmail() {
	var method = 'POST'; 
		url    = '/movie/mainService/searchPwdsendEmail'; 
		dir    = 'searchPwd';				 	  
		page   = 'searchPwdConfirm';			  
		js     = 'searchPwd/searchPwd';   	  
		css    = 'searchPwd/searchPwd';	 	
		
	submit(method, url, dir, page, js, css);
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

//function changePWD() {
//	console.log(checkConfirmNum());
//	if(checkConfirmNum()) {
//		submit(
//			'POST',
//			'/movie/mainService/getTemplate', 
//			'searchPwd',				    //디렉토리                           
//			'searchPwdChangePwd',			//페이지                            
//			'searchPwd/searchPwd',   	    //자바스크립트                         
//			'searchPwd/searchPwd'	 	    //CSS                            
//		);	
//	} else {
//		alert('인증번호가 일치하지 않습니다.');
//	}
//}

function checkRePWD() {
	var pwd = validationPWD();
	var repwd = validationRePWD();
	var newPwd = $('#newPWD').val();
	var newPwdText = $('#newPWD-re-text');
	
	if(pwd && repwd) {
		submit(
			'POST',
			'/movie/mainService/updatePWD', 
			'searchPwd',				    //디렉토리                           
			'searchPwdChangeCompleted',		//페이지                            
			'searchPwd/searchPwd',   	    //자바스크립트                         
			'searchPwd/searchPwd'	 	    //CSS                            
		);
	} else {
		newPwdText.html('<label style="color: red;">입력하신 비밀번호와 일치하지 않습니다.</label>');
	}
}

//이동
function locationLogin() {
	submit(
		'POST',
		'/movie/mainService/getTemplate', 
		'include',				    //디렉토리                           
		'mainPage',		//페이지                            
		'template',   	    //자바스크립트                         
		'home'	 	    //CSS                            
	);	
}

//정합성검사 CSS 
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
