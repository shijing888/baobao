package com.shijing.service;

import java.util.List;

import com.shijing.bean.TbComment;

public interface CommentManager {

	//评论列表
	List<TbComment> showComment(Integer start, Integer sizeInteger, Integer flag);

	//评论总数
	Integer sumComment();

	//删除评论
	String commentDelete(Integer deleteNo);

	//通过评论
	String commentPass(Integer passNo);


}
