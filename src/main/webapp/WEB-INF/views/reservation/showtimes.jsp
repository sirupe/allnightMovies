<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<h2>상영시간표</h2>


<c:forEach var="list" items="${movie_list }">

	<div class = "container__movie__screening__date">
		<button class="movie_screening_date" type="button" onclick="movie_date()" >${list.getMovie_date() }</button>
			<div class="movie_screening_panel">
					<div class="movie__info">
						<span class="movie__title">
							${list.Movie_title() }
						</span>
						<span class="movie__room1">
							3:30(1관)
						</span>
						<span class="movie__room2">
							시간(관)
						</span>
						<span class="movie__room3">
							시간(관)
						</span>
					</div>
			</div>
	</div>
</c:forEach>
		


