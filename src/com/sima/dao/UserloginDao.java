package com.sima.dao;

public interface UserloginDao {

	//ÓÃ»§µÇÂ¼
	public String checkUserNameAndPwd(String userName,String pwd);
	//ĞŞ¸ÄÃÜÂë
	public String pwdModify(String userName, String originPwd, String newPwd);
}
