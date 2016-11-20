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
//탈퇴시키기
function withdraw() {
	var withdrawPwd = $('#withdraw-password').val();
	
	if(withdrawPwd != '') {
		$.post(
			'/movie/async/asyncService/userWithdraw',
			{'withdrawUserPwd' : withdrawPwd},
			function(withdrawResult) { //return 명과 달라도됨
				if(withdrawResult.data == 'false') {
					alert('비밀번호 오류입니다.');
				} else {
					location.href=withdrawResult.data;
					alert('그동안 AllnightMovies를 이용해주셔서 감사합니다.');
				}
			}
		);
	} else {
		alert('비밀번호를 입력해주세요');
	}
}
