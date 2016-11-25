function init() {
	setEvent();
}

init();

function setEvent() {
	var $container = $('.js_currentFilmContainer');
	
	$container
		.on('click', '.js_currentFilmStartBtn', currentFilmStartBtn)
		.on('click', '.js_urrentFilmReservationBtn', locationReservation)
}

/*이메일인증번호 발송 Button */
function sendEmailConfirmNum(e) {
	var $confirmNum     = $('.js_emailConfirmNumInput');
	 	$confirmNumText = $('.js_emailConfirmNumText');
	 	$confirmButton  = $('.js_emailConfirmNumInputBtn');
		isSendConfirmNum = true;
	
	$.post(
		'/movie/async/asyncService/sendEmailConfirmNum',
		function(sendEmailResult) {
			if(sendEmailResult.data == 'true'){
				//ATTR(태그속성값)
				$confirmNum.removeAttr('readonly');
				$confirmNum.attr({'placeholder' : '인증번호 입력'});
				$confirmNum.css('background-color', 'white');
				$confirmButton.attr({'class' : 'button-myInfoChangeEmail__sendmail'});
				$confirmButton.css('background-color', '#565656');
				$confirmButton.css('cursor','default');
				$confirmNumText.html('회원가입시 입력하신 이메일주소로 인증번호가 발송되었습니다.');
			} 
		}
	)
	
	e.preventDefault();
	e.stopPropagation();
	return isSendConfirmNum;
}
/*비디오 실행 버튼*/
function currentFilmStartBtn() {
	var $startButton = $('.js_currentFilmStartBtn'),
		$video 		 = $('.js_video');
		
	$startButton.attr({'hidden' : 'hidden'});
	$video.attr({'hidden' : ''});
}

/*예매순 정렬*/
function sortReservation() {
	
}
/*평점순 정렬*/
function sortScore() {
	
}

/*예약하기버튼*/
function locationReservation() {
	var url    = '/movie/mainService/ticketing'; 
		dir    = 'reservation/ticketing';				 	  
		page   = 'ticketing';			  
		js     = 'reservation/ticketing';   	  
		css    = 'reservation/ticketing';	 	
	
	submit(url, dir, page, js, css);
}
