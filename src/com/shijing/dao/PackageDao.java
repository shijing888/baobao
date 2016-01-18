package com.shijing.dao;

import java.util.List;

import com.shijing.bean.TbPackage;

public interface PackageDao {

	//²éÑ¯ËùÓÐÌ×²Í
	List<TbPackage> packageList();

	String packageAdd(String priceString, String infoString, String photoString);

}
