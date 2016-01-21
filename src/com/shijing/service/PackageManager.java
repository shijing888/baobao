package com.shijing.service;

import java.util.List;

import com.shijing.bean.TbPackage;

public interface PackageManager {

	// 获取所有套餐
	List<TbPackage> getPackageList();

	// 添加套餐
	String addPackage(String priceString, String infoString, String photoString);

	// 查询套餐
	List<TbPackage> queryPackage(Integer pcId);

	// 删除套餐
	String deletePackage(Integer pcId);

	// 更新套餐
	String updatePacekage(Integer pcId, String priceString,
			String currentPriceString, String infoString, String photoUrlString);

}
