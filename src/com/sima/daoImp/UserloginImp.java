package com.sima.daoImp;

import java.util.List;

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
		if (sessionFactory.getCurrentSession() != null) {
			return sessionFactory.getCurrentSession();
		} else {
			return sessionFactory.openSession();
		}
	}
	
	@Override
	public String checkUserNameAndPwd(String userName,String pwd)
	{
		String result="0";                             //用户名或密码错误   
		String hql="select userPwd from TbUserlogin user where userName=:customername";
		Query query=getMySession().createQuery(hql);
		query.setString("customername", userName);
		List<String> list=query.list();
		if(!list.isEmpty()||list.size()>1)       //说明该用户存在
		{
			if(list.get(0).equals(pwd))
			   result="1";                     //说明密码正确
		}
		return result;
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