
function init() {
	setEvent();
}

init();

function setEvent() {
	var $container = $('.js_movieBasicInfoContainer');
	
	$container
		.on('click', '.js_tab_review', tabReview)
}

function tabReview() {
	var $movieInfoTitle = $('.js_basicInfomovieTitle'),
		movieInfoTitle = $movieInfoTitle.val(),
		url = '/movie/mainService/getReviewBoard',  
		params = {'movieInfoTitle' : movieInfoTitle}
		cbf	= function(mav) {
				$('.js_currentFilmSort').html(mav);
			  }; 
	$.post(url, cbf);
}
