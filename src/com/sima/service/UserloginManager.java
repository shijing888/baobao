package com.sima.service;

public interface UserloginManager {

	//ÓÃ»§µÇÂ¼
	public String checkUserNameAndPwd(String userName,String pwd);
	//ĞŞ¸ÄÃÜÂë
	public String modifyPwd(String userName, String originPwd, String newPwd);
}
