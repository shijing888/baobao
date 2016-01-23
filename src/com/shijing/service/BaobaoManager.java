package com.shijing.service;

import java.util.List;

import com.shijing.bean.TbComment;

public interface BaobaoManager {

	//获取评论
	List<TbComment> getComment();

	//添加评论
	void submitComment(String ordersn, String content);

	

}
