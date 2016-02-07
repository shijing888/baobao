package com.shijing.action;

import java.io.IOException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.shijing.bean.TbOrderdetail;
import com.shijing.service.OrderManager;

public class OrderAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	HttpServletRequest request = null;
	HttpServletResponse response = null;

	private OrderManager orderManager;

	public void setOrderManager(OrderManager orderManager) {
		this.orderManager = orderManager;
	}

	//删除订单
	public void orderDelete() throws IOException{
		request = (HttpServletRequest) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_REQUEST);
		response = (HttpServletResponse) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_RESPONSE);
		Integer oId = Integer.parseInt(request.getParameter("id"));
		String str = orderManager.deleteOrder(oId);
		response.setHeader("content-type", "text/html;charset=utf-8");
		response.getWriter().print(str);
	}
	//搜索订单
	public void searchOrder() throws IOException{
		request = (HttpServletRequest) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_REQUEST);
		response = (HttpServletResponse) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_RESPONSE);

		Integer pageSize=Integer.parseInt(request.getParameter("pageSize"));
		Integer flag=Integer.parseInt(request.getParameter("flag"));
		String searchWord=request.getParameter("searchWords");
		List<TbOrderdetail> list = orderManager.orderSearch(pageSize,flag,searchWord);System.out.println(list);
		ArrayList<Object> arrayList=new ArrayList<Object>();
		// 将时间戳转换为字符串
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");// 定义格式，不显示毫秒
		Timestamp now;
		List<String> time = new ArrayList<String>();

		for (int i = 0; i < list.size(); i++) {
			now = list.get(i).getOrderTime();
			String str = df.format(now);
			time.add(str);
		}
		arrayList.add(list);
		arrayList.add(time);
		JSONArray jsonArray = JSONArray.fromObject(arrayList);
		response.setHeader("content-type", "text/html;charset=utf-8");
		response.getWriter().print(jsonArray);
	}
	//获取订单列表
	public void getOrderList() throws IOException {
		request = (HttpServletRequest) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_REQUEST);
		response = (HttpServletResponse) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_RESPONSE);

		Integer page=Integer.parseInt(request.getParameter("page"));
		Integer pageSize=Integer.parseInt(request.getParameter("pageSize"));
		List<TbOrderdetail> list = orderManager.orderList(page,pageSize);System.out.println(list);
		ArrayList<Object> arrayList=new ArrayList<Object>();
		// 将时间戳转换为字符串
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");// 定义格式，不显示毫秒
		Timestamp now;
		List<String> time = new ArrayList<String>();

		for (int i = 0; i < list.size(); i++) {
			now = list.get(i).getOrderTime();
			String str = df.format(now);
			time.add(str);
		}
		arrayList.add(list);
		arrayList.add(time);
		JSONArray jsonArray = JSONArray.fromObject(arrayList);
		response.setHeader("content-type", "text/html;charset=utf-8");
		response.getWriter().print(jsonArray);
	}
}
