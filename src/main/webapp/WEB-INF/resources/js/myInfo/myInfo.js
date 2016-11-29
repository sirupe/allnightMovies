function init() {
	setEvent();
	$('.js_myInfoTitle').css({'background-color' : '#CA9381'});
}

init();

function setEvent() {
	var $container = $('.js_myInfoContainer');
	$container
		.on('click', '.js_myInfo_changeEmailBtn', changeEmailInfoForm)
		.on('click', '.js_myInfo_changePwdBtn', changePwdInfoForm)
		.on('click', '.js_myInfo_withdrawBtn', withdrawForm)
		.on('click', '.js_myInfoTitleClick', myInfoTitleClick)
		.on('click', '.js_reserveInfoTitleClick', reserveInfoTitleClick)

		$('.js_myInfoTitle').css({'background-color' : '#CA9381'});
}

function changeEmailInfoForm() {
	var url    = '/movie/mainService/getTemplate';
		dir    = 'myInfo';				 	  
		page   = 'myInfoChangeEmail';			  
		js     = 'myInfo/changeEmail';   	  
		css    = 'myInfo/changeEmail';	
		
	submit(url, dir, page, js, css);   
}

function changePwdInfoForm() {
	var url    = '/movie/mainService/getTemplate';
		dir    = 'myInfo';				 	  
		page   = 'myInfoChangePwd';			  
		js     = 'myInfo/changePwd';   	  
		css    = 'myInfo/changePwd';	
	
		submit(url, dir, page, js, css);  
}

function withdrawForm() {
	var url    = '/movie/mainService/getTemplate';
		dir    = 'myInfo';				 	  
		page   = 'withdraw';			  
		js     = 'myInfo/withdraw';   	  
		css    = 'myInfo/withdraw';	

	submit(url, dir, page, js, css);  	
}

function myInfoTitleClick() {
	$(this).css({'background-color' : '#CA9381'});
	$('.js_reserveInfoTitleClick').css({'background-color' : ''});
	locationMyInfo();
}

function reserveInfoTitleClick() {
	$(this).css({'background-color' : '#CA9381'});
	$('.js_myInfoTitleClick').css({'background-color' : '#97675e'});
	
	var url = '/movie/mainService/ticketingConfirmation',
		cbf = function(result) {
			$('.js_myInfoInnerContainer').html(result);
		}
	
	$.post(url, cbf);
}