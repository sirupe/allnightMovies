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
		
		
		console.log(question);
		console.log(asked);
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
alert('제라ㅏㄹ');	
}



function SetMagementServiceCenter() {
	var $container         = $('.js_serviceCenter');
		
					
	
	$container.on('click', '.js_btn',managementFreQuentlyUpdateBoard) //수정폼
			  .on('click','.js_button_FrequentlyInsertBtn', managementFreQuentlyWriteBoard) //자주묻는게시판->글등록폼으로가기
		      .on('click','.js_managementQuestionButtonConfirm',managementFreQuentlyInsertBoard)
		      

}


function initMagementServiceCenter() {
	SetMagementServiceCenter();
}


initMagementServiceCenter();