function locationJoinTerms() {
	submit(
		'POST',
		'/movie/mainService/getTemplate',
		'join/joinTerms',	// 디렉토리
		'joinTerms',		// 페이지
		'join/joinTerms',	// 자바스크립트
		'joinTerms'			// CSS
	);
}

function locationLogon() {
	submit(
		'POST',
		'/movie/mainService/login'
	);
}

function locationMain() {
	submit(
		'POST',
		'/'
	);
}

/*shin searchPwd*/
function locationSearchPwd() {
	submit(
		'POST',
		'/movie/mainService/getTemplate',//main service 에서 기본 템플레이트 출력
		'searchPwd',			 //디렉토리
		'searchPwd',			 //페이지
		'searchPwd/searchPwd',   //자바스크립트
		'searchPwd/searchPwd'	 //CSS
	);
}

function logout() {
	location.href = '/movie/mainService/logout';
}

function submit(method, action, directory, page, js, css) {
	console.log('method');
	$(document).ready(function() {
		$('form').attr({'method' : method});
		$('form').attr({'action' : action});
		$('#hidden-dir').val(directory);
		$('#hidden-page').val(page);
		$('#hidden-js').val(js);
		$('#hidden-css').val(css);
		$('form').submit();
	});
}