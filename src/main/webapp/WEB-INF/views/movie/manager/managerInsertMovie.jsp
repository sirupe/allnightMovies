<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="movieInsertContainer js_movieInsertContainer">
	<label class="movieInsert-label">영화등록</label>
	<div class="movieBasicInfo-intro font">
		포스터&nbsp;:&nbsp;<input class="main_fileupload" type="file" name="file"><br>
		스틸컷&nbsp;:&nbsp;<input type="file" name="file"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						 <input class="input__Stillcut" type="file" name="file"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						 <input class="input__Stillcut" type="file" name="file"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						 <input class="input__Stillcut" type="file" name="file"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						 <input class="input__Stillcut" type="file" name="file"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		
		
		<div class="span-movieBasicInfo-intro font">
			제목&nbsp;:&nbsp;<input class="js_movieInsertTitle input__import font" name="managerMovieTitle" value="${movieBasicInfo.movieTitle}" type="text" placeholder="최대 30자 입력가능" maxlength="30"><br><br>
			개요&nbsp;:&nbsp;<input class="js_movieInsertGenre font" name="managerMovieGenre" value="${movieBasicInfo.movieGenre}" type="text" placeholder="최대 10자 입력가능" maxlength="10"/><br><br>
			감독&nbsp;:&nbsp;<input class="js_movieInsertDirector font" name="managerMovieDirector" value="${movieBasicInfo.movieDirector}" type="text" placeholder="최대 15자 입력가능" maxlength="15"/>
			&nbsp;저자&nbsp;:&nbsp;<input class="js_movieInsertAutohor font" name="managerMovieAuthor" value="${movieBasicInfo.movieAuthor}" type="text" placeholder="최대 15자 입력가능" maxlength="15"><br><br>
			출연&nbsp;:&nbsp;<input class="js_movieInsertCast input__import font" name="managerMovieCast" value="${movieBasicInfo.movieCast}" type="text" placeholder="최대 30자 입력가능" maxlength="30"><br><br>
			등급&nbsp;:&nbsp;<select class="js_movieInsertAge font" name="managerMovieAge">
								<option value="0">전체</option>
								<option value="12">12세</option>
								<option value="15">15세</option>
								<option value="19">19세</option>
							</select><br><br>
			상영시간&nbsp;:&nbsp;<input value="87" class="js_movieInsertRuntime font" name="managerMovieRuntime" type="text">분<br><br>
			개봉일&nbsp;:&nbsp;<input class="js_movieInsertDate font" name="managerMovieReleaseDate"  type="date"><br><br>
			<label class="movieInsert__label">작품소개</label>
			<textarea class="js_movieInsertIntro movieInsert__Textarea font" name="managerMovieIntro"></textarea>
			<div class="movieInsertBtns">
				<button class="movieInsertBtn js_movieInsertBtn" type="button">등록</button>	
				<button class="movieResetBtn"  type="reset">다시작성</button>	
			</div>
		</div> 
	</div>
</div>
