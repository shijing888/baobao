package com.shijing.daoImp;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.shijing.bean.TbOrderdetail;
import com.shijing.dao.OrderDao;

public class OrderDaoImp implements OrderDao {

	private SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	// ªÒ»°session
	public Session getMySession() {
		if (sessionFactory.getCurrentSession() != null) {
			return sessionFactory.getCurrentSession();
		} else {
			return sessionFactory.openSession();
		}
	}

	@Override
	public List<TbOrderdetail> getOrderList(Integer page, Integer pageSize) {
		// TODO Auto-generated method stub
		String queryString="from TbOrderdetail where orderState=1 order by orderTime";
		Query query=getMySession().createQuery(queryString);
		query.setFirstResult((page-1)*pageSize);
		query.setMaxResults((page-1)*pageSize+pageSize);
		return query.list();
	}

	@Override
	public List<TbOrderdetail> searchOrder(Integer pageSize, Integer flag,String searchWord) {
		// TODO Auto-generated method stub
		String queryString="";
		if(flag==0)
		    queryString="from TbOrderdetail where orderState=1 and orderId=:searchWord order by orderTime";
		else {
			queryString="from TbOrderdetail where orderState=1 and mailInfo=:searchWord order by orderTime";
		}
		Query query=getMySession().createQuery(queryString);
		query.setParameter("searchWord", searchWord);
		query.setMaxResults(pageSize);
		return query.list();
	}

	@Override
	public String orderDelete(Integer oId) {
		// TODO Auto-generated method stub
		try {
			String queryString="delete TbOrderdetail where orderId=:orderId";
			Query query=getMySession().createQuery(queryString);
			query.setParameter("orderId", oId);
			query.executeUpdate();
			return "success";
		} catch (Exception e) {
			// TODO: handle exception
			return "error";
		}
		
	}


	


}
