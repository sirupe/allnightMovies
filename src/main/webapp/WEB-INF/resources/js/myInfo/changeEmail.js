/*취소버튼 발송*/
function viewMyInfo() {
	submit(
		'POST',
		'/movie/mainService/viewMyInfo',
		'myInfo',
		'myInfo',
		'myInfo/myInfo',
		'myInfo/myInfo'
	);
}
/*이메일인증번호 발송 sendEmailConfirmNum*/
function sendEmailConfirmNum() {
	submit(
		'POST',
		'/movie/async/asyncService/sendEmailConfirmNum',
		'myInfo',				    //디렉토리                           
		'myInfoChangeEmail',		//페이지                            
		'myInfo/changeEmail',   	//자바스크립트                         
		'myInfo/changeEmail'	 	//CSS                            
	);
}

/*이메일인증번호 발송*/
function validationEmail() {
	var chageEmail = $('#input-myinfo-chageEmail').val();
	var chageEmailText = $('#text-myInfoChangeEmail');
}

//이메일 정보 변경 
