
function popMoviePayingCancel() {
	payPagePopupCancel();
	var url = '/movie/mainService/ticketingCancelSet',
		cbf = function(result) {
			$('.js_payPopupPage').html(result);
		}
	$.post(url, cbf);	
}

function setPayingResultEvents() {
	var $container = $('.js_ticketingResultContainer');
	$container.on('click', '.js_popMoviePayingCancel', popMoviePayingCancel)
			  .on('click', '.js_locationMain', locationMain)
}

function initPayingResult() {	
	setPayingResultEvents();
}
initPayingResult();