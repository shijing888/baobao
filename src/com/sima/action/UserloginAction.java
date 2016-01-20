package com.sima.action;

import com.opensymphony.xwork2.ActionSupport;
import com.sima.service.UserloginManager;

public class UserloginAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	private UserloginManager userloginManager;
	public void setUserloginManager(UserloginManager userloginManager) {
		this.userloginManager = userloginManager;
	}
	
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		return super.execute();
	}
	
}
