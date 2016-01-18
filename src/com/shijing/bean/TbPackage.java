package com.shijing.bean;

import java.sql.Timestamp;

/**
 * TbPackage entity. @author MyEclipse Persistence Tools
 */

public class TbPackage implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String orginalPrice;
	private String currentPrice;
	private String detailInfo;
	private String pictureAddress;
	private Timestamp createTime;

	// Constructors

	/** default constructor */
	public TbPackage() {
	}

	/** minimal constructor */
	public TbPackage(String orginalPrice, String currentPrice) {
		this.orginalPrice = orginalPrice;
		this.currentPrice = currentPrice;
	}

	/** full constructor */
	public TbPackage(String orginalPrice, String currentPrice,
			String detailInfo, String pictureAddress, Timestamp createTime) {
		this.orginalPrice = orginalPrice;
		this.currentPrice = currentPrice;
		this.detailInfo = detailInfo;
		this.pictureAddress = pictureAddress;
		this.createTime = createTime;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getOrginalPrice() {
		return this.orginalPrice;
	}

	public void setOrginalPrice(String orginalPrice) {
		this.orginalPrice = orginalPrice;
	}

	public String getCurrentPrice() {
		return this.currentPrice;
	}

	public void setCurrentPrice(String currentPrice) {
		this.currentPrice = currentPrice;
	}

	public String getDetailInfo() {
		return this.detailInfo;
	}

	public void setDetailInfo(String detailInfo) {
		this.detailInfo = detailInfo;
	}

	public String getPictureAddress() {
		return this.pictureAddress;
	}

	public void setPictureAddress(String pictureAddress) {
		this.pictureAddress = pictureAddress;
	}

	public Timestamp getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Timestamp createTime) {
		this.createTime = createTime;
	}

}