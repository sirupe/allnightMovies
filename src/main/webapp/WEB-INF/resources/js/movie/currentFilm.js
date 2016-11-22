function init() {
	setEvent();
}

init();

function setEvent() {
	var $container = $('.js_currentFilmContainer');
	
	$container
		.on('click', '.js_currentFilmStartBtn', currentFilmStartBtn)
}

/*상세정보 텍스트 hover*/
$('.js_currentFilmImg').mouseenter(function() {
  $('.js_text').css("visibility","visible");
  
});

$('.js_currentFilmImg').mouseout(function() {
  $('.js_text').css("visibility","hidden");
});


/*비디오 실행 버튼*/
function currentFilmStartBtn() {
	
}

/*예매순 정렬*/
function sortReservation() {
	
}
/*평점순 정렬*/
function sortScore() {
	
}
/*예약하기버튼*/
function locationReservation() {
	
}
