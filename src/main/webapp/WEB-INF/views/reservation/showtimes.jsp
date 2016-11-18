<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="container__showtimes">
	<h2 class="container__showtimes__title">상영시간표</h2>
	
	<c:forEach items = "${movieTimeTable }" var="movieTimeTable">
			<div class = "container__movie__screening__date">
				<button class="movie_screening_date" type="button" onclick="movie_date()" >${movieTimeTable.getScreening_Date() }</button>
				
					<div class="movie_screening_panel">
						<c:forEach items="${movieTimeTable.getMovieShowTitleDTO() }" var="movieTitleDTO">
							<div class="movie__info">
								<span class="movie__title">
									${movieTitleDTO.getMovie_title()}
								</span>
								<c:forEach items ="${movieTitleDTO.getMovieshowTableDTO()}" var="movieTimeTableInfo">
									<span class="movie__room1">
										${movieTimeTableInfo.getScreening_time()}(${movieTimeTableInfo.getMovie_theather()}관)
									</span>
								</c:forEach>
							</div>
						</c:forEach>	
					</div>
			</div>
	</c:forEach>
</div>

