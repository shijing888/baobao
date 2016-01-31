package com.sima.action;

import java.io.IOException;


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

	// 用户登录
	public void userLogin() throws IOException {
		request = (HttpServletRequest) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_REQUEST);
		response = (HttpServletResponse) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_RESPONSE);
		String userName = request.getParameter("username");
		String pwd = request.getParameter("password");
		String str = userloginManager.checkUserNameAndPwd(userName, pwd);
		if (str == "success") {
			request.getSession().setAttribute("userName", userName);
		}
		response.getWriter().print(str);

	}

	// //判断管理员是否登录
	// public String isLogin(){
	// if(request.getSession().getAttribute("userName")==null){
	//
	// }
	// }
}
