package com.shijing.action;

import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
import com.shijing.bean.TbPackage;
import com.shijing.service.PackageManager;

//套餐相关操作
public class PackageAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
    //packageManager注入
	private PackageManager packageManager;
	//保存查询的套餐数据
	private List<TbPackage>packageList;
	public List<TbPackage> getPackageList() {
		return packageList;
	}
	public void setPackageManager(PackageManager packageManager) {
		this.packageManager = packageManager;
	}
	
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		return super.execute();
	}

	public void packageList(){
		packageList=packageManager.getPackageList();
		System.out.println(packageList);
	}

	
}
