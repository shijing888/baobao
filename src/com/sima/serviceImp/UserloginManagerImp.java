package com.sima.serviceImp;

import com.sima.dao.UserloginDao;
import com.sima.service.UserloginManager;

public class UserloginManagerImp implements UserloginManager {

	private UserloginDao baseDao;

	public void setBaseDao(UserloginDao baseDao) {
		this.baseDao = baseDao;
	}

	@Override
	public String checkUserNameAndPwd(String userName, String pwd) {
		// TODO Auto-generated method stub
		return baseDao.checkUserNameAndPwd(userName, pwd);
	}

	@Override
	public String modifyPwd(String userName, String originPwd, String newPwd) {
		// TODO Auto-generated method stub
		return baseDao.pwdModify(userName,originPwd,newPwd);
	}
	
}
