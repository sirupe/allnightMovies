function init() {
	setEvent();
}

init();

function setEvent() {
	var $container = $('.js_managerMovieInfoContainer');
	
	$container
		.on('click', '.js_modifyCompleteBtn', modifyComplete)
		.on('click', '.js_modifyResetBtn', modifyReset)
		.on('keyup', '.js_basicInfoMovieTitle', checkLength)
		.on('keyup', '.js_basicInfoMovieGenre', checkLength)
		.on('keyup', '.js_basicInfoMovieTitle', checkLength)
		.on('keyup', '.js_basicInfoMovieDirector', checkLength)
		.on('keyup', '.js_basicInfoMovieAutohor', checkLength)
		.on('keyup', '.js_basicInfoMovieCast', checkLength)
		
}

function modifyComplete(e) {
	
	e.preventDefault();
	e.stopPropagation();
	
	var $movieTitle 	= $('.js_basicInfoMovieTitle'),
		$movieGenre 	= $('.js_basicInfoMovieGenre'),
		$movieDirector 	= $('.js_basicInfoMovieDirector'),
		$movieAuthor   	= $('.js_basicInfoMovieAuthor'),
		$movieCast 		= $('.js_basicInfoMovieCast'),
		$movieAge 		= $('.js_basicInfoMovieAge'), 
		$movieDate 		= $('.js_basicInfoDate'),
		$movieRuntime   = $('.js_basicInfoRuntime'),
		$movieIntro		= $('.js_basicInfoMovieIntro'),
		
		movieTitle 		 = $movieTitle.val(), 	
		movieGenre 		 = $movieGenre.val(), 	
		movieDirector 	 = $movieDirector.val(), 	
		movieAuthor 	 = $movieAuthor.val(), 	
		movieCast 		 = $movieCast.val(), 		
        movieAge 		 = $movieAge.val(),	
        movieReleaseDate = $movieDate.val(),
        movieRuntime     = $movieRuntime.val(),
		movieIntro       = $movieIntro.val();
	
	url	   = '/movie/async/asyncService/managerUpdateMovieInfo',
	params = {
				'managerMovieTitle' : movieTitle,
				'managerMovieGenre' : movieGenre,
				'managerMovieDirector' : movieDirector,
				'managerMovieAuthor' : movieAuthor,
				'managerMovieCast' : movieCast,
				'managerMovieAge' : movieAge,
				'managerMovieDate' : movieReleaseDate,
				'managerMovieRuntime' : movieRuntime
			  },
			  
	cbf	   = function(updateResult){
				location.href=updateResult.data;
				alert('수정 완료');
			};
			
	
	$.post(url, params, cbf);
}

function modifyReset() {
	var $movieTitle = $('.js_basicInfoMovieTitle'),
		movieTitle = $movieTitle.val();
		$this  = $('.'),
		data   = $this.data(),
		movieNO = data.noticePage,
	
		url	    = '/movie/mainService/movieDetailInfo?movieInfoTitle=' + movieTitle + "&movieNO=" + movieNO;

	submit(url);
}

function checkLength() {
	if ($(this).val().length > $(this).attr('maxlength')) {
        alert('제한길이 초과');
        $(this).val($(this).val().substr(0, $(this).attr('maxlength')));
    }
}
