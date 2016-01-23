package com.shijing.dao;

import java.util.List;

import com.shijing.bean.TbComment;


public interface BaobaoDao {

	//获取comment
	List<TbComment> commentShow();

	//添加评论
	void commentAdd(String ordersn, String content);

	
}
