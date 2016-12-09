/*function init() {
	setEvent();
}
init()

function setEvent() {
	var $container = $('.js_noticeBoard');
	
	$container
		.on('click', '.js_firstPageSearch', locationFirstPageSearch)
		.on('click', '.js_prePageSearch', locationPrePageSearch)
		.on('click', '.js_currentPageSearch', locationCurrentPageSearch)
		.on('click', '.js_nextPageSearch', locationNextPageSearch)
		.on('click', '.js_lastPageSearch', locationLastPageSearch)
		
}

*//*******************페이징*******************//*
처음PAGE
function locationFirstPageSearch() {
	var firstPageData = $('.js_firstPageSearch').attr('data-firstPage'),
	
		url	    = '/movie/mainService/searchNoticeBoardPage',
		params  = { 'noticePage' : firstPageData },
		cbf     = function(mav) {
					$('.js_noticeBoard').html(mav);
					setEvent();
				  };
				  
	$.post(url, params, cbf);
}

이전PAGE
function locationPrePageSearch() {
	var prePageData = $('.js_prePageSearchSearch').attr('data-prePage'),
	
		url	  		 = '/movie/mainService/searchNoticeBoardPage',
		params       = { 'noticePage' : prePageData },
		cbf   	     = function(mav){
						$('.js_noticeBoard').html(mav);
					   };
					   
	$.post(url, params, cbf);	
}
현재PAGE
function locationCurrentPageSearch() {
	var currentPage = $(this).attr('data-currentPage'),
		
		url	         = '/movie/mainService/searchNoticeBoardPage',
		params       = { 'noticePage' : currentPage },
		cbf   	     = function(mav){
						$('.js_noticeBoard').html(mav);
					   }
		$.post(url, params, cbf);
	
}
다음PAGE
function locationNextPageSearch() {
	var nextPageData = $('.js_nextPageSearch').attr('data-nextPage'),
	    
		url	         = '/movie/mainService/searchNoticeBoardPage',
		params       = { 'noticePage' : nextPageData },
		cbf   	     = function(mav){
						$('.js_noticeBoard').html(mav);
					   };
	$.post(url, params, cbf);
}
마지막PAGE
function locationLastPageSearch() {
	var lastPageData = $('.js_lastPageSearch').attr('data-lastPage'),
	
		url	  		 = '/movie/mainService/searchNoticeBoardPage',
		params       = { 'noticePage' : lastPageData },
		cbf   	     = function(mav){
						$('.js_noticeBoard').html(mav);
					   };
	$.post(url, params, cbf);
}
*/