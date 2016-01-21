package com.shijing.dao;

import java.util.List;

import com.shijing.bean.TbPackage;

public interface PackageDao {

	// 查询所有套餐
	List<TbPackage> packageList();

	// 添加套餐
	String packageAdd(String priceString, String infoString, String photoString);

	// 查询套餐
	List<TbPackage> packageQuery(Integer pcId);

	// 删除套餐
	String packageDelete(Integer pcId);

	// 更新套餐
	String packageUpdate(Integer pcId, String priceString,
			String currentPriceString, String infoString, String photoUrlString);
}
