package com.shijing.action;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.shijing.bean.TbComment;
import com.shijing.service.BaobaoManager;

public class BaobaoNameAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	HttpServletRequest request = null;
	HttpServletResponse response = null;
	
	private BaobaoManager baobaoManager;
	
	public void setBaobaoManager(BaobaoManager baobaoManager) {
		this.baobaoManager = baobaoManager;
	}

	//显示评论
	public void showComment() throws IOException{
//		HttpServletRequest request = (HttpServletRequest) ActionContext
//				.getContext()
//				.get(org.apache.struts2.StrutsStatics.HTTP_REQUEST);
	    response = (HttpServletResponse) ActionContext
				.getContext().get(
						org.apache.struts2.StrutsStatics.HTTP_RESPONSE);
		
		List<TbComment> list=null;
		list=baobaoManager.getComment();
		if(list.size()!=0){
			JSONArray jsonArray = JSONArray.fromObject(list);
			response.setHeader("content-type", "text/html;charset=utf-8");
			response.getWriter().print(jsonArray);
		}
	}
	
	//添加评论
	public String addComment(){
	    request = (HttpServletRequest) ActionContext
				.getContext()
				.get(org.apache.struts2.StrutsStatics.HTTP_REQUEST);
		try {
			String ordersn=request.getParameter("ordersn");
			String content=request.getParameter("content");
			baobaoManager.submitComment(ordersn,content);
			return "success";
		} catch (Exception e) {
			// TODO: handle exception
			return "error";
		}
		
	}
}
