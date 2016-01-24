package com.shijing.serviceImp;


import com.shijing.dao.OrderDao;
import com.shijing.service.OrderManager;


public class OrderManagerImp implements OrderManager {

     private OrderDao orderDao;

	public void setOrderDao(OrderDao orderDao) {
		this.orderDao = orderDao;
	}

	
}
