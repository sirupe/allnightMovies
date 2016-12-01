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
		.on('click', '.js_movieInsertBtn', movieInsert)
		.on('keyup', '.js_movieInsertTitle', checkLength)
		.on('keyup', '.js_movieInsertGenre', checkLength)
		.on('keyup', '.js_movieInsertDirector', checkLength)
		.on('keyup', '.js_movieInsertAutohor', checkLength)
		.on('keyup', '.js_movieInsertCast', checkLength)
		
}

function movieInsert() {
	var $movieTitle    = $('.js_movieInsertTitle'),
		$movieGenre    = $('.js_movieInsertGenre'),
		$movieDirector = $('.js_movieInsertDirector'),
		$movieAutohor  = $('.js_movieInsertAutohor'),
		$movieCast     = $('.js_movieInsertCast'),
		$movieDate     = $('.js_movieInsertDate'),
		$movieIntro    = $('.js_movieInsertIntro'),
		
		movieTitle 	   = $movieTitle.val(),
		movieGenre 	   = $movieGenre.val(),
	    movieDirector  = $movieDirector.val(),
        movieAutohor   = $$movieAutohor.val(),
        movieCast 	   = $movieCast.val(),
        movieDate 	   = $movieDate.val(),
        movieIntro     = $movieIntro.val();
	
	url = '',
	params = {
				'' : movieTitle,
				'' : movieGenre,
				'' : movieDirector,
				'' : movieAutohor,
				'' : movieCast,
				'' : movieDate,
				'' : movieIntro
			},
	cbf = function(mav) {
			
			
		  }
	
	
        
        
}