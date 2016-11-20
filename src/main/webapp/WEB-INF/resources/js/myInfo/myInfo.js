//내정보보기페이지
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
//이메일 정보 창
function changeEmailInfoForm() {
	submit(
		'POST',
		'/movie/mainService/getTemplate',
		'myInfo',
		'myInfoChangeEmail',
		'myInfo/changeEmail',
		'myInfo/changeEmail'
	);	
}
//비밀번호 변경 창
function changePwdInfoForm() {
	submit(
		'POST',
		'/movie/mainService/getTemplate',
		'myInfo',
		'myInfoChangePwd',
		'myInfo/changePwd',
		'myInfo/changePwd'
	);	
}
//회원탈퇴 
function withdrawForm() {
	submit(
		'POST',
		'/movie/mainService/getTemplate',
		'myInfo',
		'withdraw',
		'myInfo/withdraw',
		'myInfo/withdraw'
	);		
}