/***자주묻는게시판, 문의 사항 탭 ***/
function frequentlyBoardTab() {
	var url = '/movie/mainService/serviceCenterFreQuentlyBoard';
		cbf = function(result) {
			console.log(result);
			var $frequently   = $('.js_frequentlyBoardContainer');
				
				$frequently
					.html(result);
				$('.container__serviceCenterFrequenty_content .serviceCenterFrequenty__contents').css('display', 'none');
			
		};
	$.post(url, cbf);
}

function questionBoardTab() {
	var url = '/movie/mainService/questionBoard';
		cbf = function(result) {
			var $questionTab = $('.js_frequentlyBoardContainer');
				
			
			$questionTab
				.html(result);

		};
	$.post(url, cbf);
}
/*************************************자주묻는게시판*********************************************/

/***자주묻는게시판 슬라이드(제목누르면 실행)***/
function frequentlyBoard() {
			$(this).parent().siblings('.on').toggleClass('on'); //재목(부모함수)를 누르면 그 class에 감싸있는 것을 on한다.
			$(this).parent().siblings().children('.serviceCenterFrequenty__contents').slideUp('fast'); //제목을 누르면 자식함수가 다시 올라온다
			$(this).parent().toggleClass('on'); //부모를 누르면 감싸있는 자식이 on된다.
			$(this).siblings('.serviceCenterFrequenty__contents').stop('true','true').slideToggle('fast');
}

/***페이징 번호를 눌렀을때 다음으로 전환하는 메소드***/
function serviceCenterButton() {
	var pageboard = $(this).text();
	url    = '/movie/mainService/serviceCentergetBoardCount';
	params = {
			'pageboard' : pageboard
		};
	cbf    = function(result) {
			var $frequently = $('.js_serviceContentTab');
			
			$frequently
				.html(result);
			$('.container__serviceCenterFrequenty_content .serviceCenterFrequenty__contents').css('display', 'none');
	};
		$.post(url, params, cbf);
}

/***페이징처리 다음버튼 처리***/
function pagingNextButton() {
	var $userClickPageNum      = $('.js_nextButton');
		userClickPageNum       = $userClickPageNum.attr('data-nextpage');
		
	url    = '/movie/mainService/serviceCentergetBoardCount';
	params = {'pageboard' : userClickPageNum};
	cbf    = function(result) {
			var $frequently = $('.js_serviceContentTab');
			$frequently
				.html(result);
			$('.container__serviceCenterFrequenty_content .serviceCenterFrequenty__contents').css('display', 'none');
	};
		$.post(url, params, cbf);
}


/***페이징처리 이전버튼 처리***/
function pagingPreButton() {
	var $userClickPageNum = $('.js_preButton');
		userClickPageNum  = $userClickPageNum.attr('data-prepage');
		
	url    = '/movie/mainService/serviceCentergetBoardCount';
	params = {'pageboard' : userClickPageNum};
	cbf    = function(result) {
			var $frequently = $('.js_serviceContentTab');
			$frequently
				.html(result);
		$('.container__serviceCenterFrequenty_content .serviceCenterFrequenty__contents').css('display', 'none');
	};
	$.post(url, params, cbf);
}


/*********************************문의사항게시판*********************************************/


//현재 
function questionBoardPageNumber() {
	var questionBoard = $(this).text();
	
	url    = '/movie/mainService/serviceCenterQuestionBoardChange';
	params = {'questionBoard' : questionBoard};
	cbf    = function(result) {
				var $question = $('.js_questionBoardContainer');
				
				$question
				.html(result);
	};
		$.post(url, params, cbf);
}
	
//이전페이지
function questionBoardPagePreNumber() {
	var $userClickPageNum = $('.js_questionPreButton');
	userClickPageNum  = $userClickPageNum.attr('data-QuestionprePage');
	
		url    = '/movie/mainService/serviceCenterQuestionBoardChange';
		params = {'questionBoard' : userClickPageNum};
		cbf    = function(result) {
				console.log(result);
				var $question = $('.js_questionBoardContainer');
				$question
					.html(result);
		};
		$.post(url, params, cbf);
}
//다음페이지
function questionBoardpageNextNumber() {
	var $userClickPageNum = $('.js_questionNextButton');
	userClickPageNum  = $userClickPageNum.attr('data-QuestionnextPage');
	
	url    = '/movie/mainService/serviceCenterQuestionBoardChange';
	params = {'questionBoard' : userClickPageNum};
	cbf    = function(result) {
			console.log(result);
			var $question = $('.js_questionBoardContainer');
			$question
				.html(result)
				.show();
	};
		$.post(url, params, cbf);
	}

//이건뭐지.
//function questionWriteForm() {
//	var url  = '/movie/mainService/questionBoardWriteForm'
//		dir  = 'service'
//		page = 'include/AskWriteBoard'
//		js   = 'service/service/questionBoard'
//		css  = 'service/service/questionBoard'
//	
//	submit(url, dir, page, js, css);
//}

/******글보기*******/
function questionViewBoard() {
	var $userClickPageNum = $('.js_questionBoard_title');
		userClickPageNum  = $userClickPageNum.attr('data-questionBoardPageNum');
	
	
	var url    = '/movie/mainService/questionViewBoard';
		params = {'questionBoardNum' : userClickPageNum};
		cbf    = function(mav) {
			var $questionBoardViewchange = $('.js_frequentlyBoardContainer');
				$questionBoardViewchange.html(mav);
			
	};
		$.post(url, params, cbf);
}


//글등록페이지이동
function questionWriteForm() {
	var url    = '/movie/mainService/questionBoardWriteForm';
		cbf    = function(mav) {
			var $questionBoardViewchange = $('.js_frequentlyBoardContainer');
				$questionBoardViewchange.html(mav);
			
	};
		$.post(url, cbf);
}

//글등록하기
function insertQuestionBoard() {
	var $insertContent  = $('.js_boardContent');
	    $insertTextArea = $('.js_boardTextArea');
	    $insertboardPwd = $('.js_boardWriteBoardPwd');

	    insertPwdcheck  = $(".js_boardCheck").is(":checked");
	    insertContent   = $('.js_boardContent').val();
	    insertTextArea  = $('.js_boardTextArea').val();
	    insertboardPWd  = $('.js_boardWriteBoardPwd').val();
	    insertCheck     = $('.js_boardCheck').val(); //비밀글체크여부	
	    
	    console.log(insertContent);
	    console.log(insertTextArea);
	    console.log(insertboardPWd);
	    console.log(insertPwdcheck);
	
}

/************************시작***************************/
function setServiceCenter() {
	var $container     = $('.js_serviceCenter');
		$questionBoard = $('.js_js_questionBoardWriteContainer');
	
		//$container.on('click', '.js_content',serviceCenter);//고객센터안에있는 탭
		$container.on('click', '.js_frequentlyBoard', frequentlyBoardTab); //자주묻는게시판 탭이동
		$container.on('click', '.js_QuestionBoard', questionBoardTab); // 문의사항게시판으로 탭이동
		$container.on('click', '.js_sub', frequentlyBoard); // 자주묻는질문들
		$container.on('click', '.js_pagingNumber' , serviceCenterButton); //페이징번호
		$container.on('click', '.js_currentNumber', serviceCenterButton);
		$container.on('click', '.js_nextButton',pagingNextButton); // 다음버튼
		$container.on('click', '.js_preButton', pagingPreButton); //이전버튼
	
		
		/**문의사항게시판**/
		
		$container.on('click', '.js_currentQuestionPage', questionBoardPageNumber);  //현재번호
		$container.on('click', '.js_QuestionPagingNumber', questionBoardPageNumber); //페이지이동
		$container.on('click', '.js_questionPreButton', questionBoardPagePreNumber); //이전페이지이동
		$container.on('click', '.js_questionNextButton', questionBoardpageNextNumber); //다음페이지이동
		
		$container.on('click', '.js_QuestionWriteForm', questionWriteForm); // 글쓰기폼이동
		$container.on('click', '.js_questionBoard_title', questionViewBoard); //문의사항
		$container.on('click', '.js_QuestionList',questionBoardTab);
		
		$container.on('click' ,'.js_questionButtonConfirm',insertQuestionBoard); //글 등록하기
}

function initServiceCenter() {
	frequentlyBoardTab();
	//$('.js_serviceContentTab2').hide();//문의사항내용 숨기기
	setServiceCenter();
}
	
initServiceCenter();
