package com.allnightMovies.utility;

import lombok.Data;

@Data
public class Paging2 {
	//private int pageNum; 		//page 번호 1,2,3,...
	private int pageList; 		//한페이지당 뿌려질 list 갯수
	private int totalList; 		//전체 리스트 수  	
	private int startPageNum; 	//시작페이지 번호
	private int endPageNum;		//마지막 페이지 번호
	private int clickedPageNum; // 사용자가 누른 페이지 번호
	private int startPageList;  //  1  | 16 | 31 | ... start list
	private int endPageList;    //  15 | 30 | 45 | ...
	private int pageBlockNum;	//한 블럭에 보여질 수   ◀ ◁ 6 7 8 9 10 ▷ ▶
	private int startPageBlock; //한 블럭에 시작하는 page 숫자 = 6
	private int endPageBlock;	//한 블럭에 마지막 page 숫자 = 10
	
	public void makePaging(int totalList, int clickedPageNum, int pageList, int pageBlockNum) {
//		this.pageList = 10;		//한페이지당 뿌려질 list 갯수	
		this.startPageNum = 1;	//시작페이지 번호
//		this.pageBlockNum = 10;  //한 블럭에 보여질 수
		
		//마지막 페이지 
		int endPage = (totalList + (pageList - 1)) / pageList; 
		this.endPageNum = endPage;
		
		//사용자가 클릭한 page에서 보여질 리스트 시작값(startPageList)과 리스트 마지막 값(endPageList)
		int endPageList = (clickedPageNum * pageList) < totalList ? 
				(clickedPageNum * pageList) : totalList;
		int startPageList = (pageList * (clickedPageNum - 1)) +1;
		
		this.endPageList = endPageList;
		this.startPageList = startPageList;
		
		// -1 은 예를들어 17 페이지가 일대 18 을 보여주는 것을 막음
		// +1 을 해주는 것은 1~5/6~10 이 보여져야 하는데  1~5/5~10 이렇게 나올 경우를 막음
		int startPageBlock = (((clickedPageNum-1) / pageBlockNum) * pageBlockNum + 1);
		
		int endPageBlock = startPageBlock + (pageBlockNum - 1);
		if(endPageBlock > endPage) {
			endPageBlock = endPage;
		}
		
		this.startPageBlock = startPageBlock;
		this.endPageBlock = endPageBlock;
	}

}
