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
import com.shijing.bean.TbComment;
import com.shijing.service.BaobaoManager;
import com.shijing.service.CommentManager;

public class CommentAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	HttpServletRequest request = null;
	HttpServletResponse response = null;

	private CommentManager commentManager;

	public void setCommentManager(CommentManager commentManager) {
		this.commentManager = commentManager;
	}

	// 评论列表
	public void commentList() throws IOException {

	}

	// 根据选择查询评论
	public void commentDisplay() throws IOException {
		request = (HttpServletRequest) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_REQUEST);
		response = (HttpServletResponse) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_RESPONSE);
		Integer pageInteger = Integer.parseInt(request.getParameter("page"));
		Integer sizeInteger = Integer
				.parseInt(request.getParameter("pagesize"));
		Integer start = (pageInteger - 1) * sizeInteger;
		List<TbComment> list = commentManager.showComment(start, sizeInteger);
		Integer integer = commentManager.sumComment();
		
		// 将时间戳转换为字符串
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");// 定义格式，不显示毫秒
		Timestamp now ;
		List<String>time=new ArrayList<String>();
		
		for (int i = 0; i < list.size(); i++) {
             now=list.get(i).getComTime();
             String str = df.format(now);
             time.add(str);
		}

		ArrayList<Object> arrayList = new ArrayList<Object>();
		arrayList.add(list);
		arrayList.add(integer);
		arrayList.add(time);
		if (list.size() != 0) {
			JSONArray jsonArray = JSONArray.fromObject(arrayList);
			response.setHeader("content-type", "text/html;charset=utf-8");
			response.getWriter().print(jsonArray);
		}
	}

	
	//删除评论
	public void deleteComment() throws IOException{
		request = (HttpServletRequest) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_REQUEST);
		response = (HttpServletResponse) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_RESPONSE);
		
		Integer deleteNo=Integer.parseInt(request.getParameter("deleteNo"));
		String result=commentManager.commentDelete(deleteNo);
		response.getWriter().print(result);
	}
	
	//评论通过
	public void passComment() throws IOException{
		request = (HttpServletRequest) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_REQUEST);
		response = (HttpServletResponse) ActionContext.getContext().get(
				org.apache.struts2.StrutsStatics.HTTP_RESPONSE);
		
		Integer passNo=Integer.parseInt(request.getParameter("cid"));
		String result=commentManager.commentPass(passNo);
		response.getWriter().print(result);
	}
}
