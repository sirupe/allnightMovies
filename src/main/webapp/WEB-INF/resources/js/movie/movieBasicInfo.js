
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
		movieInfoTitle = $movieInfoTitle.attr('data-movie-info-title'),
		
		url = '/movie/mainService/getReviewBoard',  
		params = {'movieInfoTitle' : movieInfoTitle}
		cbf	= function(mav) {
				$('.js_reviewBoardContainer').html(mav);
			  }; 
			  
	$.post(url,params, cbf);
}

