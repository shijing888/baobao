package com.shijing.daoImp;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.shijing.bean.TbComment;
import com.shijing.dao.CommentDao;

public class CommentDaoImp implements CommentDao {

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
	public List<TbComment> commentList(Integer start, Integer sizeInteger) {
		// TODO Auto-generated method stub
		String queryString="from TbComment where ifShow=0 order by comTime desc";
		Query query=getMySession().createQuery(queryString);
		query.setFirstResult(start);
		query.setMaxResults(start+sizeInteger);
		return query.list();
	}

	@Override
	public Integer commentSum() {
		// TODO Auto-generated method stub
		String queryString="from TbComment where ifShow=0";
		Query query=getMySession().createQuery(queryString);
		
		return query.list().size();
	}

	@Override
	public String deleteComment(Integer deleteNo) {
		// TODO Auto-generated method stub
		try {
			String queryString="delete TbComment where id=:id";
			Query query=getMySession().createQuery(queryString);
			query.setParameter("id", deleteNo);
			query.executeUpdate();
			return "1";
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		return "0";
	}

	@Override
	public String passComment(Integer passNo) {
		// TODO Auto-generated method stub
		try {
			String queryString="update TbComment set ifShow=1 where id=:id";
			Query query=getMySession().createQuery(queryString);
			query.setParameter("id", passNo);
			query.executeUpdate();
			return "1";
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		return "0";
	}


}
