package com.allnightMovies.service;

import java.util.regex.Pattern;

import org.springframework.stereotype.Service;

@Service
public class RegexCheck {
	// 이메일 형식체크. 형식에 맞으면 true, 형식에 맞지 않으면 false return
	// (아이디@사이트.com 의 형식)
	public static boolean emailRegexCheck(String email) {
		String regex = "^[0-9a-zA-Z]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$";
		return Pattern.matches(regex, email);
	}

	// (사이트.com 형식 체크)
	public static boolean emailDomainRegexCheck(String domain) {
		String regex = "^[\\.a-zA-Z0-9-]+\\.[a-zA-Z]+$";
		return Pattern.matches(regex, domain);
	}
	
	// 아이디 형식체크. 형식에 맞으면 true, 형식에 맞지 않으면 false return
	// (영문자+숫자 조합의 형식. 영문자만으로는 가능하나 숫자만으로는 불가능하다.)
	public static boolean idRegexCheck(String id) {
		String regex = "^[a-zA-Z0-9]*$";
		boolean result = Pattern.matches(regex, id);
		if(Pattern.matches("^[0-9]*$", id)) {
			result = false;
		}
		return result;
	}
	
	// 비밀번호 형식체크. 형식에 맞으면 true, 형식에 맞지 않으면 false return
	// (영문자 + 숫자 + 특수문자 1개 이상씩 포함. 6~16 자 이내의 글자수만 true.
	public static boolean passwdRegexCheck(String passwd) {
		String regex = "^(?=.*[~`!@%$%\\^&*()-])(?=.*[0-9])(?=.*[a-zA-Z]).{6,16}$";
		return Pattern.matches(regex, passwd);
	}
	
	// 이름 형식체크. 형식에 맞으면 true, 형식에 맞지 않으면 false return
	// (한글만 true 반환.)
	public static boolean nameRegecCheck(String name) {
		String regex = "^([ㄱ-ㅎ가-힣])*$";
		return Pattern.matches(regex, name);
	}
}
