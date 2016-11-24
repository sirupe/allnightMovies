package com.allnightMovies.utility;

import lombok.Data;

@Data
public class Paging {

	
	private int startPageNum; //처음페이지
	private int endPageNum; //마지막 페이지
	private int userClickPageNum; // 사용자가 누른 페이지
	private int viewPageNum; //목록에 보여질 번호수..? 밑에 페이지 - >5개
	private int boardListCount; //목록에 보여줄 게시판 갯수 - >7개
	private int totalPageCount; //총 페이지 갯수
	private int totalListCount; //총 게시글 갯수
	private int viewStartPageNum; //사용자에게 보여질 페이지 중 첫번째 번호
	private int viewEndPageNum; //사용자에게 보여질 페이지중 마지막 번호
	
	//이전, 다음 버튼
	private boolean isPreButton =  false; //이전버튼
	private boolean isNextButton = true; //다음 버튼
	
	public Paging(int totalListCount, int boardListCount, int userClickPageNum, int viewPageNum) {
		this.totalListCount   = totalListCount; //총글의 갯수
		this.boardListCount   = boardListCount; // 페이지당 보여질 게시글 갯수
		this.userClickPageNum = userClickPageNum; // 사용자가 누른 글
		this.viewPageNum      = viewPageNum; // 몇개 번호를 나열?할 것인가. 
	}
	
	
	public void setBoardPaging() {
		//총 페이지 수
		this.totalPageCount = (this.totalListCount + (this.boardListCount - 1)) / this.boardListCount;
	
		//사용자가 2페이지를 누르면  => (7 * (2-1)) + 1 = 8번 부터~
		//사용자가 3페이지를 누르면  => (7 * (3-1)) + 1 = 15번 부터~
		this.startPageNum = (this.boardListCount * (this.userClickPageNum -1)) + 1;
		
		//마지막 번호수
		this.endPageNum   = (this.userClickPageNum * this.boardListCount) < this.totalListCount ?
								(this.userClickPageNum * this.boardListCount) : this.totalListCount;
		
								
		//1-5페이지 목록 - > 5개씩 이니깐 총 25개
		this.viewStartPageNum = ((this.userClickPageNum - 1) / this.viewPageNum) * this.viewPageNum + 1;
		
		System.out.println(viewStartPageNum + " : paging에서 startnum");
		this.viewEndPageNum = (this.viewStartPageNum + this.viewPageNum - 1) > this.totalPageCount ?
				this.totalPageCount :  (this.viewStartPageNum + this.viewPageNum) - 1;
								
		System.out.println(viewEndPageNum + " : paing에서 ends");
		if(this.viewStartPageNum > this.viewPageNum) {
			this.isPreButton = true;
		}
		
		if(this.viewEndPageNum == this.totalPageCount) {
			this.isNextButton = false;
		}
	}
}
