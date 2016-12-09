function locationMain() {
	location.href="/";
}

function locationLogin() {
	var $userID  = $('.js_userID'),
		$userPWD = $('.js_userPWD'),
		url		 = '/movie/async/asyncService/login',
		params	 = 
			{
				'userID' : $userID.val(),
				'userPWD' : $userPWD.val()
			},
		cbf		 = 
			function(result) {
				console.log(result.data);
				if(result.success) {
					location.href=result.data;
				} else {
					alert(result.data);
				}
			};
		
		if($userID.val() != '' && $userPWD.val() != '') {
			$.post(url, params, cbf);
		} else {
			alert('아이디와 패스워드 모두 입력해주세요.');
		}
}



function setEvent() {
	var $container = $('.js_loginContainer');
	
	$container.on('click', '.js_login', locationLogin)
			  .on('click', '.js_goMain', locationMain)
}
function init() {
	setEvent();
}
init();