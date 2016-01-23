package com.sima.action;

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

	public String userLogin() {
		request = (HttpServletRequest) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_REQUEST);
		String userName = request.getParameter("username");
		String pwd = request.getParameter("password");
		String str = userloginManager.checkUserNameAndPwd(userName, pwd);
System.out.println(str);
		return "success";

	}

}
