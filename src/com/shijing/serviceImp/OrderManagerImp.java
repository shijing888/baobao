package com.shijing.serviceImp;


import java.util.List;

import com.shijing.bean.TbOrderdetail;
import com.shijing.dao.OrderDao;
import com.shijing.service.OrderManager;


public class OrderManagerImp implements OrderManager {

     private OrderDao orderDao;

	public void setOrderDao(OrderDao orderDao) {
		this.orderDao = orderDao;
	}

	@Override
	public List<TbOrderdetail> orderList(Integer page, Integer pageSize) {
		// TODO Auto-generated method stub
		return orderDao.getOrderList(page,pageSize);
	}

	@Override
	public List<TbOrderdetail> orderSearch(Integer pageSize, Integer flag,String searchWord) {
		// TODO Auto-generated method stub
		return orderDao.searchOrder(pageSize,flag,searchWord);
	}

	@Override
	public String deleteOrder(Integer oId) {
		// TODO Auto-generated method stub
		return orderDao.orderDelete(oId);
	}


	
}
