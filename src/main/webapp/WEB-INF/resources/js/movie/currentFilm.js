function init() {
	setEvent();
}

init();

function setEvent() {
	var $container = $('.js_currentFilmContainer');
	
	$container
		.on('click', '.js_urrentFilmReservationBtn', locationReservation)
		.on('click', '.js_currentFilmSortReservation', sortReservation)
		.on('click', '.js_currentFilmSortScore', sortScore)
		.on('click', '.js_video', currentFilmStartBtn)
		.on('click', '.js_insertMovie', insertMovie)
}
/*관리자 영화 등록 버튼*/
function insertMovie() {
	var url = '/movie/mainService/managerMovieInsertForm';
	
	submit(url);
}

/*비디오 실행 버튼*/
function currentFilmStartBtn() {
	var $video = $('.js_video');
	
	$video.attr({'autoplay' : 'autoplay'});
	$video.attr({'poster' : ''});
	$video.attr({'controls' : 'controls'});
	$('.js_mainFilm').css('opacity', '1');
}


/*이름순 정렬*/
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

