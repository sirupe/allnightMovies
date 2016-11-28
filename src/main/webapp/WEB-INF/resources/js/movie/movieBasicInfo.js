
function init() {
	setEvent();
}

init();

function setEvent() {
	var $container = $('.js_movieBasicInfoContainer');
	
	$container
		.on('click', '.js_tab_review', tabReview)
}

function tabReview() {
	var 
		url = '/movie/mainService/sortScore',  
		params = {'movieInfoTitle' : movieInfoTitle}
		cbf	= function(mav) {
				$('.js_currentFilmSort').html(mav);
			  }; 
			  
	$.post(url, cbf);
}





















$(document).ready(function() {
    $('.js_reviewText').on('keyup', function() {
        if($(this).val().length > 120) {
            $(this).val($(this).val().substring(0, 120));
            alert('글자수는 최대 120자입니다.');
        } 
    });
});



var starRating = function(){
  var $star = $(".star-input"),
      $result = $star.find("output>b");
  $(document)
    .on("focusin", ".star-input>.input", function(){
    $(this).addClass("focus");
  })
    .on("focusout", ".star-input>.input", function(){
    var $this = $(this);
    setTimeout(function(){
      if($this.find(":focus").length === 0){
        $this.removeClass("focus");
      }
    }, 100);
  })
    .on("change", ".star-input :radio", function(){
    $result.text($(this).next().text());
  })
    .on("mouseover", ".star-input label", function(){
    $result.text($(this).text());
  })
    .on("mouseleave", ".star-input>.input", function(){
    var $checked = $star.find(":checked");
    if($checked.length === 0){
      $result.text("0");
    } else {
      $result.text($checked.next().text());
    }
  });
};
starRating();











