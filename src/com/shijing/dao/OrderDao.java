package com.shijing.dao;

import java.util.List;

import com.shijing.bean.TbOrderdetail;


public interface OrderDao {

	//获取订单列表
	List<TbOrderdetail> getOrderList(Integer page, Integer pageSize);

	//搜索订单
	List<TbOrderdetail> searchOrder(Integer pageSize, Integer flag, String searchWord);

	//删除订单
	String orderDelete(Integer oId);


}
