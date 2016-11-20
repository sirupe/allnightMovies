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

/*이메일 정합성 검사 */
function validationEmail() {
	var chageEmail = $('#myinfo-chageEmail').val();
	var changEmailText = $('#myinfo-chageEmail-text');
	var isCheck = true;
	var resultMsg = '<label style="color:green;">사용 가능합니다.</label>';
	
	if(!emailRegexCheck(chageEmail)) {
		isCheck = false;
		resultMsg = '<label style="color:red;">이메일 주소를 정확히 입력해주세요.</label>';
	}
	
	changEmailText.html(resultMsg);
	return isCheck;
}
