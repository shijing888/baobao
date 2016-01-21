package com.shijing.daoImp;

import java.sql.Timestamp;
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

	// 将数据库中 的所有套餐查询出来
	@Override
	public List<TbPackage> packageList() {
		// TODO Auto-generated method stub
		List<TbPackage> list = null;
		String queryString = "from TbPackage tp order by tp.orginalPrice Desc";
		Query query = getMySession().createQuery(queryString);
		list = query.list();
		return list;
	}

	// 获取session
	public Session getMySession() {
		if (sessionFactory.getCurrentSession() != null) {
			return sessionFactory.getCurrentSession();
		} else {
			return sessionFactory.openSession();
		}
	}

	// 添加套餐
	@Override
	public String packageAdd(String priceString, String infoString,
			String photoString) {

		try {
			Timestamp time = new Timestamp(System.currentTimeMillis());
			TbPackage tbPackage = new TbPackage();
			tbPackage.setOrginalPrice(priceString);
			tbPackage.setCurrentPrice(priceString);
			tbPackage.setDetailInfo(infoString);
			tbPackage.setPictureAddress(photoString);
			tbPackage.setCreateTime(time);
			getMySession().save(tbPackage);

			return "添加成功！";
		} catch (Exception e) {
			// TODO: handle exception
			return "添加失败";
		}

	}

	// 查询套餐
	public List<TbPackage> packageQuery(Integer pcId) {
		// TODO Auto-generated method stub
		List<TbPackage> list = null;
		try {
			String queryString = "from TbPackage tp where tp.id=" + pcId;
			Query query = getMySession().createQuery(queryString);
			// query.setParameter("pid", pcId);
			list = query.list();
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
		}
		return list;
	}

	// 删除套餐
	@Override
	public String packageDelete(Integer pcId) {
		// TODO Auto-generated method stub
		try {
			System.out.println(pcId);
			String queryString = "delete   TbPackage tp where id=" + pcId;
			Query query = getMySession().createQuery(queryString);
			// query.setInteger("pid", pcId);
			query.executeUpdate();
			return "success";
		} catch (Exception e) {
			// TODO: handle exception
			return "error";
		}

	}
	//String queryString="update TbPackage set orginalPrice=:orginalPrice and currentPrice=:currentPrice and detailInfo=:detailInfo and pictureAddress=:pictureAddress and createTime=:createTime where id=:pid";
	@Override
	public String packageUpdate(Integer pcId, String priceString,
			String currentPriceString, String infoString, String photoUrlString) {
		// TODO Auto-generated method stub
		try {
			Timestamp timestamp=new Timestamp(System.currentTimeMillis());
			String queryString = "update TbPackage set orginalPrice="+priceString+" and "+
			     "currentPrice="+currentPriceString+" and "+ "detailInfo="+infoString+" and "+" pictureAddress="+
			     photoUrlString+" and "+" createTime="+timestamp+" where id="+pcId;
			Query query=getMySession().createQuery(queryString);
//			query.setParameter("orginalPrice", priceString);
//			query.setParameter("currentPrice", currentPriceString);
//			query.setParameter("detailInfo", infoString);
//			query.setParameter("pictureAddress", photoUrlString);
//			query.setParameter("createTime", timestamp);
//			query.setParameter("pid", pcId);
			System.out.println(query.getQueryString());
			query.executeUpdate();
			return "success";
		} catch (Exception e) {
			// TODO: handle exception
			return "error";
		}
	
	}
}
