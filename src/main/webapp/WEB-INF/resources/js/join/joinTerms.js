function agree() {
	var url	 = '/movie/mainService/getTemplate';
		dir	 = 'join';
		page = 'join';
		js	 = 'join/join';               
		css	 = 'join/join';               
	
	if(isCheck()) {
		submit(url, dir, page, js, css);
	} else {
		alert('약관에 모두 동의하셔야 가입이 가능합니다.');
		history.go(0);
	}
}

function isCheck() {
	return $('#terms-agree1').is(':checked') && $('#terms-agree2').is(':checked') ? 
		true : false;
}

function setEvent() {
	var $joinTermsBtn = $('.js_joinTerms');
	$joinTermsBtn.on('click', 'js_joinTerms', agree);
}

function init() {
	setEvent();
}

init();