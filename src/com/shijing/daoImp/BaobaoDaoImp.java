package com.shijing.daoImp;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.shijing.bean.TbComment;
import com.shijing.dao.BaobaoDao;

public class BaobaoDaoImp implements BaobaoDao {

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
	public List<TbComment> commentShow() {
		// TODO Auto-generated method stub
		String queryString = "select new TbComment(orderId,userCom) from TbComment order by comTime desc";

		Query query=getMySession().createQuery(queryString);
		query.setMaxResults(20);
		System.out.println(query.getQueryString());
		return query.list();
	}

}
