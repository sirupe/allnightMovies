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

//function viewMyInfo() {
//	var method   = 'POST'; 
//		url    = '/movie/mainService/viewMyInfo';
//		dir    = 'myInfo';				 	  
//		page   = 'myInfo';			  
//		js     = 'myInfo/myInfo';   	  
//		css    = 'myInfo/myInfo';	 	
//	
//	submit(method, url, dir, page, js, css);
//
//}

function changeEmailInfoForm() {
	var method   = 'POST'; 
		url    = '/movie/mainService/getTemplate';
		dir    = 'myInfo';				 	  
		page   = 'myInfoChangeEmail';			  
		js     = 'myInfo/changeEmail';   	  
		css    = 'myInfo/changeEmail';	
		
	submit(method, url, dir, page, js, css);   
}

function changePwdInfoForm() {
	var method   = 'POST'; 
		url    = '/movie/mainService/getTemplate';
		dir    = 'myInfo';				 	  
		page   = 'myInfoChangePwd';			  
		js     = 'myInfo/changePwd';   	  
		css    = 'myInfo/changePwd';	
	
		submit(method, url, dir, page, js, css);  
}

function withdrawForm() {
	var method   = 'POST'; 
		url    = '/movie/mainService/getTemplate';
		dir    = 'myInfo';				 	  
		page   = 'withdraw';			  
		js     = 'myInfo/withdraw';   	  
		css    = 'myInfo/withdraw';	

	submit(method, url, dir, page, js, css);  	
}