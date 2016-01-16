package com.shijing.daoImp;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.shijing.bean.TbPackage;
import com.shijing.dao.PackageDao;

public class PackageDaoImp implements PackageDao {

	private SessionFactory sessionFactory;
	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	//将数据库中 的所有套餐查询出来
	@Override
	public List<TbPackage> packageList() {
		// TODO Auto-generated method stub
		List<TbPackage>list=null;
		String queryString="from TbPackage tp order by orginalPrice Desc";
		Query query=getMySession().createQuery(queryString);
		list=query.list();
		return list;
	}

	//获取session
	public Session getMySession(){
		if (sessionFactory.getCurrentSession() != null) {
			return sessionFactory.getCurrentSession();
		} else {
			return sessionFactory.openSession();
		}
	}
}
