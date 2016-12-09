package com.allnightMovies.utility;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
public class FileUpload extends HttpServlet {
	
	private static final long serialVersionUID = 192357293;

	public String fileUpload(HttpServletRequest request, String uploadPath) throws IOException {
		// getServletContext().getRealPath("/");
		//	- 파일 업로드 위치가 현재 서비스가 돌아가고 있는 서블릿 내에 위치할 때
		//	    구동중인 서블릿의 경로를 반환한다. (만약 웹서비스가 "C:\web\WebContents" 에서 구동중이라면 해당 경로를 반환한다.)
		String path = "C:/Users/은정/Desktop/movie";
		
		// 업로드 가능한 최대 사이즈 설정
		int maxSize = 1024 * 1024 * 100;
		
		// DefaultFileRenamePolicy()는 같은 파일명이 있는지를 검사하고 있을 경우에는 파일명뒤에 숫자를 붙혀준다. 
		// multipartRequest 에 인자값으로 
		// request객체와, 얻어온 서블릿 pash, 최대사이즈, 인코딩정보, DefaultFileRenamePolicy() 를 넘겨주며 생성.
		MultipartRequest multipartRequest = new MultipartRequest(
												request, 
												path, 
												maxSize, 
												"UTF-8", 
												new DefaultFileRenamePolicy());
		
		// 파일 업로드 폼을 작성하고 있는 html 코드의 <input type="file" ==> 태그의 이름과 일치하여야 한다.
		// html 폼태그에서 넘어온 file이 저장된다.
		File upFile = multipartRequest.getFile("file");

		// fileName 은 저장될 파일 이름. 
		// 일반적으로 서버에서 업로드시킨 파일의 이름과 동일하게 저장하지 않는다.
		String fileName = System.currentTimeMillis() + upFile.getName();
		
		// savePath는 업로드시 저장될 서버의 경로.
		String savePath = "/resources/img/" + uploadPath;	
		
		// 서버에 저장할 파일 객체. (새로 만들어줘야 한다.)
		File saveFile = new File(savePath + fileName);
		
		// 파일은 바이트형태이기 때문에 전송을 위한 바이트 배열 객체를 생성하고 
		// 파일인풋스트림에서 읽어들인 upFile 객체를 파일아웃풋 스트림의 saveFile 객체에 저장한다. (복사한다?)
		byte[] buf = new byte[1024];
		FileInputStream fileInput = new FileInputStream(upFile);
		FileOutputStream fileOutput = new FileOutputStream(saveFile);
		int read = 0;
		
		// 파일이 끝나면 -1이 반환되므로 -1 값이 들어오기 전까지 읽어들인다.
		while((read = fileInput.read(buf, 0, buf.length)) != -1) {
			fileOutput.write(buf, 0, read);
		}
		
		// 정상적으로 파일쓰기 작업이 끝나면 두 스트림을 닫아준다. 이것으로 파일 업로드 작업은 끝.
		fileInput.close();
		fileOutput.close();
		
		
		// 이 부분에서 디비에 파일 경로 등을 저장.
		return fileName;
	}
}
