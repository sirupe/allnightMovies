/***자주묻는게시판, 문의 사항 탭 ***/
function frequentlyBoardTab() {
	var url = '/movie/mainService/serviceCenterFreQuentlyBoard'
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
	var url = '/movie/mainService/questionBoard'
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
	url    = '/movie/mainService/serviceCentergetBoardCount'
	params = {'pageboard' : pageboard}
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


/******글보기*******/
function questionViewBoard() {
	
	var userClickPageNum = $(this).attr('data-questionBoardPageNum');
	
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


function activePwdInput() {
	if($(".js_boardCheck").is(":checked") == false) {
		$('.js_boardWriteBoardPwd').attr({'readonly' : true});
	} else {
		$('.js_boardWriteBoardPwd').attr({'readonly' : false});
		
	}
}

//문의사항 글등록하기
function insertQuestionBoard() {
	
	var isResult        = true;
		$insertTitle    = $('.js_boardContent');
	    $insertTextArea = $('.js_boardTextArea');
	    $insertboardPwd = $('.js_boardWriteBoardPwd');
	    
	    insertPwdcheck  = $(".js_boardCheck").is(":checked"); //비밀번호체크여부
	    insertTitle     = $('.js_boardContent').val(); 
	    insertTextArea  = $('.js_boardTextArea').val();
	    insertboardPWd  = $('.js_boardWriteBoardPwd').val(); //비

	    url    = '/movie/mainService/InsertAskWriteBoard';
	    params = {
	    		'insertPwdcheck' : insertPwdcheck,
	    		'insertTitle'    : insertTitle,
	    		'insertTextArea' : insertTextArea,
	    		'insertboardPWd' : insertboardPWd
	    };
		    cbf    = function(mav) {
	    			var $questionBoardViewchange = $('.js_frequentlyBoardContainer');
	    			$questionBoardViewchange.html(mav);
		    }
		  
	    //일단 기본적으로 비었을때
	    if(insertTitle == '' && insertTextArea == '') {
	    	alert('모두입력해주세요!');
	    	isResult = false;
	    }else if(insertPwdcheck == true && insertboardPWd == '') {
	    	alert('비밀번호 입력 해주세요');
	    	isResult = false;
	    } else {
	    	isResult = true;
	    	$.post(url, params, cbf);
	    }
}

//문의 사항 수정폼
function updateQuestionBoard() {
	userClickNum = $('.js_boardViewNo').attr('data-userClickNum');
	
		console.log(userClickNum);
	
	    url    = '/movie/mainService/updateWriteForm?'+ userClickNum;
	    params = {'questionBoardNum' : userClickNum};
	    cbf    = function(mav) {
	    	console.log(mav);
	    	var $questionBoardViewchange = $('.js_frequentlyBoardContainer');
			
			$questionBoardViewchange.html(mav);
	    };
	    $.post(url,params, cbf);
}

function activeRePwdInput() {
	if($(".js_UpdateboardCheck").is(":checked") == false) {
		$('.js_UpdateboardWriteBoardPwd').attr({'readonly' : true});
	} else {
		$('.js_UpdateboardWriteBoardPwd').attr({'readonly' : false});
		
	}
}


//완전한 수정
function completeUpdateQuestionBoard() {
	
	userClickNum = $('.js_boardViewNo').attr('data-userClickNum');
	
	console.log(userClickNum);
	var isResult        = true;
	 
		$insertTitle    = $('.js_UpdateboardContent'); //제목
	    $insertTextArea = $('.js_UpdateBoardTextArea'); //내용
	    $insertboardPwd = $('.js_UpdateboardWriteBoardPwd'); //비밀번호
	    
	    insertPwdcheck  = $(".js_UpdateboardCheck").is(":checked"); //비밀번호체크여부
	    insertTitle     = $('.js_UpdateboardContent').val(); 
	    insertTextArea  = $('.js_UpdateBoardTextArea').val();
	    insertboardPWd  = $('.js_UpdateboardWriteBoardPwd').val(); //비
	    
	    url    = '/movie/mainService/completeUPdateWriteBoard';
	    params = {
	    		'updateQuestionBoardNum' : userClickNum,
	    		'insertTitle'            : insertTitle,
	    		'insertTextArea'         : insertTextArea,
	    		'insertboardPWd'         : insertboardPWd,
	    		'insertPwdcheck'         : insertPwdcheck,		
	    	};
	    cbf    = function(mav) {
	    	if(isResult) {
	    		alert('글수정 성공');
	    		var $questionBoardViewchange = $('.js_frequentlyBoardContainer');
	    		$questionBoardViewchange.html(mav);
	    	} else {
	    		alert('실패');
	    	}
	    }
	    
	    if(insertTitle == '' && insertTextArea == '') {
	    	alert('모두입력해주세요!');
	    	isResult = false;
	    }else if(insertPwdcheck == true && insertboardPWd == '') {
	    	alert('비밀번호 입력 해주세요');
	    	isResult = false;
	    } else {
	    	isResult = true;
	    	$.post(url, params, cbf);
	    }
}

function deleteQuestionBoard() {
	userClickNum = $('.js_boardViewNo').attr('data-userClickNum');
	console.log(userClickNum);
	
	url     = '/movie/mainService/completeDeleteQuestionBoard';
	params  = {'updateQuestionBoardNum' : userClickNum};
	cbf     = function(mav) {
				alert('삭제 성공!');
				var $questionBoardViewchange = $('.js_frequentlyBoardContainer');
				$questionBoardViewchange.html(mav);
	}
		if(confirm('정말 삭제하시겠습니까?') == true) {
			$.post(url, params, cbf);
		} else {
			return;
		}
}

function recheckpwdQuestionForm() {
	
	var 
		$userInsertPwd      = $('.QuestionBoardReCheckPWd_input');
		userInsertPwd       = $('.QuestionBoardReCheckPWd_input').val(); //내가입력한 비밀번호
		
		userClickNum  = $('.js_QuestionReCheckPwdboardViewNo').attr('data-questionBoardPageNum');
		//게시글등록때 입력한 것

		url    =  '/movie/mainService/confirmPWdQuestionBoard';
		params = {
				'userInsertPwd'       : userInsertPwd,
				'questionBoardNum'    : userClickNum
			};
		cbf    = function(mav) {
			var $questionBoardViewchange = $('.js_frequentlyBoardContainer');
				$questionBoardViewchange.html(mav);
		};
		if(userInsertPwd == '') {
			alert('입력해주세요');
		} else {
			$.post(url, params, cbf);
		}
		
}

/************************시작***************************/
function setServiceCenter() {
	var $container     = $('.js_serviceCenter');
		$questionBoard = $('.js_js_questionBoardWriteContainer');
	
		//$container.on('click', '.js_content',serviceCenter);//고객센터안에있는 탭
		$container.on('click', '.js_frequentlyBoard', frequentlyBoardTab) //자주묻는게시판 탭이동
		          .on('click', '.js_QuestionBoard', questionBoardTab) // 문의사항게시판으로 탭이동
		          .on('click', '.js_sub', frequentlyBoard) // 자주묻는질문들
		          .on('click', '.js_pagingNumber' , serviceCenterButton) //페이징번호
		          .on('click', '.js_currentNumber', serviceCenterButton)
		          .on('click', '.js_nextButton',pagingNextButton) // 다음버튼
		          .on('click', '.js_preButton', pagingPreButton) //이전버튼
	
		
		/**문의사항게시판**/
		
				.on('click', '.js_currentQuestionPage', questionBoardPageNumber)  //현재번호
				.on('click', '.js_QuestionPagingNumber', questionBoardPageNumber) //페이지이동
				.on('click', '.js_questionPreButton', questionBoardPagePreNumber) //이전페이지이동
				.on('click', '.js_questionNextButton', questionBoardpageNextNumber) //다음페이지이동
				
				.on('click', '.js_QuestionWriteForm', questionWriteForm) // 글쓰기폼이동
				.on('click', '.js_questionBoard_title', questionViewBoard) //문의사항
				.on('click', '.js_QuestionList', questionBoardTab)
				
				.on('click', '.js_questionButtonConfirm', insertQuestionBoard) //글 등록하기
				.on('click', '.js_boardCheck',activePwdInput) //비밀글체크
				.on('click', '.js_QuestionWriteDeleteBtn', deleteQuestionBoard)//삭제하기
				.on('click', '.js_QuestionWriteUpdateBtn', updateQuestionBoard) //수정하는 폼으로
				.on('click', '.js_QuestionUpdateBtn',completeUpdateQuestionBoard) //수정하기
				.on('click', '.js_UpdateboardCheck', activeRePwdInput)
				.on('click', '.js_rePwdCheckQuestionForm', recheckpwdQuestionForm);
}

function initServiceCenter() {
	frequentlyBoardTab();
	setServiceCenter();
}
	
initServiceCenter();
