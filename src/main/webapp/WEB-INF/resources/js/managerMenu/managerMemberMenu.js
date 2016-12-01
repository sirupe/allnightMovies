initManagerMemberMenu();
function initManagerMemberMenu() {
	setEventManagerMemberMenu();
}

function setEventManagerMemberMenu() {
	var $memberContainer = $('.js_memberContainer')
	$memberContainer
		.on('click', '.js_managerWithdrawal', managerWithdrawal)
		.on('click', '.js_managerRestore', managerRestore)
		.on('click', '.js_searchMemberInfoBtn', searchMemberInfo)
		.on('click', '.js_mainPagingNumber', mainPaging)
		.on('click', '.js_mainPaingNextButton', nextMainPaging)
		.on('click', '.js_mainPaingPagePreButton',preMainPaging)
}	

function managerWithdrawal() {
	var userID = $(this).data('userId'),
		url = '/movie/mainService/managerWithdrawal',
		params = {
			'userID' : userID
		},
		cbf = function(result) {
			alert(userID + '님 회원탈퇴 처리 되었습니다.');
			$('.js_managerBody').html(result);
		}
	$.post(url, params, cbf);
}

function managerRestore() {
	var userID = $(this).data('userId'),
		url = '/movie/mainService/managerRestore',
		params = {
				'userID' : userID
		},
		cbf = function(result) {
			alert(userID + '님 회원으로 복구되었습니다.');
			$('.js_managerBody').html(result);
		}
		$.post(url, params, cbf);
}

function searchMemberInfo() {
	var searchUserID = $('.js_searchUserID').val(),
		searchUserName = $('.js_searchUserName').val(),
		searchUserBirth = $('.js_searchUserBirth').val(),
		url = '/movie/mainService/searchMemberInfo',
		params = {
			'userID' :  searchUserID,
			'userName' : searchUserName,
			'userBirth' : searchUserBirth
		},
		cbf = function(result) {
			$('.js_managerBody').html(result);
		}
	
	$.post(url, params, cbf);
}


function mainPaging() {
	var mainPage = $(this).text();
	
	console.log(mainPage);
		url		= '/movie/mainService/managePaging',
		params	= {'mainPaing' : mainPage},
		cbf		= function(result) {
					$('.js_managerBody').html(result);
		}
	$.post(url, params, cbf);
}

function nextMainPaging() {
	var $mainPageUserClickNum = $('.js_mainPaingNextButton');
		mainPageUserClickNum  = $mainPageUserClickNum.attr('data-userInfoMainNextPage');
		
		console.log(mainPageUserClickNum);
		
		url		= '/movie/mainService/managePaging',
		params	= {'mainPaing' : mainPageUserClickNum},
		cbf		= function(result) {
					$('.js_managerBody').html(result);
		}
	$.post(url, params, cbf);	
}

function preMainPaging() {
	var $mainPageUserClickNum = $('.js_mainPaingPagePreButton');
	mainPageUserClickNum  = $mainPageUserClickNum.attr('data-userInfoMainPrePage');
	
	console.log(mainPageUserClickNum);
	
	url		= '/movie/mainService/managePaging',
	params	= {'mainPaing' : mainPageUserClickNum},
	cbf		= function(result) {
				$('.js_managerBody').html(result);
	}
	$.post(url, params, cbf);	
}

