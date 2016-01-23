package com.sima.daoImp;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.sima.dao.UserloginDao;

public class UserloginImp implements UserloginDao {
	
	private SessionFactory sessionFactory;
	
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	//获取session
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
		if(query.list().size()!=0)
			return "success";
		else 
			return "error";
	}

	@Override
	public String updatePwd(String userName, String oldPwd, String newPwd) {
		// TODO Auto-generated method stub
		String result="0";                         //说明更改不成功
		if(checkUserNameAndPwd(userName,oldPwd).equals("1")) //说明初始密码正确
		{
			String hql="update TbUserlogin set userPwd=:customerpwd where userName=:customername";
			Query query=getMySession().createQuery(hql);
			query.setString("customerpwd",newPwd);
			query.setString("customername",userName);
			query.executeUpdate();
			result="1";
		}
		return result;
	}
	
}