function init() {
	setEvent();
}
init()

function setEvent() {
	var $container = $('.js_noticeContainer');
		$noticeBoard   = $('.js_noticeBoard');
		
	$container
		.on('click','.js_firstPage', locationFirstPage)
		.on('click','.js_prePage', locationPrePage)
		.on('click','.js_currentPage', locationCurrentPage)
		.on('click','.js_nextPage', locationNextPage)
		.on('click','.js_lastPage', locationLastPage)
		.on('click', '.js_noticeView', noticeBoardView)
}

/*공지사항 보기*/
function noticeBoardView() {
	var url	    = '/movie/mainService/noticeBoardView';
		dir    = 'service';				 	  
		page   = 'notice/noticeBoardView';			  
		js     = 'service/notice/noticeBoard';   	  
		css    = 'service/notice/noticeBoard';	
	submit(url, dir, page, js, css);
}

/*******************페이징*******************/
/*처음PAGE*/
function locationFirstPage() {
	var firstPageData = $('.js_firstPage').attr('data-firstPage');
	
		url	    = '/movie/mainService/noticeBoard';
		params  = { 'noticeUserClickPage' : firstPageData } 
		cbf     = function(mav) {
					$noticeBoard.html(mav);
				  } 
	$.post(url, params, cbf);
}
/*이전PAGE*/
function locationPrePage() {
	var prePageData = $('.js_prePage').attr('data-prePage');
	
		url	  		 = '/movie/mainService/noticeBoard';
		params       = { 'noticeUserClickPage' : prePageData } 
		cbf   	     = function(mav){
					   		$noticeBoard.html(mav);
					   } 
	$.post(url, params, cbf);	
}
/*현재PAGE*/
function locationCurrentPage() {
	var currentPage = $(this).attr('data-currentPage');
		
	console.log(currentPage);
		url	         = '/movie/mainService/noticeBoard'; 
		params       = { 'noticeUserClickPage' : currentPage }
		cbf   	     = function(mav){
	   						$noticeBoard.html(mav);
					   }
		$.post(url, params, cbf);
	
}
/*다음PAGE*/
function locationNextPage() {
	var nextPageData = $('.js_nextPage').attr('data-nextPage');
	    
		url	         = '/movie/mainService/noticeBoard'; 
		params       = { 'noticeUserClickPage' : nextPageData }
		cbf   	     = function(mav){
	   						$noticeBoard.html(mav);
					   }
	$.post(url, params, cbf);
}
/*마지막PAGE*/
function locationLastPage() {
	var lastPageData = $('.js_lastPage').attr('data-lastPage');
	
		url	  		 = '/movie/mainService/noticeBoard';
		params       = { 'noticeUserClickPage' : lastPageData } 
		cbf   	     = function(mav){
					   		$noticeBoard.html(mav);
					   } 
	$.post(url, params, cbf);
}
