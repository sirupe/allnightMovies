var screeningDate;
var movieTitle;
var $screeningDate;
var $movieTitle;
var $movieTime;
var $personCnt;
var theater;
var $moviePrice;
var seatArr;


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
				$('.calendar').html(result);
		};
	$.post(url, params, cbf);
}

function movieTitleClick() {
	$personCnt = undefined;
	$('.js_seatInfo').html('');
	if($movieTitle != undefined) {
		cssColor($movieTitle, '', '');
	}
	$movieTitle = $(this);
	var title = $movieTitle.text().trim();
		movieTitle = title.substr(3, title.length).trim();
	if(screeningDate == undefined) {
		$('.js_screeningTimeViewer').text('예매일자를 선택해주세요.');
	} else {
		getMovieTicketingInfo();
	}
	
	cssColor($movieTitle, '#e8e3e5');
}

function ticketingDateClick() {
	$personCnt = undefined;
	$('.js_seatInfo').html('');
	if($screeningDate != undefined) {
		cssColor($screeningDate, '', '');
	}
	
	$screeningDate = $(this);
	var year = $('.js_calendarYear').text();
		month = $('.js_calendarMonth').text();
		date = $screeningDate.text().trim();
	screeningDate = year + '.' + month + '.' + date;
//	#ffd5e3
	if(movieTitle == undefined) {
		$('.js_screeningTimeViewer').text('영화를 선택해주세요.');
	} else {
		getMovieTicketingInfo();
	}
	cssColor($screeningDate, '#ffd5e3');
}
function nonTicketingDateClick() {
	$personCnt = undefined;
	$('.js_screeningTimeViewer').text('상영중인 영화 정보가 없습니다.');
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

function movieTimeClick() {
	if($movieTime != undefined) {
		cssColor($movieTime, '', '');
	}
	$movieTime = $(this);
	theater = $movieTime.attr('data-theater');
	
	cssColor($movieTime, '', 'lightcoral');
	
	var url = '/movie/mainService/seatInfo';
		params = {
				'screeningDate' : screeningDate,
		        'movieTitle' : movieTitle,
		        'movieTime' : $movieTime.text(),
		        'theater' : theater     
		};
		cbf = function(result) {
			$('.js_seatInfo').html(result);
		};
		
	$.post(url, params, cbf);
}

function ticketingPersonCntClick() {
	if($moviePrice == undefined) {
		var $moviePrice = $('.js_moviePrice');		
	} 
	if($personCnt != undefined) {
		cssColor($personCnt, '', '');
	}
	seatArr = [];

	cssColor($('.js_seatNum'), '', '');
	
	$personCnt = $(this);
	cssColor($personCnt, 'rosybrown', 'white');

	var price = $moviePrice.attr('data-price');
	$moviePrice.text(numberWithCommas(price * $personCnt.text()));
}

function seatNumberClick() {
	// 인원수 선택이 되지 않았다면
	if($personCnt == undefined) {
		alert('인원수를 선택해주세요.');
		return;
	}
	
	var $clickSeat = $(this);
	var clickSeatNum = $clickSeat.attr('data-seatNum');

	// 선택한 자리가 이미 선택한 자리라면
	if(seatArr.includes(clickSeatNum)) {
		seatArr.splice(seatArr.indexOf(clickSeatNum), 1);
		cssColor($clickSeat, '', '');
		console.log(seatArr);
		$('.js_letTicketingBtn').css({'visibility': 'hidden'});
		return;
	}
	
	// 이미 선택된 인원만큼 자리를 다 선택했다면
	if(seatArr.length < $personCnt.text()) {
		seatArr.push(clickSeatNum);
		cssColor($clickSeat, '#c74848', '#ffd6d6')
	} else {
		console.log(seatArr);
		alert('더이상 선택할 수 없습니다.');
	}
	
	if(seatArr.length == $personCnt.text()) {
		$('.js_letTicketingBtn').css({'visibility': 'visible'});
	}
}

function setEvent() {
	var $container = $('.js_ticketing');
	$container.on('click', '.js_calendarPrev', calendarPrevBtnClick)
			  .on('click', '.js_calendarNext', calendarNextBtnClick)
			  .on('click', '.js_movieTitleClick', movieTitleClick)
			  .on('click', '.js_ticketingDateClick', ticketingDateClick)
			  .on('click', '.js_nonTicketingDateClick', nonTicketingDateClick)
			  .on('click', '.js_movieTimeClick', movieTimeClick)
			  .on('click', '.js_ticketingPersonCnt', ticketingPersonCntClick)
			  .on('click', '.js_seatNum', seatNumberClick)
}

function cssColor(element, backgroundColor, color) {
	element.css({
		'background-color' : backgroundColor,
		'color' : color
	});
}

function init() {
	setEvent();
}

init();