
function popMoviePayingCancel() {
	payPagePopupCancel();
	var url = '/movie/mainService/ticketingCancelSet',
		cbf = function(result) {
			$('.js_payPopupPage').html(result);
		}
	$.post(url, cbf);	
}

function locationTicketInfo() {
	location.href='/movie/mainService/viewMyInfo';
}

function setPayingResultEvents() {
	var $container = $('.js_ticketingResultContainer');
	$container.on('click', '.js_popMoviePayingCancel', popMoviePayingCancel)
			  .on('click', '.js_locationMain', locationMain)
			  .on('click', '.js_ticketingInfo' locationTicketInfo)
}

function initPayingResult() {	
	setPayingResultEvents();
}
initPayingResult();