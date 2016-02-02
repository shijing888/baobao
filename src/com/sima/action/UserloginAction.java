package com.sima.action;

import java.io.IOException;


import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.sima.service.UserloginManager;

public class UserloginAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private UserloginManager userloginManager;

	HttpServletRequest request = null;
	HttpServletResponse response = null;

	public void setUserloginManager(UserloginManager userloginManager) {
		this.userloginManager = userloginManager;
	}

	// ÓÃ»§µÇÂ¼
	public void userLogin() throws IOException {
		request = (HttpServletRequest) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_REQUEST);
		response = (HttpServletResponse) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_RESPONSE);
		String userName = request.getParameter("username");
		String pwd = request.getParameter("password");
		String str = userloginManager.checkUserNameAndPwd(userName, pwd);
		if (str == "success") {
			Cookie cookie=new Cookie("userName", userName);
			cookie.setMaxAge(2*60*60);
			response.addCookie(cookie);
			request.getSession().setAttribute("userName", userName);
		}
		response.getWriter().print(str);

	}

	//ÐÞ¸ÄÃÜÂë
	public void userModifyPwd() throws IOException{
		request = (HttpServletRequest) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_REQUEST);
		response = (HttpServletResponse) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_RESPONSE);
		String userName = request.getParameter("uname");
		String originPwd = request.getParameter("originPwd");
		String newPwd = request.getParameter("newPwd");
		String str=userloginManager.modifyPwd(userName,originPwd,newPwd);
		response.getWriter().print(str);
	}
}
