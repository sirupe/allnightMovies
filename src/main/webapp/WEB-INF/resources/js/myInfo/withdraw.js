function init() {
	setEvent();
}
init();

function setEvent() {
	var $container = $('.js_WithdrawContainer');
	
	$container
		.on('click', '.js_WithdrawMyInfoBtn', locationMyinfo)
		.on('click', '.js_WithdrawBtn', withdraw)
}
//내정보보기페이지
function locationMyinfo() {
	var url    = '/movie/mainService/viewMyInfo';
		dir    = 'myInfo';                                
		page   = 'myInfo';                                
		js     = 'myInfo/myInfo';                         
		css    = 'myInfo/myInfo';  
	
	submit(url, dir, page, js, css);
}
//탈퇴시키기
function withdraw() {
	var $withdrawPwd = $('.js_WithdrawPasswordInput');
		withdrawPwd = $withdrawPwd.val();
		
		url    = '/movie/async/asyncService/userWithdraw';
		params = {'withdrawUserPwd' : withdrawPwd};
		cbf    = function(withdrawResult) { //return 명과 달라도됨
					 if(withdrawResult.data == 'false') {
					 	alert('비밀번호 오류입니다.');
					 } else {
					 	alert('그동안 AllnightMovies를 이용해주셔서 감사합니다.');
					 	location.href=withdrawResult.data;
					 }
				 }
	if(withdrawPwd != '') {
		$.post(url, params, cbf);
	} else {
		alert('비밀번호를 입력해주세요');
	}
}
