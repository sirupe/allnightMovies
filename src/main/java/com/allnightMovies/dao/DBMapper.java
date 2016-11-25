package com.allnightMovies.dao;

import java.util.ArrayList;
import java.util.List;

import com.allnightMovies.model.data.MainMenu;
import com.allnightMovies.model.data.cinemaInfo.CinemaNoticeBoardDTO;
import com.allnightMovies.model.data.cinemaInfo.CinemaTheaterSeatDTO;
import com.allnightMovies.model.data.movieInfo.MovieCurrentFilmDTO;
import com.allnightMovies.model.data.movieInfo.MovieFrequentlyBoardDTO;
import com.allnightMovies.model.data.movieInfo.MovieScreeningDateInfo;
import com.allnightMovies.model.data.movieInfo.MovieScreeningsPlannedDTO;
import com.allnightMovies.model.data.movieInfo.MovieShowTimesMap;
import com.allnightMovies.model.data.movieInfo.TicketingMovieTimeInfo;
import com.allnightMovies.model.data.movieInfo.TicketingMovieTitleInfo;
import com.allnightMovies.model.data.theater.CinemaIntroduceDTO;
import com.allnightMovies.model.data.userInfo.UserPersonalInfoDTO;
import com.allnightMovies.model.data.userInfo.UserPersonalLoginInfoDTO;
import com.allnightMovies.model.params.Params;


public interface DBMapper {
/** ji. Menu Loading **/
	public List<MainMenu> getMenus() throws Exception;

/** ji. Login **/
	public UserPersonalLoginInfoDTO login(Params params);
	
/** ji. Join **/
	public Integer idCheck(String id);
	public Integer insertJoinUserInfo(UserPersonalInfoDTO userDTO);

/** ji. ticketing : calendar**/
	public MovieScreeningDateInfo getMaxScreeningDate();
	public List<TicketingMovieTitleInfo> getMovieTitle();
	public List<TicketingMovieTimeInfo> getMovieTime(String movieTitle, String date);
	public List<CinemaTheaterSeatDTO> getTheaterSeatInfo(int theater);
	public Integer getTicketPriceInfo(String screeningDate, String theater);
	
/** jung. 상영시간표 **/
	public List<MovieShowTimesMap> showtimes() throws Exception;
	
/** 아이디찾기 **/
	public List<Params> searchId(String searchIdUserName, String searchIdUserBirth, String searchIdUserGender) throws Exception;
/** jung. 아이디 갯수 **/
	public Integer searchIdCount(String searchIdUserName, String searchIdUserBirth, String searchIdUserGender) throws Exception;
/** juung 이메일 **/
	public Integer searchEmailCount(String searchIdUserEmail) throws Exception;
	public List<Params> searchIDEmail(String searchIdUserEmail) throws Exception;
	
/**고객센터--자주묻는질문**/
	public List<MovieFrequentlyBoardDTO> serviceCenter() throws Exception;
	public ArrayList<MovieFrequentlyBoardDTO> serviceCentergetBoard(int startPageNum, int endPageNum) throws Exception;
	public Integer serviceCentergetBoardCount() throws Exception;
/** shin. Search PWD **/
	public Integer searchPWD(String searchPwdUserID);
	public String searchEmail(String searchPwdUserID);
	public Params updateNewPwd(String searchPwdUserID, String searchPwdNewPwd);
	
/** shin. MY INFO **/	
	public UserPersonalInfoDTO selectMyInfo(String myInfoID);
	public String selectUserPWD(String myInfoID);
	public Params updateWithdraw(String myInfoID);
	public String updateEmailAddr(String emailAddr, String userID);
	
/** shin. MOVIE currentFilm **/	
	public List<MovieCurrentFilmDTO> getCurrentFilmDTO();
	public List<MovieScreeningsPlannedDTO> getPlannedFilmDTO();
/** shin. SERVICE noticeBoard **/
	public int getNoticeBoardCount();
	public List<CinemaNoticeBoardDTO> getCinemaNoticeBoardDTO(int blockStartNum, int blockEndNum);
	public CinemaNoticeBoardDTO getNoticeBoardContent(Integer noticeNo);
	public int searchBoardCount(String searchWord);
	public List<CinemaNoticeBoardDTO> searchBoard(Integer blockStartNum, Integer blockEndNum, String searchWord);
/** shin. THEATER introduce **/	
	public List<CinemaIntroduceDTO> getCinemaIntroImg();
}