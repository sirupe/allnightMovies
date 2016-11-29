function ticketCancelBtnClick() {
	var left = ( $(window).scrollLeft() + ($(window).width() - $('.js_payPopupPage').width()) / 2 ),
	top = $(window).scrollTop();
	
	$('.js_ticketCancelPage').css({
		'display' : 'inline',
		'left' : '0px',
		'top' : '0px',
		'position' : 'fixed'
	});
}

function cancelTicketConfirmBtnClick() {
	if($('.js_cancelTicketCheckRadio').is(":checked")) {
		var url = '/movie/mainService/ticketingCancel',
			params = {
				'ticketNum' : $('.js_ticketCancelBtn').data('ticketNum')
			},
			cbf = function(result) {
				$('.js_cancelResult').html(result);
			}
		$.post(url, params, cbf);
		
	} else {
		alert('주의사항 확인 체크 후 진행 가능합니다.');
	}
	
}

function cancelTicketCancelBtnClick() {
	$('.js_ticketCancelPage').css({
		'display' : 'none',
		'position' : 'absolute'
	});
}

function confirmBtnClick() {
	cancelTicketCancelBtnClick();
	
	var url = '/movie/mainService/ticketingConfirmation',
	cbf = function(result) {
		$('.js_myInfoInnerContainer').html(result);
	}
	$.post(url, cbf);
}

function setEvent() {
	$('.js_ticketInfoContainer')
		.on('click', '.js_ticketCancelBtn', ticketCancelBtnClick)
		.on('click', '.js_cancelTicketConfirmBtn', cancelTicketConfirmBtnClick)
		.on('click', '.js_cancelTicketCancelBtn', cancelTicketCancelBtnClick)
		.on('click', '.js_cancelTiketConfirm', confirmBtnClick)
}

function init() {
	console.log('tickting info view 로딩됨')
	setEvent();
}

init();