package com.allnightMovies.dao;

import java.util.ArrayList;
import java.util.List;

import com.allnightMovies.model.data.MainMenu;
import com.allnightMovies.model.data.cinemaInfo.CinemaFrequentlyBoardDTO;
import com.allnightMovies.model.data.cinemaInfo.CinemaNoticeBoardDTO;
import com.allnightMovies.model.data.cinemaInfo.CinemaQuestionBoardDTO;
import com.allnightMovies.model.data.cinemaInfo.CinemaSeatDTO;
import com.allnightMovies.model.data.cinemaInfo.CinemaSeatReserveInfo;
import com.allnightMovies.model.data.movieInfo.MainPageEventDTO;
import com.allnightMovies.model.data.movieInfo.MovieBasicInfo;
import com.allnightMovies.model.data.movieInfo.MovieCurrentFilmDTO;
import com.allnightMovies.model.data.movieInfo.MovieReviewBoard;
import com.allnightMovies.model.data.movieInfo.MovieScreeningDateInfo;
import com.allnightMovies.model.data.movieInfo.MovieScreeningsPlannedDTO;
import com.allnightMovies.model.data.movieInfo.MovieShowTimesMap;
import com.allnightMovies.model.data.movieInfo.MovieStillCut;
import com.allnightMovies.model.data.movieInfo.TicketingMovieTimeInfo;
import com.allnightMovies.model.data.movieInfo.TicketingMovieTitleInfo;
import com.allnightMovies.model.data.theater.CinemaIntroduceDTO;
import com.allnightMovies.model.data.userInfo.MovieEndTimeDTO;
import com.allnightMovies.model.data.userInfo.UserCheckEmptySeatsDTO;
import com.allnightMovies.model.data.userInfo.UserPersonalInfoDTO;
import com.allnightMovies.model.data.userInfo.UserPersonalLoginInfoDTO;
import com.allnightMovies.model.data.userInfo.UserSelectTicketingInfo;
import com.allnightMovies.model.data.userInfo.UserTicketingInfo;
import com.allnightMovies.model.params.Params;


public interface DBMapper {
	public void doTestInsert(CinemaSeatDTO dto) throws Throwable;
	
/** ji. Menu Loading **/
	public List<MainMenu> getMenus() throws Exception;

/** ji. Login **/
	public UserPersonalLoginInfoDTO login(Params params);
	
/** ji. Join **/
	public Integer idCheck(String id);
	public Integer insertJoinUserInfo(UserPersonalInfoDTO userDTO);

/** ji. ticketing **/
	public MovieScreeningDateInfo getMaxScreeningDate();
	public List<TicketingMovieTitleInfo> getMovieTitle();
	public List<TicketingMovieTimeInfo> getMovieTime(String movieTitle, String date);
	public Integer getTicketPriceInfo(String screeningDate, String theater);
	public String getMoviePoster(String title);
	public Integer checkEmptySeats(UserCheckEmptySeatsDTO checkEmptyDTO);
	public Integer userTicketingInfoInsert(UserTicketingInfo ticketingInfo);
	public List<String> reservationSeatInfo(CinemaSeatReserveInfo seatReserveInfo);
	public List<CinemaSeatDTO> getTheaterSeatInfo(CinemaSeatReserveInfo reserveInfo);
	public Integer getTheaterSeatColCnt(String theater);
	
/** ji. ticketing confirmation 예매내역 **/
	public List<UserSelectTicketingInfo> reservationSeatInfo(String userID);
	public MovieEndTimeDTO getMovieEndTime(String ticketNum);
	
/** ji. cancel ticket 예매취소 **/
	public void cancelTicket(String ticketNum, String userID);
	
/** jung. 상영시간표 **/
	public List<MovieShowTimesMap> showtimes() throws Exception;
	
/** 아이디찾기 **/
	public List<Params> searchId(String searchIdUserName, String searchIdUserBirth, String searchIdUserGender) throws Exception;
/** jung. 아이디 갯수 **/
	public Integer searchIdCount(String searchIdUserName, String searchIdUserBirth, String searchIdUserGender) throws Exception;
/** jung 이메일 **/
	public Integer searchEmailCount(String searchIdUserEmail) throws Exception;
	public List<Params> searchIDEmail(String searchIdUserEmail) throws Exception;
	
/**고객센터--자주묻는질문**/
	public List<CinemaFrequentlyBoardDTO> serviceCenter() throws Exception;
	public ArrayList<CinemaFrequentlyBoardDTO> serviceCentergetBoard(int startPageNum, int endPageNum) throws Exception;
	
	public List<CinemaFrequentlyBoardDTO> getUserSearchList(int searchStartNum, int searchEndNum, String serviceCenterSearchWord);
	
	public Integer serviceCentergetBoardCount() throws Exception;
	public Integer userSearchList(String serviceCenterSearchWord);
	
/**고객센터 문의사항게시판 **/
	public Integer questionBoardCount() throws Exception;
	public ArrayList<CinemaQuestionBoardDTO> questionBoard(int startPageNum, int endPageNum) throws Exception;
	public CinemaQuestionBoardDTO questionBoardList(Integer no) throws Exception;
	public Integer InsertAskWriteBoard(CinemaQuestionBoardDTO cinemaQuestionBoardDTO) throws Exception;
	public CinemaQuestionBoardDTO completeUPdateWriteBoard(String title, String content, int writePwd, int isPwd, String no) throws Exception;
	public Integer completeDeleteQuestionBoard(String completeDeleteQuestionBoardNum);
	
/**jung 고객센터 관리자**/
	public CinemaFrequentlyBoardDTO managementWriteBoard(String question, String asked) throws Exception;
	public CinemaFrequentlyBoardDTO managementFrequentlyBoardCount(String no);
	public CinemaFrequentlyBoardDTO managementUpdateFormComplete(String question, String asked, String no) throws Exception;
	
	
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
	public List<MovieCurrentFilmDTO> sortScore();
	public List<MovieCurrentFilmDTO> sortTicketing();
	
/** shin. SERVICE noticeBoard **/
	public int getNoticeBoardCount();
	public List<CinemaNoticeBoardDTO> getCinemaNoticeBoardDTO(int blockStartNum, int blockEndNum);
	public CinemaNoticeBoardDTO getNoticeBoardContent(Integer noticeNo);
	public int searchBoardCount(String searchWord);
	public List<CinemaNoticeBoardDTO> searchBoard(Integer blockStartNum, Integer blockEndNum, String searchWord);
	
/** shin. THEATER introduce **/	
	public List<CinemaIntroduceDTO> getCinemaIntroImg();
	
/** shin. MAIN event**/
	public List<MainPageEventDTO> getMainEvnetImg();
	public List<MovieCurrentFilmDTO> getNewFilmDTO();
	public List<CinemaNoticeBoardDTO> getMainNoticeDTO();
	
/** shin. reviewBoard**/	
	public MovieBasicInfo getMovieBasicInfo(String movieTitle);
	public List<MovieReviewBoard> getReviewBoard(String movieTitle);
	public List<MovieReviewBoard> getReviewBoardList(Integer blockStartNum, Integer blockEndNum, String movieTitle);
	public MovieReviewBoard insertReview(Integer score, String contents, String userID, String movieTitle);
	public MovieReviewBoard deleteReview(Integer reviewNo);
/** shin.  stillcut**/
	public List<MovieStillCut> getStillcut(String movieTitle);
	
/*  shin. 관리자 공지사항 등록*/
	public CinemaNoticeBoardDTO insertNoticeBoard(String title, String content, int important);
	public CinemaNoticeBoardDTO updateNoticeBoard(String title, String content, int important, int no);
	public Integer deleteNoticeBoard(Integer noticeNO);

}