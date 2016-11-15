<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:choose>
	<c:when test="${resultBool }">
		<label style="color: green;" class="join__idCheck">
			${result }
		</label>
	</c:when>
	<c:otherwise>
		<label style="color: red;">
			${result }
		</label>
	</c:otherwise>
</c:choose>
<input type="hidden" value="${resultBool }" id="${resultBoolID }"/>