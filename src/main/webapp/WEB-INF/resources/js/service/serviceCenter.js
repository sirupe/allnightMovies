//메뉴부분
$(document).ready(function() {
			$('.div__serviceCenter_Content').hide();//모든 내용 숨겨라..
			$('ul.serviceCenter_Tab li:first').addClass('active').show(); // 첫번째탭 누르면 보여라
			$('.div__serviceCenter_Content:first').show(); // 첫번째 내용 보여라. 시바
			
			//클릭@ ..
			$("ul.serviceCenter_Tab li").click(function() {
				
				$('ul.serviceCenter_Tab li').removeClass('active');
				$(this).addClass('active');
				$(".div__serviceCenter_Content").hide();
				
				var activeTab = $(this).find('a').attr('href');
				$(activeTab).fadeIn();
				return false;
			});
		});


//자주묻는게시판--슬라이드
function serviceCenter_Frequenty() {
	var serviceCenter_Page = document.getElementsByClassName('serviceCenterFrequenty_title');
	var i;
	for(i = 0; i < serviceCenter_Page.length; i++) {
		serviceCenter_Page[i].onclick = function() {
			this.classList.toggle('active');
			 this.nextElementSibling.classList.toggle('show');
		}
	}
}