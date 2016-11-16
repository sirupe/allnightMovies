function locationJoinTerms() {
	submit(
		'POST',
		'/movie/mainService/getTemplate',
		'join/joinTerms',	// 디렉토리
		'joinTerms',		// 페이지
		'join/joinTerms',	// 자바스크립트
		'join/joinTerms'	// CSS
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

function logout() {
	location.href = '/movie/mainService/logout';
}

function locationMenus(method, action, directory, page) {
	var getMethod = method;
	var getAction = action;
	var getDirectory = directory;
	var getPage = page;
	console.log('Menus');
	$(document).ready(function() {
		$('form').attr({'method' : getMethod});
		$('form').attr({'action' : getAction});
		$('#hidden-dir').val(getDirectory);
		$('#hidden-page').val(getPage);
		$('form').submit();
		
		
	});
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

function pwdRegexCheck(pwd) {
	var regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
	return regex.test(pwd);
}

function idRegexCheck(id) {
	var regex = /^[A-Za-z0-9_-]{4,15}$/;
	return regex.test(id);
}

function emailRegexCheck(email) {
	var regex = /^[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
	return regex.test(email);
}