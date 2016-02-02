package com.sima.daoImp;

import java.sql.Timestamp;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.sima.dao.UserloginDao;

public class UserloginImp implements UserloginDao {
	
	private SessionFactory sessionFactory;
	
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	//ªÒ»°session
	public Session getMySession(){
		if (sessionFactory.getCurrentSession()== null) {
			return sessionFactory.openSession();
		} else {
			return sessionFactory.getCurrentSession();
		}
	}
	
	@Override
	public String checkUserNameAndPwd(String userName,String pwd)
	{
		String queryString="from TbUserlogin where userName=:userName and userPwd=:userPwd";
		Session session=sessionFactory.openSession();
		Query query=session.createQuery(queryString);
		query.setParameter("userName", userName);
		query.setParameter("userPwd", pwd);
		if(query.list().size()!=0){
			Timestamp timestamp=new Timestamp(System.currentTimeMillis());
			queryString="update TbUserlogin set userLoginTime=:userLoginTime where userName=:userName and userPwd=:userPwd";
			query=session.createQuery(queryString);
			query.setParameter("userLoginTime", timestamp);
			query.setParameter("userName", userName);
			query.setParameter("userPwd", pwd);
			query.executeUpdate();
			return "success";
		}
		else 
			return "error";
	}

	@Override
	public String pwdModify(String userName, String originPwd, String newPwd) {
		// TODO Auto-generated method stub
		try {
			String queryString="update TbUserlogin set userPwd=:newPwd where userName=:userName and userPwd=:userPwd ";
			Session session=sessionFactory.openSession();
			Query query=session.createQuery(queryString);
			query.setParameter("newPwd", newPwd);
			query.setParameter("userName", userName);
			query.setParameter("userPwd", originPwd);
			query.executeUpdate();
			return "success";
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
			return "error";
		}
	}
	
}