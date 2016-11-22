function init() {
	setEvent();
}
init();

function setEvent() {
	var $container = $('.js_emailChangeContainer');
	
	$container
		.on('click', '.js_emailChangeSubmitBtn', chageEmailAddr)         //myInfoChangeEmail
		.on('click', '.js_emailChangeMyinfoBtn', locationMyinfo)         //myInfoChangeEmail
		.on('click', '.js_emailConfirmNumInputBtn', sendEmailConfirmNum) //myInfoChangeEmail
		.on('keyup', '.js_emailChangeEmailInput', validationEmail)		 //myInfoChangeEmail
		.on('click', '.js_emailChangeMainBtn', locationMain)			 //myInfoChangeEmailResult
}

/*내정보보기*/
function locationMyinfo() {
	var url    = '/movie/mainService/viewMyInfo';
		dir    = 'myInfo';                                
		page   = 'myInfo';                                
		js     = 'myInfo/myInfo';                         
		css    = 'myInfo/myInfo';  
	
	submit(url, dir, page, js, css);
}

/*이메일인증번호 발송 Button */
function sendEmailConfirmNum(e) {
	var $confirmNum     = $('.js_emailConfirmNumInput');
	 	$confirmNumText = $('.js_emailConfirmNumText');
	 	$confirmButton  = $('.js_emailConfirmNumInputBtn');
		isSendConfirmNum = true;
	
	$.post(
		'/movie/async/asyncService/sendEmailConfirmNum',
		function(sendEmailResult) {
			if(sendEmailResult.data == 'true'){
				//ATTR(태그속성값)
				$confirmNum.removeAttr('readonly');
				$confirmNum.attr({'placeholder' : '인증번호 입력'});
				$confirmNum.css('background-color', 'white');
				$confirmButton.attr({'class' : 'button-myInfoChangeEmail__sendmail'});
				$confirmButton.css('background-color', '#565656');
				$confirmButton.css('cursor','default');
				$confirmNumText.html('회원가입시 입력하신 이메일주소로 인증번호가 발송되었습니다.');
			} 
		}
	)
	
	e.preventDefault();
	e.stopPropagation();
	return isSendConfirmNum;
}

/*변경버튼 클릭*/
function chageEmailAddr() {
   var $confirmNum = $('.js_emailConfirmNumInput'),
       $EmailAddr  = $('.js_emailChangeEmailInput'),
       confirmNum  = $confirmNum.val(),
       EmailAddr   = $EmailAddr.val();
   
   	   url	  = '/movie/async/asyncService/updateEmailAddr';
   	   params = {
   			   			'myInfoEmailConfirmNum' : confirmNum ,
   			   			'myInfoChageEmail' : EmailAddr
        		 };
   	   cbf	  = function(chageEmailResult) {
		            if(chageEmailResult.data == 'false'){
		               alert('인증번호를 다시 확인해주세요.');
		            } else {
		               location.href=chageEmailResult.data;
		            }
		         };	
			   
	   if(confirmNum != '' && validationEmail()) {
		   $.post(url, params, cbf);
	   } else {
	      alert('필수입력사항들을 확인해주세요.');
	   }
}

/*이메일 정합성 검사 */
function validationEmail() {
	var $changeEmail 	 = $('.js_emailChangeEmailInput'),
		$changeEmailText = $('.js_emailChangeEmailText'),
		isCheck 		 = true,
		resultMsg 		 = '<label style="color:green;">사용 가능합니다.</label>',
		email 			 = $changeEmail.val();
	
	if(!emailRegexCheck(email)) {
		isCheck = false;
		resultMsg = '<label style="color:red;">이메일 주소를 정확히 입력해주세요.</label>';
	}
	
	$changeEmailText.html(resultMsg);
	return isCheck;
}
