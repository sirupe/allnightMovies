<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="search-movie">
	<div class="search-movie__title">
		<span class="search-movie__search-word">"${searchWord }"</span> 검색결과
	</div>
		<c:choose>
			<c:when test="${movieList != null}">
				<c:forEach items="${movieList}" var="list">
					<div class="search-movie__contents">
						<div class="search-movie__poster">
							<a href="/movie/mainService/movieDetailInfo?movieInfoTitle=${list.movieTitle }">
								<img border="0" height="201px" width="150px" alt="movie poster" src="/resources/img/poster/${list.moviePoster }">
							</a>
						</div>
						<div class="search-movie__title-info">
							<div class="search-movie__contents__title">
								<a href="/movie/mainService/movieDetailInfo?movieInfoTitle=${list.movieTitle }">제목 : ${list.movieTitle}</a>
							</div>
							<div class="search-movie__contents__info">
								감독 : <a href="https://search.naver.com/search.naver?where=nexearch&query=${list.movieDirector }&sm=top_hty&fbm=1&ie=utf8" target="_blank">${list.movieDirector }</a> | 
								시나리오 : <a href="https://search.naver.com/search.naver?where=nexearch&query=${list.movieAuthor }&sm=top_hty&fbm=1&ie=utf8" target="_blank">${list.movieAuthor }</a> | 
								주연 : 
								<c:forEach items="${list.movieCastList }" var="castInfo">
									<a href="https://search.naver.com/search.naver?where=nexearch&query=${castInfo.cast }&sm=top_hty&fbm=1&ie=utf8" target="_blank">${castInfo.cast }</a>
									${castInfo.act } / 
								</c:forEach>
								장르 : <a href="https://search.naver.com/search.naver?where=nexearch&query=${list.movieGenre }&sm=top_hty&fbm=1&ie=utf8" target="_blank">${list.movieGenre }</a> | 
								런타임 : ${list.movieRuntime} | 
								개봉일자 : ${list.movieReleaseDate } | 
								영화 관람가 : ${list.movieAgeLimitText } | 
								<div>
									소개 : <a href="/movie/mainService/movieDetailInfo?movieInfoTitle=${list.movieTitle }">${list.movieIntro }</a>
								</div>
							</div>
						</div>
					</div>
				</c:forEach>
			</c:when>
			<c:otherwise>
				조회된 정보가 없습니다.
			</c:otherwise>
		</c:choose>
</div>