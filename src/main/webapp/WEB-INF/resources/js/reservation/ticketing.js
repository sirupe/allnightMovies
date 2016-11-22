var screeningDate;
var movieTitle;
var $screeningDate;
var $movieTitle;

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

function movieTitleClick() {
	$movieTitle = $(this);
	var title = $movieTitle.text().trim();
		movieTitle = title.substr(3, title.length).trim();
	if(screeningDate == undefined) {
		$('.js_screeningViewer').text('예매일자를 선택해주세요.');
	} else {
		getMovieTicketingInfo();
	}
}

function ticketingDateClick() {
	if($screeningDate != undefined) {
		$screeningDat.css({'background-color' : 'lavenderblush'});
	}
	
	$screeningDate = $(this);
	var year = $('.js_calendarYear').text();
		month = $('.js_calendarMonth').text();
		date = $screeningDate.text().trim();
	screeningDate = year + '.' + month + '.' + date;
//	#ffd5e3
	if(movieTitle == undefined) {
		$('.js_screeningViewer').text('영화를 선택해주세요.');
	} else {
		getMovieTicketingInfo();
	}
	
	$screeningDat.css({'background-color' : '#ffd5e3'});
}
function nonTicketingDateClick() {
	$('.js_screeningViewer').text('상영중인 영화 정보가 없습니다.');
}

function getMovieTicketingInfo() {
	var url = '/movie/mainService/screeningPlanned';
		params = {
				'screeningDate' : screeningDate,
				'movieTitle' : movieTitle
		};
		cbf = function(result) {
			$('.js_movieTime').html(result);
		};
	
	$.post(url, params, cbf);
}

function setEvent() {
	var $container = $('.js_ticketing');
	$container.on('click', '.js_calendarPrev', calendarPrevBtnClick)
			  .on('click', '.js_calendarNext', calendarNextBtnClick)
			  .on('click', '.js_movieTitleClick', movieTitleClick)
			  .on('click', '.js_ticketingDateClick', ticketingDateClick)
			  .on('click', '.js_nonTicketingDateClick', nonTicketingDateClick)
}

function init() {
	setEvent();
}

init();