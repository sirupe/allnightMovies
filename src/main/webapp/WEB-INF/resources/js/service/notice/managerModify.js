function init() {
	console.log('init()');
	setEvent();
}
init();

function setEvent() {
	console.log('setEvent()');

	$('.js_noticeBoardViewContainer')
		.on('click', '.js_deleteBtn', deleteNotice)
		.on('click', '.js_updateBtn', locationUpdateForm)
		.on('click', '.js_updateCompleteBtn', updateNotice)
		.on('click', '.js_noticeBoardBtn', locationNoticeBoard )
		
}
function deleteNotice() {
	var $this  = $('.js_noticeBoardBtn'),
		data   = $this.data(),
		noticePage = data.noticePage,
		noticeNo = data.noticeNo,
		
		url	   = '/movie/async/asyncService/managerDeleteNotice ',
		params = {
					'managerNoticePage' : noticePage,
					'managerNoticeNo' : noticeNo
				  },
		cbf	   = function(deleteResult){
					location.href=deleteResult.data;
					alert('삭제 완료되었습니다.');
				};

		$.post(url, params, cbf);
		
}

function locationUpdateForm() {
	var $this  = $('.js_noticeBoardBtn'),
		data   = $this.data(),
		noticePage = data.noticePage,
		noticeNo = data.noticeNo,
		
		url	    = '/movie/mainService/managerUpdateNoticeForm',
		dir    = 'service/notice/manager',				 	  
		page   = 'updateNotice',			  
		js     = 'service/notice/managerNotice',   	  
		css    = 'service/notice/managerModify';
	
	submit(url, dir, page, js, css);
}

function updateNotice() {
	var $this  = $('.js_noticeBoardBtn'),
		data   = $this.data(),
		noticePage = data.noticePage,
		noticeNo = data.noticeNo,
		$contentsTextArea = $('.js_contentsTextArea'),
		$noticeTitle = $('.js_noticeTitle'),
	    managerNoticeImportant = $('.js_managerNoticeImportant').is(':checked');
	
		if($contentsTextArea.val() == '') {
			alert('내용을 입력해주세요.');
		} else if($noticeTitle.val() == '') {
			alert('제목을 입력해주세요.');
		} else {
			url	   = '/movie/async/asyncService/managerUpdatetNotice ',
			params = {
							'managerNoticeTitle' : $noticeTitle.val(),
							'managerNoticeContents' : $contentsTextArea.val(),
							'managerNoticeImportant' : managerNoticeImportant,
							'managerNoticePage' : noticePage,
							'managerNoticeNo' : noticeNo
					 },
			cbf	   = function(insertResult){
						location.href=insertResult.data;
						alert('수정 완료되었습니다.');
					};
			
			$.post(url, params, cbf);
		}
}

function locationNoticeBoard() {
	var $this  = $('.js_noticeBoardBtn'),
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
