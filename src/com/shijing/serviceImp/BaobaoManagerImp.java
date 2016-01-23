package com.shijing.serviceImp;

import java.util.List;

import com.shijing.bean.TbComment;
import com.shijing.dao.BaobaoDao;
import com.shijing.service.BaobaoManager;


public class BaobaoManagerImp implements BaobaoManager {

	private BaobaoDao baobaoDao;	

	public void setBaobaoDao(BaobaoDao baobaoDao) {
		this.baobaoDao = baobaoDao;
	}

	@Override
	public List<TbComment> getComment() {
		// TODO Auto-generated method stub
		return baobaoDao.commentShow();
	}

	@Override
	public void submitComment(String ordersn, String content) {
		// TODO Auto-generated method stub
		baobaoDao.commentAdd(ordersn,content);
	}

	
}
