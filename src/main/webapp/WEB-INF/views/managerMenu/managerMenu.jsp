<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="js_managerContainer manager">
	<div class="manager__menu">
		<div class="js_managerMemberMenu manager__menu__member">
			회 원 관 리
		</div>
		<div class="js_managerReserveMenu manager__menu__member">
			예 매 관 리
		</div>
<!-- 		<div class="js_managerSalesMenu manager__menu__member">
			매 출 관 리
		</div> -->
	</div>
	<div class="js_managerBody manager__body">
		<jsp:include page="./managerMemberMenu.jsp"></jsp:include>
	</div>
</div>