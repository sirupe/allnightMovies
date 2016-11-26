function init() {
	setEvent();
}

init();

function setEvent() {
	var $container = $('.js_currentFilmContainer');
	
	$container
//		.on('click', '.js_currentFilmStartBtn', currentFilmStartBtn)
		.on('click', '.js_urrentFilmReservationBtn', locationReservation)
		.on('click', '.js_currentFilmSortReservation', sortReservation)
		.on('click', '.js_currentFilmSortScore', sortScore)
		.on('click', '.js_video', currentFilmStartBtn)
}

/*이메일인증번호 발송 Button */
function sendEmailConfirmNum(e) {
	var $confirmNum     = $('.js_emailConfirmNumInput'),
	 	$confirmNumText = $('.js_emailConfirmNumText'),
	 	$confirmButton  = $('.js_emailConfirmNumInputBtn'),
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
	var $video = $('.js_video');
	
	$video.attr({'autoplay' : 'autoplay'});
	$video.attr({'poster' : ''});
	$video.attr({'controls' : 'controls'});
	$('.js_mainFilm').css('opacity', '1');
}


/*예매순 정렬*/ //TODO 현재 가나다순 정렬중임
function sortReservation() {
	var url = '/movie/mainService/sortTicketing',  
		cbf	= function(mav) {
				$('.js_currentFilmSort').html(mav);
			  }; 
	$.post(url, cbf);
}
/*평점순 정렬*/
function sortScore() {
	var url = '/movie/mainService/sortScore',  
		cbf	= function(mav) {
				$('.js_currentFilmSort').html(mav);
			  }; 
			  
	$.post(url, cbf);
}
/*예약버튼*/
function locationReservation() {
	var url    = '/movie/mainService/ticketing', 
		dir    = 'reservation/ticketing',				 	  
		page   = 'ticketing',			  
		js     = 'reservation/ticketing',   	  
		css    = 'reservation/ticketing';	 	
	
	submit(url, dir, page, js, css);
}
