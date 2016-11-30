<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="stylesheet" href="/resources/css/managerMenu/managerMemberMenu.css">
<script async="async" type="text/javascript" src="/resources/js/managerMenu/managerMemberMenu.js"></script>
<div class="js_memberContainer member-management">
	<div class="member-management__find">
		<div class="member-management__find__id-div">
			<span class="member-management__find__label">아이디</span>

			<input class="js_searchUserID member-management__find__input" type="text"/>
		</div>
		<div class="member-management__find__name-div">
			<span class="member-management__find__label">이름</span>
			<input class="js_searchUserName member-management__find__input" type="text"/>
		</div>
		<div class="member-management__find__birth-div">
			<span class="member-management__find__label">생년월일</span>
			<input class="js_searchUserBirth member-management__find__input" type="date"/>
		</div>
		<div class="member-management__find__btn-div">
			<button class="js_searchMemberInfoBtn" type="button">
				검색
			</button>
		</div>
	</div>
	<div class="member-management__label member-management__tr">
		<span class="member-management__id member-management__td user-label member-management__align-center">아이디</span>
		<span class="member-management__name member-management__td user-label member-management__align-center">이름</span>
		<span class="member-management__birth member-management__td user-label member-management__align-center">생년월일</span>
		<span class="member-management__gender member-management__td user-label member-management__align-center">성별</span>
		<span class="member-management__email member-management__td user-label member-management__align-center">이메일</span>
		<span class="member-management__regdate member-management__td user-label member-management__align-center">가입일자</span>
		<span class="member-management__status member-management__td user-label member-management__align-center">상태</span>
		<span class="member-management__modify member-management__td user-label member-management__align-center">변경</span>
	</div>
	<c:forEach items="${userInfoPaging}" var="member">
		<div class="member-management__data member-management__tr">
			<span class="member-management__id member-management__td member-management__align-center">${member.userID }</span>
			<span class="member-management__name member-management__td member-management__align-center">${member.userName }</span>
			<span class="member-management__birth member-management__td member-management__align-center">${member.userBirth }</span>
			<span class="member-management__gender member-management__td member-management__align-center">${member.userGender }</span>
			<span class="member-management__email member-management__td member-management__align-center">${member.userEmail }</span>
			<span class="member-management__regdate member-management__td member-management__align-center">${member.userRegdate }</span>
			<span class="member-management__status member-management__td member-management__align-center">${member.userStatus }</span>
			<span class="member-management__modify member-management__td member-management__align-center">
				<c:choose>
					<c:when test="${member.userStatus == '정상' }">
						<button class="js_managerWithdrawal" type="button" data-user-id="${member.userID }">
							탈퇴
						</button>
					</c:when>
					<c:otherwise>
						<button class="js_managerRestore " type="button" data-user-id="${member.userID }">
							복구
						</button>					
					</c:otherwise>
				</c:choose>
			</span>
		</div>
	</c:forEach>
	
	<div class="mainCurrentPaingNumber">
		<c:if test="${infoMainBoardPage.isPreButton() }"><span class = "js_mainPaingPagePreButton" data-userInfoMainPrePage="${infoMainBoardPage.viewStartPageNum -1 }" >◀</span></c:if>
			<c:forEach begin="${infoMainBoardPage.viewStartPageNum }" end="${infoMainBoardPage.viewEndPageNum }" var="page"> 
				<span>
					<c:choose>
						<c:when test="${checkPage == page }">
							<label class="mainCurrentPaingNumber--active js_mainCurrentPaingNumber">${page }</label>
						</c:when>
						<c:otherwise>
							<label class="js_mainPagingNumber">${page }</label>
						</c:otherwise>
					</c:choose>
				</span>
			</c:forEach>
		<c:if test="${infoMainBoardPage.isNextButton() }"><span class="js_mainPaingNextButton" data-userInfoMainNextPage="${infoMainBoardPage.viewEndPageNum + 1 }">▶</span></c:if>
		
	</div>
</div>