package com.sima.dao;

public interface UserloginDao {

	public String checkUserNameAndPwd(String userName,String pwd);
	public String updatePwd(String userName, String oldPwd, String newPwd);
}
