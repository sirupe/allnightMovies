<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:choose>
	<c:when test="${ischeckConfirmNum }">
		<label class="div-searchpwd-confirm-true">${resultMsg }</label>
	</c:when>
	<c:otherwise>
		<label class="div-searchpwd-confirm-false">${resultMsg }</label>
	</c:otherwise>
</c:choose>
<input id="${ischeckConfirmNumID }" type="hidden" value="${ischeckConfirmNum }">