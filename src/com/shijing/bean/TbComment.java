package com.shijing.bean;

import java.sql.Timestamp;

/**
 * TbComment entity. @author MyEclipse Persistence Tools
 */

public class TbComment implements java.io.Serializable {

	// Fields

	private Integer id;
	private String orderId;
	private String userCom;
	private String ifShow;
	private Timestamp comTime;

	// Constructors

	/** default constructor */
	public TbComment() {
	}

	/** minimal constructor */
	public TbComment(String orderId) {
		this.orderId = orderId;
	}

	/** full constructor */
	public TbComment(String orderId, String userCom, String ifShow,
			Timestamp comTime) {
		this.orderId = orderId;
		this.userCom = userCom;
		this.ifShow = ifShow;
		this.comTime = comTime;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getOrderId() {
		return this.orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getUserCom() {
		return this.userCom;
	}

	public void setUserCom(String userCom) {
		this.userCom = userCom;
	}

	public String getIfShow() {
		return this.ifShow;
	}

	public void setIfShow(String ifShow) {
		this.ifShow = ifShow;
	}

	public Timestamp getComTime() {
		return this.comTime;
	}

	public void setComTime(Timestamp comTime) {
		this.comTime = comTime;
	}

}