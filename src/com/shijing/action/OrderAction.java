package com.shijing.action;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
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


	//提交订单
	public void submitOrder() throws IOException{
		request = (HttpServletRequest) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_REQUEST);
		response = (HttpServletResponse) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_RESPONSE);
		
		//获取form表单信息
		//String serviceName=request.getParameter("serviceName");
		String orderId=request.getParameter("orderId");
		String name=request.getParameter("name");
		String birthdate=request.getParameter("birthdate");
		String gender=request.getParameter("gender");
		String qmzishu=request.getParameter("qmzishu");
		String birthplace=request.getParameter("birthplace");
		String optionRemedy=request.getParameter("optionRemedy");
		String forbiddenWord=request.getParameter("forbiddenWord");
		String specifyGeneration=request.getParameter("specifyGeneration");
		String email=request.getParameter("email");
		String telePhone=request.getParameter("telePhone");
		String qq=request.getParameter("qq");
		String money=request.getParameter("money");
		
		List<String>list=new ArrayList<>();
		list.add(orderId);
		list.add(name);
		list.add(birthdate);
		list.add(gender);
		list.add(qmzishu);
		list.add(birthplace);
		list.add(optionRemedy);
		list.add(forbiddenWord);
		list.add(specifyGeneration);
		list.add(email);
		list.add(telePhone);
		list.add(qq);
		list.add(money);
		request.setAttribute("list", list);
		response.getWriter().print("ss");
		
	//System.out.println(serviceName);	
	System.out.println(name);	
	System.out.println(qmzishu);	
	System.out.println(forbiddenWord);	
	
		
		
	}
}
