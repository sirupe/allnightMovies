function agree() {
	if(isCheck()) {
		submit(
			'POST',
			'/movie/mainService/getTemplate',
			'join',
			'join',
			'',
			'join'
		);
	} else {
		alert('약관에 모두 동의하셔야 가입이 가능합니다.');
		history.go(0);
	}
}

function isCheck() {
	return $('#terms-agree1').is(':checked') && $('#terms-agree2').is(':checked') ? 
		true : false;
}