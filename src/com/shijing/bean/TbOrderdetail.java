package com.shijing.bean;

import java.sql.Timestamp;

/**
 * TbOrderdetail entity. @author MyEclipse Persistence Tools
 */

public class TbOrderdetail implements java.io.Serializable {

	// Fields

	private Integer id;
	private String orderId;
	private String packageId;
	private String familyName;
	private String gender;
	private String wordCount;
	private String birthDay;
	private String mailInfo;
	private String forbiddenWord;
	private String specifyGeneration;
	private String birthPlace;
	private String optionRemedy;
	private String orderState;
	private Timestamp orderTime;

	// Constructors

	/** default constructor */
	public TbOrderdetail() {
	}

	/** minimal constructor */
	public TbOrderdetail(String orderId, String familyName, String gender,
			String wordCount, String birthDay) {
		this.orderId = orderId;
		this.familyName = familyName;
		this.gender = gender;
		this.wordCount = wordCount;
		this.birthDay = birthDay;
	}

	/** full constructor */
	public TbOrderdetail(String orderId, String packageId, String familyName,
			String gender, String wordCount, String birthDay, String mailInfo,
			String forbiddenWord, String specifyGeneration, String birthPlace,
			String optionRemedy, String orderState, Timestamp orderTime) {
		this.orderId = orderId;
		this.packageId = packageId;
		this.familyName = familyName;
		this.gender = gender;
		this.wordCount = wordCount;
		this.birthDay = birthDay;
		this.mailInfo = mailInfo;
		this.forbiddenWord = forbiddenWord;
		this.specifyGeneration = specifyGeneration;
		this.birthPlace = birthPlace;
		this.optionRemedy = optionRemedy;
		this.orderState = orderState;
		this.orderTime = orderTime;
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

	public String getPackageId() {
		return this.packageId;
	}

	public void setPackageId(String packageId) {
		this.packageId = packageId;
	}

	public String getFamilyName() {
		return this.familyName;
	}

	public void setFamilyName(String familyName) {
		this.familyName = familyName;
	}

	public String getGender() {
		return this.gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getWordCount() {
		return this.wordCount;
	}

	public void setWordCount(String wordCount) {
		this.wordCount = wordCount;
	}

	public String getBirthDay() {
		return this.birthDay;
	}

	public void setBirthDay(String birthDay) {
		this.birthDay = birthDay;
	}

	public String getMailInfo() {
		return this.mailInfo;
	}

	public void setMailInfo(String mailInfo) {
		this.mailInfo = mailInfo;
	}

	public String getForbiddenWord() {
		return this.forbiddenWord;
	}

	public void setForbiddenWord(String forbiddenWord) {
		this.forbiddenWord = forbiddenWord;
	}

	public String getSpecifyGeneration() {
		return this.specifyGeneration;
	}

	public void setSpecifyGeneration(String specifyGeneration) {
		this.specifyGeneration = specifyGeneration;
	}

	public String getBirthPlace() {
		return this.birthPlace;
	}

	public void setBirthPlace(String birthPlace) {
		this.birthPlace = birthPlace;
	}

	public String getOptionRemedy() {
		return this.optionRemedy;
	}

	public void setOptionRemedy(String optionRemedy) {
		this.optionRemedy = optionRemedy;
	}

	public String getOrderState() {
		return this.orderState;
	}

	public void setOrderState(String orderState) {
		this.orderState = orderState;
	}

	public Timestamp getOrderTime() {
		return this.orderTime;
	}

	public void setOrderTime(Timestamp orderTime) {
		this.orderTime = orderTime;
	}

}