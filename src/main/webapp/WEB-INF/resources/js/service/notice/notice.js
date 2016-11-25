function init() {
	setEvent();
}
init()

function setEvent() {
	var $container = $('.js_noticeContainer'),
		$Boardcontainer = $('.js_noticeBoardViewContainer');
		
	$container
		.on('click', '.js_firstPage', locationFirstPage)
		.on('click', '.js_prePage', locationPrePage)
		.on('click', '.js_currentPage', locationCurrentPage)
		.on('click', '.js_nextPage', locationNextPage)
		.on('click', '.js_lastPage', locationLastPage)
		.on('click', '.js_searchBtn', searchBoard)
		
	$Boardcontainer
		.on('click', '.js_noticeBoardBtn', locationNoticeBoard)
}
/*공지사항 검색*/
function searchBoard() {
	var $searchWord = $('.js_searchInput'),
		searchWord = $searchWord.val();

	if(searchWord.length < 2) {
		alert('검색어는 두글자 이상 입력하십시오.');
	} else {
		url	   = '/movie/mainService/searchNoticeBoard',
		params = {'noticeSearachWord' : searchWord},
		cbf	   = function(mav){
					$('.js_noticeBoard').html(mav);
	   			 };
	   	$.post(url, params, cbf);	
	}
}

/*목록으로*/
function locationNoticeBoard(e) {
	var $this  = $(this),
		data   = $this.data(),
		noticePage = data.noticePage,
		noticeNo = data.noticeNo,
		url	   = '/movie/mainService/locationNoticeBoard?noticePage=' + noticePage + '&noticeNo=' + noticeNo,
		
		dir    = 'service',				 	  
		page   = 'notice/notice',			  
		js     = 'service/notice/notice',   	  
		css    = 'service/notice/notice';	
	
	submit(url, dir, page, js, css);
	
	e.preventDefault();
	
}

/*******************페이징*******************/
/*처음PAGE*/
function locationFirstPage() {
	var firstPageData = $('.js_firstPage').attr('data-firstPage'),
	
		url	    = '/movie/mainService/noticeBoard',
		params  = { 'noticeUserClickPage' : firstPageData },
		cbf     = function(mav) {
					$('.js_noticeBoard').html(mav);
				  };
				  
	$.post(url, params, cbf);
}
/*이전PAGE*/
function locationPrePage() {
	var prePageData = $('.js_prePage').attr('data-prePage'),
	
		url	  		 = '/movie/mainService/noticeBoard',
		params       = { 'noticeUserClickPage' : prePageData },
		cbf   	     = function(mav){
						$('.js_noticeBoard').html(mav);
					   };
					   
	$.post(url, params, cbf);	
}
/*현재PAGE*/
function locationCurrentPage() {
	var currentPage = $(this).attr('data-currentPage'),
		
		url	         = '/movie/mainService/noticeBoard',
		params       = { 'noticeUserClickPage' : currentPage },
		cbf   	     = function(mav){
						$('.js_noticeBoard').html(mav);
					   }
		$.post(url, params, cbf);
	
}
/*다음PAGE*/
function locationNextPage() {
	var nextPageData = $('.js_nextPage').attr('data-nextPage'),
	    
		url	         = '/movie/mainService/noticeBoard',
		params       = { 'noticeUserClickPage' : nextPageData },
		cbf   	     = function(mav){
						$('.js_noticeBoard').html(mav);
					   };
	$.post(url, params, cbf);
}
/*마지막PAGE*/
function locationLastPage() {
	var lastPageData = $('.js_lastPage').attr('data-lastPage'),
	
		url	  		 = '/movie/mainService/noticeBoard',
		params       = { 'noticeUserClickPage' : lastPageData },
		cbf   	     = function(mav){
						$('.js_noticeBoard').html(mav);
					   };
	$.post(url, params, cbf);
}
