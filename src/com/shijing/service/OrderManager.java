package com.shijing.service;

import java.util.List;

import com.shijing.bean.TbOrderdetail;

public interface OrderManager {

	//获取订单列表
	List<TbOrderdetail> orderList(Integer page, Integer pageSize);

	//搜索订单
	List<TbOrderdetail> orderSearch(Integer pageSize, Integer flag, String searchWord);

	//删除套餐
	String deleteOrder(Integer oId);

}
