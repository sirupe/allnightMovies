<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
	<jsp:include page="./include/head.jsp"/>
  
	<body>
		<form class="js_form">
			<input type="hidden" name="contentCSS" id="hidden-css"/>
			<input type="hidden" name="contentjs" id="hidden-js"/>
			<input type="hidden" name="directory" id="hidden-dir"/>
			<input type="hidden" name="page" id="hidden-page"/>
			<input class="js_hiddenParam" type="hidden" name="params"/> 
			
			<div class="container">
				<header class="header">
					<jsp:include page="./include/header/title.jsp"/>					
					<jsp:include page="./include/header/titleMenu.jsp"/>
						
				</header>
				
				<section class="content">
					<c:choose>
						<c:when test="${directory == '' || directory == null}">
							<article class="content__body">
								<jsp:include page="./${main.mainMenuPage}/${sub}.jsp"/>
							</article>
						</c:when>
						<c:otherwise>
							<article class="content__body">
								<jsp:include page="./${directory}/${page}.jsp"/>
							</article>
						</c:otherwise>
					</c:choose> 
				</section> 
				<footer class="footer">
		
					<jsp:include page="./include/footer.jsp"></jsp:include>
				</footer>
			</div>
		</form>
	</body>
	
	<script type="text/javascript" src="/resources/js/template.js"></script>
	<c:if test="${contentjs != '' && contentjs != null}">
		<script type="text/javascript" src="/resources/js/${contentjs}.js"></script>
	</c:if>
</html>