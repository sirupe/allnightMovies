function init() {
	setEvent();
}

init();

function setEvent() {
	var $container = $('.js_screeningsPlannedContainer');
	
	$container
		.on('click', '.js_video', palnnedFilmStartBtn)
		.on('click', '.js_insertMovie', insertMovie)
}

/*관리자 영화 등록 버튼*/
function insertMovie() {
	var url = '/movie/mainService/managerMovieInsertForm';
	
	submit(url);
}

/*비디오 실행 버튼*/
function palnnedFilmStartBtn() {
	var $video = $('.js_video');
		
		$video.attr({'autoplay' : 'autoplay'});
		$video.attr({'poster' : ''});
		$video.attr({'controls' : 'controls'});
		$('.js_mainFilm').css('opacity', '1');
}
