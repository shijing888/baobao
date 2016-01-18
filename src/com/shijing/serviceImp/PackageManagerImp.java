package com.shijing.serviceImp;

import java.util.List;

import com.shijing.bean.TbPackage;
import com.shijing.dao.PackageDao;
import com.shijing.service.PackageManager;

public class PackageManagerImp implements PackageManager {

	private PackageDao baseDao;

	public void setBaseDao(PackageDao baseDao) {
		this.baseDao = baseDao;
	}

	@Override
	public List<TbPackage> getPackageList() {
		// TODO Auto-generated method stub
		return baseDao.packageList();
	}

	@Override
	public String addPackage(String priceString, String infoString,
			String photoString) {
		// TODO Auto-generated method stub
		return baseDao.packageAdd(priceString,infoString,photoString);
	}
	
}
