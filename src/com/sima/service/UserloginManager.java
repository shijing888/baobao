package com.sima.service;

public interface UserloginManager {

	public String checkUserNameAndPwd(String userName,String pwd);
	public String updatePwd(String userName, String oldPwd, String newPwd);
}
