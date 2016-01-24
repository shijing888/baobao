package com.shijing.dao;

import java.util.List;

import com.shijing.bean.TbComment;


public interface CommentDao {

	//评论列表
	List<TbComment> commentList(Integer start, Integer sizeInteger, Integer flag);

	//评论总数
	Integer commentSum();

	//删除评论
	String deleteComment(Integer deleteNo);

	//通过评论
	String passComment(Integer passNo);

	
}
