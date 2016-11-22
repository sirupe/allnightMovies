<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="js_ticketing font-family  ticketing  display-flex">
	<div class="ticketing__left-flex">
		<div class="movie-title   border-dashed">
			
			
			
			<h4 class="subject">영화</h4>
			
			
			
			
			
			<ul class="movie-title__body">
				<c:forEach items="${movieTitle }" var="title">
					<li class="js_movieTitleClick   movie-title__body__li  cursor">
						<label class="movie-title__body__limit   cursor   limit${title.movieAgeLimit }">
							${title.movieAgeLimit }
						</label> 
						<label class="js_movieTitle   movie-title__body__title   cursor">
							${title.movieTitle }
						</label>
					</li>
				</c:forEach>
			</ul>
		
		
		
		
		
		</div>
		<div class="calendar border-dashed">
			<jsp:include page="./calendar.jsp"/>
		</div>
	</div>	

	<div class="ticketing__right-flex">
		<div class="screening  border-dashed">
			<h4 class="subject">상영시간</h4>
			<div class="js_movieTime">
				<div class="js_screeningViewer  screening__default-text">영화 및 날짜를 선택해주세요.</div>
			</div>
		</div>
	</div>
</div>
