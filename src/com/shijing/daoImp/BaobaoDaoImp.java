package com.shijing.daoImp;

import java.sql.Timestamp;
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
		String queryString = "select new TbComment(orderId,userCom) from TbComment where ifShow=1 order by comTime desc";

		Query query=getMySession().createQuery(queryString);
		query.setMaxResults(20);
		return query.list();
	}

	@Override
	public void commentAdd(String ordersn, String content) {
		// TODO Auto-generated method stub
		Timestamp timestamp=new Timestamp(System.currentTimeMillis());
		TbComment tbComment=new TbComment();
		
		tbComment.setComTime(timestamp);
		tbComment.setIfShow(0);
		tbComment.setOrderId(ordersn);
		tbComment.setUserCom(content);
		
		getMySession().save(tbComment);
	}

}
