function searchPwdResult() {
	
	$(document).ready(function() {
		console.log($('#userID').val());
		if($('#userID').val() == '') {
			alert('아이디를 입력하세요');
		} else {
			submit(
				'POST',
				'/movie/mainService/searchID',//main service 에서 기본 템플레이트 출력
				'searchPwd',					 //디렉토리
				'searchPwdResult',			 		//페이지
				'searchPwd/searchPwd',   		//자바스크립트
				'searchPwd/searchPwd'	 		//CSS
			);
		}
	});
}