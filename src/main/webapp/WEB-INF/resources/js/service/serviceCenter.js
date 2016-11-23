//메뉴부분
function serviceCenter() {
			$('.div__serviceCenter_Content').hide();//모든 내용 숨겨라..
			$('ul.serviceCenter_Tab li:first').addClass('active').show(); // 첫번째탭 누르면 보여라
			$('.div__serviceCenter_Content:first').show(); // 첫번째 내용 보여라
			
			//클릭@ ..
			$("ul.serviceCenter_Tab li").click(function() {
				
				$('ul.serviceCenter_Tab li').removeClass('active');
				$(this).addClass('active');
				$(".div__serviceCenter_Content").hide();
				
				var activeTab = $(this).find('a').attr('href');
				$(activeTab).fadeIn();
				return false;
			});
	}


//자주묻는게시판--슬라이드

//제목을 누르면 실행
function frequentlyBoard() {
			$(this).parent().siblings('.on').toggleClass('on'); //재목(부모함수)를 누르면 그 class에 감싸있는 것을 on한다.
			$(this).parent().siblings().children('.serviceCenterFrequenty__contents').slideUp('fast'); //제목을 누르면 자식함수가 다시 올라온다
			$(this).parent().toggleClass('on'); //부모를 누르면 감싸있는 자식이 on된다.
			$(this).siblings('.serviceCenterFrequenty__contents').stop('true','true').slideToggle('fast');
}


function serviceCenterButton1() {
	var pageboard = $('.js_button1').text();
	console.log(pageboard);
	url    = '/movie/async/asyncService/pagingBoard';
	params = {
			'pageboard' : pageboard
		};
	cbf    = function(boardpagingResult) {
			console.log(boardpagingResult);
			
			$('.js_con').html(boardpagingResult);
			$('.js_sub').html(boardpagingResult);
	};
		$.post(url, params, cbf);
}


//function serviceCenterButton2() {
//	var freQuentlypage = $('.js_button2').text();
//	console.log(freQuentlypage);
//	url    = '/movie/mainService/serviceCenter';
//	params = {
//			'page' : freQuentlypage
//		};
//	cbf    = function(result) {
//		url='/movie/mainService/serviceCenter';
//	};
//		$.post(url, params, cbf);
//
//}

/************************시작***************************/
function setServiceCenter() {
	var $container = $('.js_serviceCenter');
	
		$container.on('click', '.js_frequently',serviceCenter);//고객센터안에있는 탭
		$container.on('click', '.js_sub', frequentlyBoard); // 자주묻는질문들
		$container.on('click', '.js_button1' , serviceCenterButton1);
}


function initServiceCenter() {
	$('.container__serviceCenterFrequenty_content .serviceCenterFrequenty__contents').css('display', 'none');
	setServiceCenter();
}
	
	
initServiceCenter();
