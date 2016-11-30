
function popMoviePayingCancel() {
	payPagePopupCancel();
	var url = '/movie/mainService/ticketingCancelSet',
		cbf = function(result) {
			$('.js_payPopupPage').html(result);
		}
	$.post(url, cbf);	
}

function locationTicketInfo() {
	locationMyInfo('ticketing');
}

function setPayingResultEvents() {
	var $container = $('.js_ticketingResultContainer');
	$container.on('click', '.js_popMoviePayingCancel', popMoviePayingCancel)
			  .on('click', '.js_locationMain', locationMain)
			  .on('click', '.js_ticketingInfo', locationTicketInfo)
}

function initPayingResult() {	
	console.log('initPayingResult 로딩');
	setPayingResultEvents();
}
initPayingResult();