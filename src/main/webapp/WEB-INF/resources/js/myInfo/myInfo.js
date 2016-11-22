function init() {
	setEvent();
}

init();

function setEvent() {
	var $container = $('.js_myInfoContainer');
	
	$container
		.on('click', '.js_myInfo_changeEmailBtn', changeEmailInfoForm)
		.on('click', '.js_myInfo_changePwdBtn', changePwdInfoForm)
		.on('click', '.js_myInfo_withdrawBtn', withdrawForm)
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