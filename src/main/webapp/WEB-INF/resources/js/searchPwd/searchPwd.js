
function searchPwdResult() {
	if($('#search-userid').val() == '') {
		alert('아이디를 입력하세요');
	} else {
		submit(
			'POST',
			'/movie/mainService/searchID',//main service 에 searchID메소드
			'searchPwd',				  //디렉토리
			'searchPwdResult',			  //페이지
			'searchPwd/searchPwd',   	  //자바스크립트
			'searchPwd/searchPwd'	 	  //CSS
		);
	}
}

function sendConfirmNum() {
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
	if($('#searchpwd-confirm-num').val() == '') {
		alert('인증번호를 입력하세요');
	} else {
		submit(
			'POST',
			'/movie/mainService/checkConfirmNum', 
			'searchPwd',				    //디렉토리                           
			'searchPwdChangePwd',		//페이지                            
			'searchPwd/searchPwd',   	    //자바스크립트                         
			'searchPwd/searchPwd'	 	    //CSS                            
		);
	}
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

//정합성검사