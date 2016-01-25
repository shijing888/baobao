/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : baobao

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2016-01-25 10:37:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `tb_comment`
-- ----------------------------
DROP TABLE IF EXISTS `tb_comment`;
CREATE TABLE `tb_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderID` varchar(50) NOT NULL,
  `userCom` varchar(1000) DEFAULT NULL,
  `comTime` timestamp NULL DEFAULT NULL,
  `ifShow` int(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COMMENT='用户对订单进行评论，功能要求带审核（审核通过方可显示），默认按时间顺序进行';

-- ----------------------------
-- Records of tb_comment
-- ----------------------------
INSERT INTO `tb_comment` VALUES ('1', '12345678', '很好！！', '2016-01-06 18:13:29', '0');
INSERT INTO `tb_comment` VALUES ('2', '12345679', '很好！！', '2016-01-14 18:13:52', '1');
INSERT INTO `tb_comment` VALUES ('3', '12345680', '非常good！！', '2016-01-22 19:13:55', '0');
INSERT INTO `tb_comment` VALUES ('4', '12345681', '名字很大气', '2016-01-03 19:14:38', '1');
INSERT INTO `tb_comment` VALUES ('5', '12345682', '这么贵，坑爹呢这是！', '2016-01-13 20:55:26', '0');
INSERT INTO `tb_comment` VALUES ('6', '12345682', 'dfgdfg', '2016-01-22 21:46:21', '0');
INSERT INTO `tb_comment` VALUES ('8', '12345688', 'bbbbbbb', '2016-01-22 21:54:20', '0');
INSERT INTO `tb_comment` VALUES ('9', '12345688', 'gg', '2016-01-22 22:06:55', '1');
INSERT INTO `tb_comment` VALUES ('10', '12345690', '塔克拉玛干大汗', '2016-01-23 21:17:12', '0');
INSERT INTO `tb_comment` VALUES ('11', '123456792', '人人都说江南好', '2016-01-23 21:17:57', '0');
INSERT INTO `tb_comment` VALUES ('12', '1234567894', '风景旧曾谙', '2016-01-23 21:18:49', '1');
INSERT INTO `tb_comment` VALUES ('13', '1234567895', '日出江花红胜火', '2016-01-23 21:19:31', '1');
INSERT INTO `tb_comment` VALUES ('14', '1234567896', 'jhlkhlk', '2016-01-24 21:09:47', '0');

-- ----------------------------
-- Table structure for `tb_orderdetail`
-- ----------------------------
DROP TABLE IF EXISTS `tb_orderdetail`;
CREATE TABLE `tb_orderdetail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderID` varchar(50) NOT NULL,
  `packageID` varchar(50) DEFAULT NULL,
  `familyName` varchar(20) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `wordCount` varchar(1) NOT NULL,
  `birthDay` varchar(20) NOT NULL,
  `mailInfo` varchar(50) DEFAULT NULL,
  `forbiddenWord` varchar(50) DEFAULT NULL,
  `specifyGeneration` varchar(50) DEFAULT NULL,
  `birthPlace` varchar(100) DEFAULT NULL,
  `optionRemedy` varchar(50) DEFAULT NULL,
  `orderState` varchar(1) DEFAULT NULL,
  `orderTime` timestamp NULL DEFAULT NULL,
  `telePhone` varchar(13) DEFAULT NULL,
  `qq` varchar(20) DEFAULT NULL,
  `money` double(8,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_orderdetail
-- ----------------------------

-- ----------------------------
-- Table structure for `tb_package`
-- ----------------------------
DROP TABLE IF EXISTS `tb_package`;
CREATE TABLE `tb_package` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orginalPrice` varchar(10) NOT NULL,
  `currentPrice` varchar(10) NOT NULL,
  `detailInfo` varchar(500) DEFAULT NULL,
  `pictureAddress` varchar(100) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_package
-- ----------------------------
INSERT INTO `tb_package` VALUES ('2', '1888', '1688', '666', 'bao1.jpg', '2016-01-12 16:44:27');
INSERT INTO `tb_package` VALUES ('8', '667', '667', '667', 'baobaotc.jpg', '2016-01-17 21:33:49');
INSERT INTO `tb_package` VALUES ('18', '35', '35', '35', 'baobaotc.jpg', '2016-01-19 20:55:13');
INSERT INTO `tb_package` VALUES ('92', '78', '78', '8787', 'bao1.jpg', '2016-01-22 22:42:07');

-- ----------------------------
-- Table structure for `tb_userlogin`
-- ----------------------------
DROP TABLE IF EXISTS `tb_userlogin`;
CREATE TABLE `tb_userlogin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `userPwd` varchar(50) NOT NULL,
  `userLoginTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户登录表（管理员对系统进行管理）';

-- ----------------------------
-- Records of tb_userlogin
-- ----------------------------
INSERT INTO `tb_userlogin` VALUES ('1', 'admin', 'admin', null);
