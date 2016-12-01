init();
var $chooseMenu;

function init() {
	menuClick($('.js_managerMemberMenu'));
	$chooseMenu = $('.js_managerMemberMenu');
	setEvent();
}

function setEvent() {
	var $container = $('.js_managerContainer');
	$container
		.on('click', '.js_managerMemberMenu', managerMemberMenu)
		.on('click', '.js_managerReserveMenu', managerReserveMenu)
		.on('click', '.js_managerSalesMenu', managerSalesMenu)
}

function managerMemberMenu() {
	menuClick($(this));
	$chooseMenu = $(this);
	
	var url = '/movie/mainService/managePaging',
	cbf = function(result) {
		$('.js_managerBody').html(result);
	}
	$.post(url, cbf);
}

function managerReserveMenu() {
	menuClick($(this));
	$chooseMenu = $(this);
	
	var url = '/movie/mainService/managerReserveMenu',
		cbf = function(result) {
			$('.js_managerBody').html(result);
		}
	$.post(url, cbf);
}

function managerSalesMenu() {
	menuClick($(this));
	$chooseMenu = $(this);
}

function menuClick(comp) {
	comp.css({
		'background-color':'#5e5e5e',
		'color':'#dfffdf'
	});
	
	if($chooseMenu != undefined) {
		$chooseMenu.css({
			'background-color':'',
			'color':''
		});
	}
}