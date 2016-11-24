 package com.allnightMovies.service;

import java.lang.reflect.Method;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.allnightMovies.di.Action;
import com.allnightMovies.model.data.MainMenu;
import com.allnightMovies.model.data.MenuList;
import com.allnightMovies.model.data.cinemaInfo.CinemaTheaterSeatDTO;
import com.allnightMovies.model.data.movieInfo.MovieCurrentFilmDTO;
import com.allnightMovies.model.data.movieInfo.MovieFrequentlyBoardDTO;
import com.allnightMovies.model.data.movieInfo.MovieScreeningDateInfo;
import com.allnightMovies.model.data.movieInfo.MovieScreeningsPlannedDTO;
import com.allnightMovies.model.data.movieInfo.MovieShowTimesMap;
import com.allnightMovies.model.data.movieInfo.MovieShowTitleDTO;
import com.allnightMovies.model.data.movieInfo.MovieshowTableDTO;
import com.allnightMovies.model.data.movieInfo.TicketingMovieTimeInfo;
import com.allnightMovies.model.data.userInfo.UserPersonalInfoDTO;
import com.allnightMovies.model.data.userInfo.UserPersonalLoginInfoDTO;
import com.allnightMovies.model.params.Params;
import com.allnightMovies.utility.MonthCalendar;
import com.allnightMovies.utility.Paging;
import com.allnightMovies.utility.RegexCheck;
import com.allnightMovies.utility.SendEmail;
import com.allnightMovies.utility.UtilityEnums;

// @Service 어노테이션
// 스프링이 구동될 때 내부 메소드들이 미리 만들어져 올라가 있다.
// 메인 컨트롤러에서는 별도의 생성 없이 사용 가능.
@Service
public class MainService implements Action {
	private Params params;
//	private MenuList menuList = new MenuList();
	
//	@Autowired
//	MovieMapper movieMapper;
	@Autowired
	DBService dbService;
	
	// 여기서 온갖것들을 실행시켜주면 된다.movieTime
	// ModelAndView 객체에 view 단에서 찍어내야 하는 페이지들도 올려두고 ...
	@Override
	public ModelAndView execute(Params params) throws Throwable {
		Method method = this.getClass().getDeclaredMethod(params.getMethod());
		this.params = params;
		
								// invoke(Object this, Object...args)
		return (ModelAndView) method.invoke(this);
	}

/*****은정. 기본 template의 작동*****/
	// 기본 템플레이트 출력
	public ModelAndView getTemplate() throws Exception {
		List<MainMenu> list = this.dbService.getMenus();
		Map<String, MainMenu> mainMenuMap = new MenuList(list).getMainMenuMap();
		ModelAndView mav = new ModelAndView("template");
		String main = this.params.getMain() == null ? "movie" : this.params.getMain();
		
		String sub = this.params.getSub() == null ? mainMenuMap.get(main).getSubMenuList().get(0).getSubMenuPage() : this.params.getSub();
		mav.addObject("main", mainMenuMap.get(main));
		mav.addObject("sub", sub);
		mav.addObject("list", list);
		mav.addObject("directory", this.params.getDirectory());
		mav.addObject("page", this.params.getPage());
		mav.addObject("contentCSS", this.params.getContentCSS());
		mav.addObject("contentjs", this.params.getContentjs());
		mav.addObject("keepLogin", this.params.getKeepLogin());
		return mav;
	}

	// 로그인
	public ModelAndView login() throws Exception {
		UserPersonalLoginInfoDTO userLoginInfo = this.dbService.login(this.params);
		if(userLoginInfo.getUserStates() == 1) {
			HttpSession session = this.params.getSession();
			session.setAttribute("userID", userLoginInfo.getUserID());
		}
		return this.getTemplate();
	}
	
	// 로그아웃
	public ModelAndView logout() throws Exception {
		this.params.getSession().invalidate();
		return this.getTemplate();
	}
	
/*****은정. join 회원가입 시의 작동*****/	
	public ModelAndView idCheck() throws Exception {
		ModelAndView mav = new ModelAndView("join/resultText");

		String resultMessage = "사용이 가능한 아이디입니다.";
		String id = this.params.getUserIDCheck();
		boolean bool = true;
		
		if(!RegexCheck.idRegexCheck(id)) {
			resultMessage = "사용할 수 없는 아이디입니다.";
			bool = false;
		}
		if(this.dbService.idCheck(id) > 0) {
			resultMessage = "이미 사용중인 아이디입니다.";
			bool = false;
		}
		
		mav.addObject("result", resultMessage);
		mav.addObject("resultBool", bool);
		mav.addObject("resultBoolID", "id-bool");
		return mav;
	}

	public ModelAndView sendEmail() throws Exception {
		ModelAndView mav = new ModelAndView("join/resultText");
		HttpSession session = this.params.getSession();
		
		// 인증번호 생성
		Random rand = new Random();
		int randNum = rand.nextInt(900000) + 100000;
		System.out.println(">>메인서비스 sendEmail() 인증번호 : " + randNum);
		
		// 메일 발송
		new SendEmail(String.valueOf(randNum), this.params.getUserEmail());
		String result = "인증번호가 발송되었습니다.";
		
		boolean bool = true;
		
		// 세션에 인증번호와 인증을 보낸 시간 등록
		session.setAttribute("certificationNum", randNum);
		session.setAttribute("confirmTime", System.currentTimeMillis());
		
		mav.addObject("result", result);
		mav.addObject("resultBool", bool);
		mav.addObject("resultBoolID", "email-bool");
		return mav;
	}

	public ModelAndView confirmCheck() throws Exception {
		ModelAndView mav = new ModelAndView("join/resultText");
		String result = "입력하신 인증번호와 일치합니다.";
		int inputConfirmNum = this.params.getConfirmNum();
		HttpSession session = this.params.getSession();
		Integer saveConfirmNum = session.getAttribute("certificationNum") == null ? null : (int) session.getAttribute("certificationNum");

		boolean bool = true;
		
		// 인증을 보낸지 3분이 지났다면
		if(System.currentTimeMillis() - (Long)session.getAttribute("confirmTime") > UtilityEnums.CONFIRM_TIME.getConfirmTime()) {
			session.removeAttribute("certificationNum");
			session.setAttribute("confirmTime", 0);
			result = "입력 시간이 초과되었습니다. 인증번호를 다시 받아주세요.";
			bool = false;
		
		// 인증번호를 보낸 적이 없다면	
		} else if(saveConfirmNum == 0 || saveConfirmNum == null) {
			result = "인증번호를 받아주세요.";
			bool = false;
			
		// 인증번호가 불일치하다면
		} else if(!(saveConfirmNum == inputConfirmNum)) {
			result = "인증번호가 일치하지 않습니다.";
			System.out.println(">>메인서비스 confirmCheck() : 저장된 번호-"+ this.params.getSession().getAttribute("certificationNum"));
			bool = false;
			
		} else {
			session.setAttribute("certificationNum", 0);
			session.setAttribute("isConfirm", true);
		}
		mav.addObject("result", result);
		mav.addObject("resultBool", bool);
		mav.addObject("resultBoolID", "confirm-bool");
		
		return mav;
	}

	public ModelAndView confirmNumInit() throws Exception {
		ModelAndView mav = new ModelAndView();
		HttpSession session = this.params.getSession();
		session.setAttribute("isConfirm", false);
		return mav;
	}
		
	public ModelAndView locationJoinSuccess() throws Exception {
		this.params.setDirectory("join");
		this.params.setPage("joinResult");
		this.params.setContentCSS("join/joinSuccess");
		this.params.setContentjs("join/joinSuccess");
		return this.getTemplate();	
	}

	@Override
	public String executeString(Params params) throws Throwable {
		return null;
	}
	
/*****은정. ticketing *****/
	public ModelAndView ticketing() throws Exception {
		this.params.setDirectory("reservation/ticketing");
		this.params.setPage("ticketing");
		this.params.setContentCSS("reservation/ticketing");
		this.params.setContentjs("reservation/ticketing");
		
		MovieScreeningDateInfo screeningDate = this.dbService.getMaxScreeningDate();
		screeningDate.setScreeningDate();
		
		ModelAndView mav = this.getTemplate();
		mav.addObject("cal", new MonthCalendar());
		mav.addObject("screening", screeningDate);
		mav.addObject("movieTitle", this.dbService.getMovieTitle());
		return mav;
	}
		
	public ModelAndView calendar() {
		MovieScreeningDateInfo screeningDate = this.dbService.getMaxScreeningDate();
		screeningDate.setScreeningDate();
		ModelAndView mav = new ModelAndView("reservation/ticketing/calendar");
		mav.addObject("cal", new MonthCalendar(this.params.getCalendarYear(), this.params.getCalendarMonth()));
		mav.addObject("screening", screeningDate);
		return mav;
	}
	
	public ModelAndView screeningPlanned() {
		ModelAndView mav = new ModelAndView("reservation/ticketing/screeningPlanned");
		List<TicketingMovieTimeInfo> list = this.dbService.getMovieTime(this.params.getMovieTitle(), this.params.getScreeningDate());
		mav.addObject("movieTimeList", list);
		return mav;
	}
	
	public ModelAndView seatInfo() {
		ModelAndView mav = new ModelAndView("reservation/ticketing/seatInfo");
		
		String screeningDateTime = this.params.getScreeningDate() + " " + this.params.getMovieTime();
		List<CinemaTheaterSeatDTO> seatInfoList = this.dbService.getTheaterSeatInfo(this.params.getTheater());
		
		int moviePrice = this.dbService.getTicketPriceInfo(screeningDateTime, String.valueOf(this.params.getTheater()));
		System.out.println("금액 : " + moviePrice);
		
		
		mav.addObject("seatList", seatInfoList);
		mav.addObject("moviePrice", moviePrice);
		return mav;
	}
	
/*******연종. PWD찾기 SHIN*******/
	//고쳐야할것★★★ 사용자가 입력한 아이디 값을 session에 저장시키는것이 아니라
	//DB에서 확인된 아이디를 가져와session에 저장 시켜야 함 정확하게 하기위해!!!!!!
	public ModelAndView searchID() throws Exception {
		ModelAndView mav = this.getTemplate();
		String searchPwdUserID = this.params.getSearchPwdUserID();
		Integer result = this.dbService.searchPWD(searchPwdUserID);
		
		HttpSession session =  this.params.getSession();	
		session.setAttribute("userId", searchPwdUserID);
		
		mav.addObject("result", result);
		return mav;
	}
	public ModelAndView searchPwdsendEmail() throws Exception {
		ModelAndView mav = this.getTemplate();
		Random rand = new Random();
		int randNum = rand.nextInt(900000) + 100000;
		System.out.println("mainservice 인증번호> : " + randNum);
		
		HttpSession session = this.params.getSession();
		String searchPwdUserID = (String)session.getAttribute("userId");
		String userEmail = this.dbService.searchEmail(searchPwdUserID);
		HttpSession sessionRandNum = this.params.getSession();
		sessionRandNum.setAttribute("randNum", randNum);
		new SendEmail(String.valueOf(randNum), userEmail); 
		return mav;
	}
	public ModelAndView checkPwdConfirmNum() throws Exception {
		this.params.setDirectory("searchPwd");
		this.params.setPage("searchPwdChangePwd");
		this.params.setContentCSS("searchPwd/searchPwd");
		this.params.setContentjs("searchPwd/searchPwd");
		return this.getTemplate();	
	}
	public ModelAndView updatePWD() throws Exception {
		HttpSession session = this.params.getSession();
		String searchPwdUserID = (String)session.getAttribute("userId");
		String searchPwdNewPwd = this.params.getSearchPwdNewPwd();
		this.dbService.updateNewPwd(searchPwdUserID, searchPwdNewPwd);
		this.params.setDirectory("searchPwd");
		this.params.setPage("searchPwdChangeCompleted");
		return this.logout();
	}
//------------------------------------------------------------------------
	
/*******ID찾기(회원정보) 수진*******/	
	public ModelAndView searchId() throws Exception {
		ModelAndView mav = this.getTemplate();
		String resultMsg = null;
		boolean userInfoResult = true;
		String searchIdUserName = this.params.getSearchIdUserName();
		String searchIdUserBirth = this.params.getSearchIdUserBirth();
		String searchIdUserGender = this.params.getSearchIdUserGender();
		
		if(searchIdUserName == "" 
				&& searchIdUserBirth == "" 
				&& searchIdUserGender == "") {
			userInfoResult = false;
		}
		//생일 정보 
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date today = new Date();
		Date todayDate = dateFormat.parse(this.params.getSearchIdUserBirth());
		
		double rightDays = (today.getTime() - todayDate.getTime()) / (24 * 60 * 60 * 1000);
		if(rightDays < 1) {
			userInfoResult = false;
		}
		//세션저장//
		List<Params> userSearchId = this.dbService.searchId(searchIdUserName, searchIdUserBirth, searchIdUserGender);
		Integer result = this.dbService.searchIdCount(searchIdUserName, searchIdUserBirth, searchIdUserGender);
		
		mav.addObject("searchIdUserName", searchIdUserName);
		mav.addObject("userSearchId", userSearchId);
		mav.addObject("result", result);
		return mav;
	}
	
/*****수진. 아이디찾기(email)*****/
	
	public ModelAndView searchIDEmailResult() throws Exception {
		this.params.setDirectory("searchId");
		this.params.setPage("searchIdEmailResult");
		this.params.setContentCSS("searchId/searchId");
		this.params.setContentjs("searchId/searchId");
		
		HttpSession session = this.params.getSession();
		String searchIdUserEmail = (String) this.params.getSession().getAttribute("searchIdUserEmail");
		//db보내기
		List<Params> userEmail = this.dbService.searchIDEmail(searchIdUserEmail);
		Integer userEmailIDCount = this.dbService.searchEmailCount(searchIdUserEmail);
		
		ModelAndView mav = this.getTemplate();
		mav.addObject("userEmail", userEmail);
		mav.addObject("userEmailIDCount", userEmailIDCount);
		return mav;
		
	}
/*****수진. 상영시간표List*****/
	public ModelAndView showtimes() throws Exception {
		this.params.setContentCSS("reservation/timeTable");
		this.params.setContentjs("reservation/timeTable");
		List<MovieShowTimesMap> movieTimeTable = this.dbService.showtimes();
	
		
		for(int i = 0, size=movieTimeTable.size(); i < size; i++) {
			MovieShowTimesMap showTime = movieTimeTable.get(i);
			List<MovieShowTitleDTO> showTitle = showTime.getMovieShowTitleDTO();
			
			for(int j = 0, JSize = showTitle.size(); j <JSize; j++) {
				MovieShowTitleDTO titleDTO = showTitle.get(j);

				List<MovieshowTableDTO> showTable = titleDTO.getMovieshowTableDTO();
				for(int k = 0, kSize = showTable.size(); k < kSize; k++) {

				}
			}
		}
		ModelAndView mav = this.getTemplate();
		mav.addObject("movieTimeTable", movieTimeTable);
		return mav;
	}
	
/****수진 .고객센터*****/
	@RequestMapping(value="/serviceCenter")
	public ModelAndView serviceCenter() throws Exception {
		this.params.setContentCSS("service/serviceCenter");
		this.params.setContentjs("service/serviceCenter");
		//페이지 번호를 누르면 그 페이지 번호를 가져와서 dto에 저장을 하고 여기에 집어넣어,
		
		int totBoardList = this.dbService.serviceCentergetBoardCount();
		System.out.println("service글목록 갯수 : " + totBoardList);
		
		int page = this.params.getPageboard();
		System.out.println(page + "page");
		
		List<MovieFrequentlyBoardDTO> MovieFrequentlyBoardDTO = this.dbService.serviceCenter();
		Paging boardPaging = new Paging(totBoardList, 7,page, 5);
		boardPaging.setBoardPaging();
		System.out.println(boardPaging + "페이지 그룹");
		System.out.println(boardPaging.getStartPageNum() + "시작");
		System.out.println(boardPaging.getEndPageNum() + "마지막");
		System.out.println(this.dbService.serviceCentergetBoard(boardPaging.getStartPageNum(), boardPaging.getEndPageNum()) + "?");

		
		ModelAndView mav = this.getTemplate();
		mav.addObject("MovieFrequentlyBoardDTO", MovieFrequentlyBoardDTO);
		mav.addObject("boardPage", this.dbService.serviceCentergetBoard(boardPaging.getStartPageNum(), boardPaging.getEndPageNum()));
		mav.addObject("pageCount",boardPaging.getTotalPageCount());
		mav.addObject("pageGroup",boardPaging);
		mav.addObject("checkPage", page);
		return mav;
	}
	
	
	public ModelAndView serviceCentergetBoardCount() throws Exception {
		
		this.params.setDirectory("service");
		this.params.setPage("serviceCenter");
		this.params.setContentCSS("service/serviceCenter");
		this.params.setContentjs("service/serviceCenter");
		
		int totBoardList = this.dbService.serviceCentergetBoardCount();
		System.out.println("글목록 갯수 : " + totBoardList);
		return this.getTemplate();
	}
	
/*******연종. MyINFO SHIN*******/	
	public ModelAndView viewMyInfo() throws Exception {
		ModelAndView mav = this.getTemplate();
		HttpSession session = this.params.getSession();
		String myInfoID = (String)session.getAttribute("userID");
		UserPersonalInfoDTO myInfoDTO = this.dbService.selectMyInfo(myInfoID);
		mav.addObject("myInfoList", myInfoDTO);
		return mav;
	}
	public ModelAndView myInfoChagePwdResult() throws Exception {
		this.params.setDirectory("myInfo");
		this.params.setPage("myInfoChagePwdResult");
		this.params.setContentCSS("myInfo/changePwd");
		this.params.setContentjs("myInfo/changePwd");
		return this.getTemplate();	
	}
	public ModelAndView myInfoChangeEmailResult() throws Exception {
		this.params.setDirectory("myInfo");
		this.params.setPage("myInfoChangeEmailResult");
		this.params.setContentCSS("myInfo/changeEmail");
		this.params.setContentjs("myInfo/changeEmail");
		return this.logout();
	}
	public ModelAndView myInfoChangePwdResult()throws Exception{
		this.params.setDirectory("myInfo");
		this.params.setPage("myInfoChangePwdResult");
		this.params.setContentCSS("myInfo/changePwd");
		this.params.setContentjs("myInfo/changePwd");
		return this.logout();	
	}	
//------------------------------------------------------------------------
/*******연종. MOVIE CURRENT FIRM 현재상영작*******/	
	public ModelAndView currentFilm() throws Exception{
		ModelAndView mav = this.getTemplate();
		
		List<MovieCurrentFilmDTO> currentFilmDTO = this.dbService.getCurrentFilmDTO();
		Integer filmNum = currentFilmDTO.size();
		System.out.println("Mainservice DTO.size 갯수  >> " + filmNum);
		//TEST
		for(MovieCurrentFilmDTO list : currentFilmDTO) {
			System.out.println(list.getMovieTitle());
		}
		//TODO 지금은 이름 오름차순 이지만 나중엔 예매율순으로 바꿀꺼!
		mav.addObject("directory", "movie");
		mav.addObject("page", "currentFilm");
		mav.addObject("contentCSS", "movie/currentFilm");
		mav.addObject("contentjs", "movie/currentFilm");
		mav.addObject("CurrentFilmDTO", currentFilmDTO);
		mav.addObject("filmNum", filmNum);
		return mav;
	}
/*******연종. MOVIE CURRENT FIRM 현재상영작*******/		
	public ModelAndView screeningsPlanned() throws Exception{
		ModelAndView mav = this.getTemplate();
		
		List<MovieScreeningsPlannedDTO> screeningsPlannedDTO = this.dbService.getPlannedFilmDTO();
		Integer filmNum = screeningsPlannedDTO.size();
		System.out.println("Mainservice DTO.size 갯수  >> " + filmNum);
		//TEST
		for(MovieScreeningsPlannedDTO list : screeningsPlannedDTO) {
			System.out.println(list.getMovieTitle());
		}
		//TODO 지금은 이름 오름차순 이지만 나중엔 예매율순으로 바꿀꺼!
		mav.addObject("directory", "movie");
		mav.addObject("page", "screeningsPlanned");
		mav.addObject("contentCSS", "movie/screeningsPlanned");
		mav.addObject("contentjs", "movie/screeningsPlanned");
		mav.addObject("ScreeningsPlannedDTO", screeningsPlannedDTO);
		mav.addObject("filmNum", filmNum);
		return mav;
	}
//------------------------------------------------------------------------
/*******연종. THEATER wayToCome.jsp 오시는길*******/	
	public ModelAndView wayToCome() throws Exception{
		ModelAndView mav = this.getTemplate();
		mav.addObject("directory", "theater");
		mav.addObject("page", "wayToCome");
		mav.addObject("contentCSS", "theater/wayToCome");
		mav.addObject("contentjs", "theater/wayToCome");
		return mav;
	}
/*******연종. THEATER introduce.jsp 극장소개*******/	
	public ModelAndView introduce() throws Exception{
		ModelAndView mav = this.getTemplate();
		mav.addObject("directory", "theater");
		mav.addObject("page", "introduce");
		mav.addObject("contentCSS", "theater/introduce");
		mav.addObject("contentjs", "theater/introduce");
		return mav;
	}
//------------------------------------------------------------------------
/*******연종. SERVICE notice.jsp 공지사항*******/	
	public ModelAndView notice() throws Exception{
		ModelAndView mav = this.getTemplate();
		mav.addObject("directory", "service");
		mav.addObject("page", "notice");
		mav.addObject("contentCSS", "service/notice");
		mav.addObject("contentjs", "service/notice");
		return mav;
	}
}
