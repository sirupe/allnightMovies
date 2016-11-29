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
	url    = '/movie/mainService/serviceCenterFreQuentlyBoard'
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
		
	url    = '/movie/mainService/serviceCenterFreQuentlyBoard';
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
		
	url    = '/movie/mainService/serviceCenterFreQuentlyBoard';
	params = {'pageboard' : userClickPageNum};
	cbf    = function(result) {
			var $frequently = $('.js_serviceContentTab');
			$frequently
				.html(result);
				$('.container__serviceCenterFrequenty_content .serviceCenterFrequenty__contents')
					.css('display', 'none');
		};
	$.post(url, params, cbf);
}


/*******************자주묻는게시판 다음 페이지********************/

//자주묻는게시판 검색(처음페이지)
function searchQuestionBoard() {
	var $userSearchInput = $('.js_searchCenter_input');
		userSearchInput  = $('.js_searchCenter_input').val();
		
		console.log(userSearchInput);
		
	url     = '/movie/mainService/getUserSearchList',
	params  = {'serviceCenterSearchWord' : userSearchInput},
			
	cbf     = function(mav) {
				$('.js_frequentlyBoardContainer').html(mav);
				
				$('.container__serviceCenterFrequenty_content .serviceCenterFrequenty__contents')
					.css('display', 'none');
			};
		$.post(url, params, cbf);	
}

//자주묻는 게시판 검색 이전 페이지
function searchPrePageBoard() {
	var preSearchPage = $('.js_preButtonSearch').attr('data-prepage');
	
	url     = '/movie/mainService/getUserSearhPage',
	params  = {'pageboard' : preSearchPage,
				'serviceCenterSearchWord' : userSearchInput},
	cbf     = function(mav) {
				$('.js_frequentlyBoardContainer').html(mav);
				$('.container__serviceCenterFrequenty_content .serviceCenterFrequenty__contents')
					.css('display', 'none');
			};
	$.post(url, params, cbf);	
}


//검색 다음 게시판
function searchNextPageBoard() {
	var nextSearchPage = $('.js_nextButtonSearch').attr('data-nextpage');
	$userSearchInput = $('.js_searchCenter_input');
	userSearchInput  = $('.js_searchCenter_input').val();
	
	url     = '/movie/mainService/getUserSearhPage',
	params  = {'pageboard' : nextSearchPage,
			   'serviceCenterSearchWord' : userSearchInput},
	
	cbf     = function(mav) {
				$('.js_frequentlyBoardContainer').html(mav);
				$('.container__serviceCenterFrequenty_content .serviceCenterFrequenty__contents')
					.css('display', 'none');
			};
	$.post(url, params, cbf);	
}

//현재페이지
function searchCurrentPageBoard() {
	var CurrentSearchPage = $(this).attr('data-currentPage');
		PageNum           = $(this).attr('data-PageNum');
	console.log(CurrentSearchPage);

	url     = '/movie/mainService/getUserSearhPage',
	params  = {'pageboard' : CurrentSearchPage,
				'serviceCenterSearchWord' : userSearchInput},
	cbf     = function(mav) {
				$('.js_frequentlyBoardContainer').html(mav);
				$('.container__serviceCenterFrequenty_content .serviceCenterFrequenty__contents')
					.css('display', 'none');
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
	
	var
		$insertTitle    = $('.js_boardContent');
	    $insertTextArea = $('.js_boardTextArea');
	    $insertboardPwd = $('.js_boardWriteBoardPwd');
	    
	    insertPwdcheck  = $(".js_boardCheck").is(':checked'); //비밀번호체크여부
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
		    };
		  
	    //일단 기본적으로 비었을때
	    if(insertTitle == '' && insertTextArea == '') {
	    	alert('모두입력해주세요!');
	    }else if(insertPwdcheck == true && insertboardPWd == '') {
	    	alert('비밀번호 입력 해주세요');
	    } else {
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
	var isResult         = true;
	 
		$insertTitle     =  $('.js_UpdateboardContent'); //제목
	    $insertTextArea  = $('.js_UpdateBoardTextArea'); //내용
	    $insertboardPwd  = $('.js_UpdateboardWriteBoardPwd'); //비밀번호
	    $insertUser_id  = $('.js_UpdateboardUserId');
	    $insertWriteDate = $('.js_UpdateboardWriteDate');
	    
	    
	    
	    insertPwdcheck  = $(".js_UpdateboardCheck").is(":checked"); //비밀번호체크여부
	    insertTitle     = $('.js_UpdateboardContent').val(); 
	    insertTextArea  = $('.js_UpdateBoardTextArea').val();
	    insertboardPWd  = $('.js_UpdateboardWriteBoardPwd').val(); //비
	    insertUser_id  = $('.js_UpdateboardUserId').val();
	    insertWriteDate = $('.js_UpdateboardWriteDate').val();

	    url    = '/movie/mainService/completeUPdateWriteBoard';
	    params = {
	    		'updateQuestionBoardNum' : userClickNum,
	    		'insertTitle'            : insertTitle,
	    		'insertTextArea'         : insertTextArea,
	    		'insertboardPWd'         : insertboardPWd,
	    		'insertPwdcheck'         : insertPwdcheck	
	    		//'insertUser_id'          : insertUser_id,
	    		//'insertWriteDate'        : insertWriteDate
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
		}
		else {
			$.post(url, params, cbf);
		}
		
}

/****************************관리자 페이지********************************************/
//자주묻는게시판 글등록폼
function managementFreQuentlyWriteBoard() {
	
	url    = '/movie/mainService/managementServiceCenterWriteForm',
	cbf    = function(mav) {
			 $('.js_frequentlyBoardContainer').html(mav);
	};
	$.post(url, cbf);
}

//관리자 글등록

function managementFreQuentlyInsertBoard() {
	var 
		$question    = $('.js_managementQuestionContent');
		$asked       = $('.js_managementQuestionButton_confirmTextArea');
		
		question     = $('.js_managementQuestionContent').val();
		asked		 = $('.js_managementQuestionButton_confirmTextArea').val();
		
		url    = '/movie/mainService/managementWriteBoard';
		params = {'question' : question,
				  'asked'     : asked},
		cbf    = function(mav) {
			$('.js_frequentlyBoardContainer').html(mav);
				
		};
		
		if(asked == '' && question =='') {
			alert('모두입력해주세요');
		} else {
			$.post(url, params, cbf)
		}
}

//수정하는 폼으로 가기
function managementFreQuentlyUpdateBoard() {
		var no      = $(this).attr('data-message');
	
		console.log(no);
		
	url    = '/movie/mainService/managementUpdateBoard',
	params = { 'no' : no},
	cbf    = function(mav) {
			 $('.js_frequentlyBoardContainer').html(mav);
	};
	$.post(url, params, cbf);
}
//수정완료
function managementFreQuentlyUpdateComplete() {
	
	var isResult  = false;
		$question = $('.js_managementQuestionUpdateContent');
		$asked    = $('.js_managementQuestionUpdateButton_confirmTextArea');
		
		question  = $('.js_managementQuestionUpdateContent').val();
		asked     = $('.js_managementQuestionUpdateButton_confirmTextArea').val();
		no		  = $(this).attr('data-updateFormNum');
		
		console.log(question);
		console.log(asked);
		console.log(no);
		
		url    = '/movie/mainService/managementUpdateBoardComplete',
		params = {'question' : question,
				  'asked'    : asked,
				  'no'        : no},
		cbf    = function(mav) {
			if(isResult) {
				alert("수정완료");
				$('.js_frequentlyBoardContainer').html(mav);
			} else {
				alert('다시확인 바랍니다.');
			}
		};
		if(question == '' && asked == '') {
			alert('모두입력해주세요');
			isResult = false;
		} else {  
			isResult = true;
			$.post(url, params, cbf);
		}
}

//function managementFreQuentlyDeleteComplete() {
//	var no = $(this).attr('data-updateFormNum');
//	
//	url		= '/movie/mainService/managementDeleteBoardComplete',
//	params	= {'no' : no},
//	cnf		= function(mav) {
//				$('.js_frequentlyBoardContainer').html(mav);
//			};
//			if(confirm('정말 삭제하시겠습니까?') == true) {
//				$.post(url, params, cbf);
//			} else {
//				return;
//			}
//}

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
				.on('click', '.js_QuestionList', questionBoardTab) //목록으로
				.on('click', '.js_questionButtonCancel',questionBoardTab) //목록으로(취소)
				.on('click', '.js_QuestionUpdateForm', questionBoardTab) //
				.on('click', '.js_serviceCenter_button',searchQuestionBoard) //검색버튼
				.on('click', '.js_preButtonSearch',searchPrePageBoard)
				.on('click', '.js_nextButtonSearch' ,searchNextPageBoard)
				.on('click', '.js_pagingNumberSearch',searchCurrentPageBoard)
				.on('click', '.js_currentNumberSearch',searchCurrentPageBoard)
				
				.on('click', '.js_questionButtonConfirm', insertQuestionBoard) //글 등록하기
				.on('click', '.js_boardCheck',activePwdInput) //비밀글체크
				.on('click', '.js_QuestionWriteDeleteBtn', deleteQuestionBoard)//삭제하기
				.on('click', '.js_QuestionWriteUpdateBtn', updateQuestionBoard) //수정하는 폼으로
				.on('click', '.js_QuestionUpdateBtn',completeUpdateQuestionBoard) //수정하기
				.on('click', '.js_UpdateboardCheck', activeRePwdInput) //비밀글 체크됬는지안됬는지여부
				.on('click', '.js_rePwdCheckQuestionForm', recheckpwdQuestionForm) //비밀글 체크됬는지안됬는지여부
		
		
		/**************************************관리자 등록(*******************************************/
		
		.on('click','.js_button_FrequentlyInsertBtn', managementFreQuentlyWriteBoard) //자주묻는게시판->글등록폼으로가기
		.on('click','.js_managementQuestionButtonConfirm',managementFreQuentlyInsertBoard) //글등록
		.on('click','.js_managementQuestionButtonCancel',frequentlyBoardTab)//글등록폼에서 취소버튼
		.on('click', '.js_Updatebtn',managementFreQuentlyUpdateBoard) //수정폼으로가기
		.on('click', '.js_managementQuestionUpdateButtonConfirm',managementFreQuentlyUpdateComplete)
		//.on('.click', '.js_Deletebtn',managementFreQuentlyDeleteComplete)
		
		
}

function initServiceCenter() {
	frequentlyBoardTab();
	setServiceCenter();
	
}
	
initServiceCenter();
