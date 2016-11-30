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
