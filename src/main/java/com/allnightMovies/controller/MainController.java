package com.allnightMovies.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.servlet.ModelAndView;

import com.allnightMovies.di.Action;
import com.allnightMovies.model.data.MainMenu;
import com.allnightMovies.model.params.Params;
import com.allnightMovies.service.DBService;


@RestController
public class MainController {
	@Autowired
	DBService service;
	
	@RequestMapping(value="/")
	public ModelAndView controller() throws Exception {
		ModelAndView mav = new ModelAndView("template");
		List<MainMenu> list = this.service.getMenus();
		mav.addObject("directory", "include");
		mav.addObject("page", "mainPage");
		mav.addObject("list", list);
		
		
//		
//		try {
//			this.service.doTestInsert();
//		} catch (Throwable e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		
		
		return mav;
	}
	
	@RequestMapping(value="/movie/{service}/{method}", method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	public ModelAndView menuCliecked(
			@PathVariable("service") String service, 
			@PathVariable("method") String method, 
			Params params, 
			HttpServletRequest request) throws Throwable {

		HttpSession session = request.getSession();
		WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(session.getServletContext());
		Action action = (Action) context.getBean(service);
		params.setMethod(method);
		params.setRequest(request);
		params.setSession(session);
		ModelAndView mav = action.execute(params);
		
		return mav;
	}
	
// 이러한 방식의 controller 사용도 가능.
//	@RequestMapping(value="/")
//	public String controller(@RequestParam Map<String, String> map, ModelMap modelMap) {
//		modelMap.put("x", map.get("x"));
//		modelMap.put("y", map.get("y"));
//		return "/sum/result";
//	}
//	
//	@RequestMapping(value="/")
//	public String controller(@ModelAttribute UserPersonalInfoDTO userDTO, Model model) {
//		model.addAttribute("x", userDTO.getUserID());
//		model.addAttribute("y", userDTO.getUserPWD());
//		return "/sum/result";
//	}
}