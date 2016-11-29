function init() {
	setEvent();
}
init()

function setEvent() {
	var $container = $('.js_noticeContainer');
		
	$container
		.on('click', '.js_insertNoticeBtn', locationInsertNoticeBtn)
}
function locationInsertNoticeBtn() {
	var url    = '/movie/mainService/locationInsertNotice', 
		dir    = 'service',
		page   = 'notice/manager/insertNotice',		  
		js     = 'notice/managerNotice',
		css    = 'notice/managerNotice';	 	
	
	submit(url, dir, page, js, css);
}