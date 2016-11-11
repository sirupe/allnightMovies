<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<%
	System.out.println("template");
%>
<html>
	<jsp:include page="./include/head.jsp"/>
  
	<body>
		<form>
			<input type="hidden" name="contentCSS" id="hidden-css"/>
			<input type="hidden" name="contentjs" id="hidden-js"/>
			<input type="hidden" name="directory" id="hidden-dir"/>
			<input type="hidden" name="page" id="hidden-page"/>
			
			<div class="container">
				<header class="header">
					<jsp:include page="./include/header/titleMenu.jsp"/>
					<c:choose>
						<c:when test="${userID == null }">
							<jsp:include page="./include/header/login.jsp"/>					
						</c:when>
						<c:otherwise>
							<jsp:include page="./include/header/logon.jsp"/>
						</c:otherwise>
					</c:choose>
				</header>
				
				
				<section class="content">
					<c:choose>
						<c:when test="${directory == '' || directory == null}">
							<article>
								<jsp:include page="./include/section/subMenu.jsp"/>
							</article>
							<article class="content__body">
								<jsp:include page="./${main.mainMenuPage }/${sub }.jsp"/>
							</article>
						</c:when>
						<c:otherwise>
							<article class="content__body">
								<jsp:include page="./${directory }/${page }.jsp"/>
							</article>
						</c:otherwise>
						
					</c:choose> 
				</section> 
				<footer class="footer">
					푸터입니다.
				</footer>
			</div>
		</form>
	</body>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="/resources/js/template.js"></script>
	<c:if test="${contentjs != '' && contentjs != null }">
		<script type="text/javascript" src="/resources/js/${contentjs }.js"></script>
	</c:if>
</html>