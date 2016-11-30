package com.allnightMovies.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.allnightMovies.model.params.Params;

@RestController
public class FileUploadController {
	@RequestMapping(value="/movie/fileUpload", method = {RequestMethod.GET, RequestMethod.POST})
	public ModelAndView fileUpload(Params params, MultipartHttpServletRequest multipartReq) {
		System.out.println("적어도 여긴 와야지..");
		ModelAndView mav = new ModelAndView("template");

		String defaultDir = "C:/workspace/allnightMovies/src/main/webapp/WEB-INF/resources/img";
		MultipartFile file = multipartReq.getFile("file");
		String fileName = file.getOriginalFilename();
		
		try {
			byte[] b = file.getBytes();
			File saveFile = new File(defaultDir + System.currentTimeMillis() + fileName);
			FileOutputStream fos = new FileOutputStream(saveFile);
			fos.write(b);
			fos.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return mav;
	}
}
