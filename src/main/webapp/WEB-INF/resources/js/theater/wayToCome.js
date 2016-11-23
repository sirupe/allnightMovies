function init() {
	initialize();
}

init();

function initialize() { 
	var myLatlng = new google.maps.LatLng(37.574280, 127.001089); // y, x좌표값
	var mapOptions = { 
						zoom: 15, 
						center: myLatlng, 
						mapTypeId: google.maps.MapTypeId.ROADMAP 
					 } 
	var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	var marker = new google.maps.Marker({ 
											position: myLatlng, 
											map: map, 
											title: "AllnightMovies(올나잇무비스)" 
										}); 
	 var infowindow = new google.maps.InfoWindow({ 
							 						content: "<h1>allnightMovies(올나잇무비스)</h1>", 
							 						maxWidth: 300 
	 											}); 

	 google.maps.event.addListener(marker, 'click', function() {infowindow.open(map, marker);}); 
} 