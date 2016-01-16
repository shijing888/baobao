package com.shijing.serviceImp;

import com.shijing.dao.PackageDao;
import com.shijing.service.PackageManager;

public class PackageManagerImp implements PackageManager {

	private PackageDao baseDao;

	public void setBaseDao(PackageDao baseDao) {
		this.baseDao = baseDao;
	}
	
}
