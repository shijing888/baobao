package com.shijing.serviceImp;

import java.util.List;

import com.shijing.bean.TbComment;
import com.shijing.dao.CommentDao;
import com.shijing.service.CommentManager;


public class CommentManagerImp implements CommentManager {

     private CommentDao commentDao;

	public void setCommentDao(CommentDao commentDao) {
		this.commentDao = commentDao;
	}

	@Override
	public List<TbComment> showComment(Integer start, Integer sizeInteger,Integer flag) {
		return commentDao.commentList(start,sizeInteger,flag);
		// TODO Auto-generated method stub
		
	}

	@Override
	public Integer sumComment() {
		// TODO Auto-generated method stub
		return commentDao.commentSum();
	}

	@Override
	public String commentDelete(Integer deleteNo) {
		// TODO Auto-generated method stub
		return commentDao.deleteComment(deleteNo);
	}

	@Override
	public String commentPass(Integer passNo) {
		// TODO Auto-generated method stub
		return commentDao.passComment(passNo);
	}

	
}
