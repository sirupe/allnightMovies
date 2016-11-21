function calendarPrevBtnClick() {
	var thisMonth 	= $('.js_calendarMonth').text() - 1;
		thisYear 	= $('.js_calendarYear').text();
		month 		= thisMonth < 1 ? 12 : thisMonth;
		year 		= thisMonth < 1 ? thisYear - 1 : thisYear;
		
		url 		= '/movie/mainService/calendar';
		params 		= {
				'calendarMonth' : month,
				'calendarYear' : year
		};
		cbf 		= function(result) {
				console.log(result);
				$('.calendar').html(result);
		};
	$.post(url, params, cbf);
		
}

function calendarNextBtnClick() {
	var thisMonth 	= Number($('.js_calendarMonth').text()) + 1;
		thisYear 	= Number($('.js_calendarYear').text());
		month 		= thisMonth > 12 ? 1 : thisMonth;
		year 		= thisMonth > 12 ? thisYear + 1 : thisYear;
		
		url 		= '/movie/mainService/calendar';
		params 		= {
				'calendarMonth' : month,
				'calendarYear' : year
		};
		cbf 		= function(result) {
				console.log(result);
				$('.calendar').html(result);
		};
	$.post(url, params, cbf);
}

function setEvent() {
	var $container = $('.js_ticketing');
	$container.on('click', '.js_calendarPrev', calendarPrevBtnClick)
			  .on('click', '.js_calendarNext', calendarNextBtnClick)
}

function init() {
	setEvent();
}


init();
