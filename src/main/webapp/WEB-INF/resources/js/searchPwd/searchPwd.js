function searchPwdResult() {
	var inputID = $('#search-userid').val();
	if(inputID != '') {
		submit(
			'POST',
			'/movie/mainService/searchID',//main service 에 searchID메소드
			'searchPwd',				  //디렉토리
			'searchPwdResult',			  //페이지
			'searchPwd/searchPwd',   	  //자바스크립트
			'searchPwd/searchPwd'	 	  //CSS
		);	
	} else {
		alert('아이디를 입력하세요.');
	}
}

function sendConfirmEmail() {
	submit(
		'POST',
		'/movie/mainService/searchPwdsendEmail', 
		'searchPwd',				    //디렉토리                           
		'searchPwdConfirm',			    //페이지                            
		'searchPwd/searchPwd',   	    //자바스크립트                         
		'searchPwd/searchPwd'	 	    //CSS                            
	);
}

function checkConfirmNum() {
	var userConfirmNum = $('#searchpwd-confirm-num');
	var checkConfirmNumText = $('#searchpwd-confirm-num-text');
	var isSearchPwdChange = true;
	
	//ATTR = 태그안에 들어가는 속성들
	if(userConfirmNum.attr('readonly') != 'readonly') {
		isSearchPwdChange = false;
		if(userConfirmNum.val().length == 6) {
			$.post(
				'/movie/mainService/checkConfirmNum',
				{'searchPwdConfirmNum' : userConfirmNum.val()},//params변수명 : value	
				
				function(resultMsg) {
					checkConfirmNumText.html(resultMsg);
					if($('#ischeck-confirmnum-id').val() == 'true') {
						isSearchPwdChange = true;
						//이거슨 스레드에 쓸거야
						userConfirmNum.attr({'readonly' : 'readonly'});
						userConfirmNum.css("background-color", "#dcdcdc");
					}
				}
			)
		} else {
			isSearchPwdChange = false;
		}
	}
	return isSearchPwdChange;
}

function changePWD() {
	var checkConfirmNumText = $('#searchpwd-confirm-num-text');
	
	if(checkConfirmNum()) {
		submit(
			'POST',
			'/movie/mainService/getTemplate', 
			'searchPwd',				    //디렉토리                           
			'searchPwdChangePwd',			//페이지                            
			'searchPwd/searchPwd',   	    //자바스크립트                         
			'searchPwd/searchPwd'	 	    //CSS                            
		);	
	} else {
		alert('인증번호가 일치하지 않습니다.');
	}
}

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
function locationMain() {
	submit(
		'POST',
		'/movie/mainService/getTemplate', 
		'include',				                       
		'mainPage',		            
		'template',   	                   
		'home'	 	                   
	);	
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
	var searchUserIDText = $('#search-userid-result');
	var resultMsg = '<label style="color:green;"> </label>';
	
	if(searchUserID == '') {
		isResult = false;
		resultMsg = '필수 입력사항입니다.';
	}
	searchUserIDText.html(resultMsg);
	return isResult;
}
