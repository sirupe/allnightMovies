function movie_date() {
	var movie_timeTable = document.getElementsByClassName('movie_screening_date');
	var i;
	for(i = 0; i < movie_timeTable.length; i++) {
		movie_timeTable[i].onclick = function() {
			this.classList.toggle("active");
			 this.nextElementSibling.classList.toggle("show");
		}
	}
}