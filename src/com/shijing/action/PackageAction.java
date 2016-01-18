package com.shijing.action;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.shijing.bean.TbPackage;
import com.shijing.service.PackageManager;

//套餐相关操作
public class PackageAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	// 定义response对象
		private HttpServletResponse response;
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

	//套餐列表
	public void packageList() throws IOException{
		packageList=packageManager.getPackageList();
		response = (HttpServletResponse) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_RESPONSE);
		JSONArray jsonArray = JSONArray.fromObject(packageList);
		response.setHeader("content-type", "text/html;charset=utf-8");
		response.getWriter().print(jsonArray);
	}

	//添加套餐
	public void packageAdd() throws IOException{
		HttpServletRequest request=(HttpServletRequest) ActionContext.getContext().get(org.apache.struts2.StrutsStatics.HTTP_REQUEST);
		HttpServletResponse response = (HttpServletResponse) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_RESPONSE);
		String priceString=request.getParameter("price");
		String infoString=request.getParameter("info");
		String photoString=request.getParameter("photoUrl");
		
		String str=packageManager.addPackage(priceString,infoString,photoString);
		System.out.println(str);
		response.getWriter().print(str);
	}
}
