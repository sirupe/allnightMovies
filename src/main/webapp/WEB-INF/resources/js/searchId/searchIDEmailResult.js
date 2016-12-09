
function setSearchIDStart() {
	console.log('cc');
	var $container = $('.js_searchIDEmailContainer');
	
	$container
		.on('click', '.js_searchIdBack', locationSearchID)
		.on('click', '.js_searchPwdBack', locationSearchPwd)
		.on('click', '.js_searchEmailLocationMain',searchEmailLocationMainClick)
}

function searchEmailLocationMainClick() {
	locationMain();
}
function setSearchID() {
	setSearchIDStart();
}

setSearchID();