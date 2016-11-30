package com.allnightMovies.model.data.cinemaInfo;

import lombok.Data;

@Data
public class CinemaQuestionBoardDTO {
	private String no;
	private String title;
	private String content;
	private String user_Id;
	private String write_date;
	
	private Integer writePwd;
	private int isPwd;
	
	
	private String rnum;
	
	private String replyNo; //부모와의 번호와 같아야한다.
	private String replyDepth; //글 들여쓰기
	private String replyStep; //글정렬
	
	private String  writeStatus;
	
	
	


}
