function titleMenu() {
	var xhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.onreadystatechange = function() {
		// 요청이 정상적으로 처리되었을 때
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			console.log('일단..다녀오긴 했나부다.');
			document.getElementaById('subMenu').innerHTML = this.responseText;
		}
	};
	
	xhttp.open('GET', '/movie/mainService/getTemplate', true);
	xhttp.send('main=${main.mainMenuPage }&sub=${subMenu.subMenuPage}');
}

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