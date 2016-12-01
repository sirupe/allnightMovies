var status;
function init() {
	if(status == 1) {
		status = 0;
		return false;
	}
	status = 1;
	setEvent();
}
init();

function setEvent() {
	var $container = $('.js_movieInsertContainer');
	
	$container
		.on('click', '.js_movieInsertBtn', checkNull)
		.on('keyup', '.js_movieInsertTitle', checkLength)
		.on('keyup', '.js_movieInsertGenre', checkLength)
		.on('keyup', '.js_movieInsertDirector', checkLength)
		.on('keyup', '.js_movieInsertAutohor', checkLength)
		.on('keyup', '.js_movieInsertCast', checkLength)
		
		
}

function checkNull() {
	var $title    = $('.js_movieInsertTitle'),
		$genre    = $('.js_movieInsertGenre'),
		$director = $('.js_movieInsertDirector'),
		$author   = $('.js_movieInsertAutohor'),
		$cast     = $('.js_movieInsertCast'),
		$runTime  = $('.js_movieInsertRuntime'),
		$date     = $('.js_movieInsertDate'),
		$intro    = $('.js_movieInsertIntro'),
		$poster   = $('.main_fileupload'),
		
		title     = $title.val(),
		genre     = $genre.val(),    
		director  = $director.val(),
		author    = $author.val(),
		cast      = $cast.val(),
		runtime   = $runTime.val(),
		date      = $date.val(),
		intro     = $intro.val(),
		poster    = $poster.val();
		
		if(title != '' && genre != '' && director != '' && author != '' && cast != '' &&
				runtime != '' && date != '' && intro != '' && poster != '') {
			
			var url = '/movie/file';
				$('form').attr({'enctype' : 'multipart/form-data'});
				
				submit(url);
			alert('등록완료');
			
		} else {
			alert('필수 입력사항들을 확인해주세요');
			return false;
		}
}

function checkLength() {
	if ($(this).val().length > $(this).attr('maxlength')) {
        alert('제한길이 초과');
        $(this).val($(this).val().substr(0, $(this).attr('maxlength')));
    }
	
}