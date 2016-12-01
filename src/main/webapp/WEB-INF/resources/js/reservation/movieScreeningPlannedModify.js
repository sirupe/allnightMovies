initScreeningPlannedMod();

function initScreeningPlannedMod() {
	setEventsMod();
}

function setEventsMod() {
	var $container = $('.js_screeningPlannedModContainer');
	$container
		.on('click', '.js_addBtn', compAdd)
		.on('click', '.js_screeningSubmitBtn', screeningSubmitBtnClick)
}
function compAdd() {
	var $list = $('.js_addListUl');
	$list.append('<li>' + $('.js_modifyCompDiv').html() + '</li>');	
}

function screeningSubmitBtnClick() {
	var $selectTheater = $('.js_selectTheater'),
		$selectMovieTitle = $('.js_selectMovieTitle'),
		$selectDate = $('.js_selectDate'),
		$selectTime = $('.js_selectTime');
	
	var movieTheater='', movieTitle='', dateTime='', price='';
	
	for(var i = 0, size = $selectTheater.length; i < size; i++) {
		movieTheater += $selectTheater[i].value + '#';
		movieTitle += $selectMovieTitle[i].value + '#';
		
		var t = $selectTime[i].value.split(':')[0];
		price += (t > 6 &&  t < 10 ? 7000 : 10000) + '#';
		dateTime += $selectDate[i].value.replaceAll('-', '.') + ' ' + $selectTime[i].value + '#';
	}
	
	
	var url = '/movie/async/asyncService/screeningPlannedUpdate',
		params = {
			'theaters' : movieTheater,
			'movieTitles' : movieTitle,
			'dateTimes' : dateTime,
			'prices' : price
		},
		cbf = function(result) {
			if(result.success) {
				locationMenus('POST','/movie/mainService/showtimes','reservation','showtimes' );
			} else {
				alert('중복되는 시간이 있습니다. 다시 입력해주세요.');
			}
		}
	$.post(url, params, cbf);
}

String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}