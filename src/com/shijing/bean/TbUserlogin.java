package com.shijing.bean;

import java.sql.Timestamp;

/**
 * TbUserlogin entity. @author MyEclipse Persistence Tools
 */

public class TbUserlogin implements java.io.Serializable {

	// Fields

	private Integer id;
	private String userName;
	private String userPwd;
	private Timestamp userLoginTime;

	// Constructors

	/** default constructor */
	public TbUserlogin() {
	}

	/** minimal constructor */
	public TbUserlogin(String userName, String userPwd) {
		this.userName = userName;
		this.userPwd = userPwd;
	}

	/** full constructor */
	public TbUserlogin(String userName, String userPwd, Timestamp userLoginTime) {
		this.userName = userName;
		this.userPwd = userPwd;
		this.userLoginTime = userLoginTime;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPwd() {
		return this.userPwd;
	}

	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}

	public Timestamp getUserLoginTime() {
		return this.userLoginTime;
	}

	public void setUserLoginTime(Timestamp userLoginTime) {
		this.userLoginTime = userLoginTime;
	}

}