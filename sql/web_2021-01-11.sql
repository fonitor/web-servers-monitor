# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.31)
# Database: web
# Generation Time: 2021-01-11 07:00:33 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table customer_pv
# ------------------------------------------------------------

DROP TABLE IF EXISTS `customer_pv`;

CREATE TABLE `customer_pv` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `app` varchar(30) NOT NULL DEFAULT '',
  `type` tinyint(2) NOT NULL DEFAULT '1' COMMENT '1: web 2: 微信小程序 3: 支付宝小程序',
  `simpleUrl` text NOT NULL COMMENT '当前url',
  `referrer` text NOT NULL COMMENT '页面来源',
  `projectVersion` varchar(50) NOT NULL DEFAULT '' COMMENT '项目版本号',
  `customerKey` varchar(100) DEFAULT '' COMMENT '唯一会话ID',
  `pageKey` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_croatian_ci NOT NULL DEFAULT '' COMMENT '用户标识ID',
  `deviceName` varchar(100) NOT NULL DEFAULT '' COMMENT '设备名称',
  `os` varchar(20) NOT NULL DEFAULT '' COMMENT '系统信息',
  `browserName` varchar(20) NOT NULL DEFAULT '' COMMENT '浏览器名称',
  `brand` varchar(20) NOT NULL DEFAULT '' COMMENT '手机品牌',
  `browserVersion` text NOT NULL COMMENT '浏览器/小程序 版本号',
  `browserInfo` text NOT NULL COMMENT '浏览器版信息',
  `monitorIp` varchar(50) NOT NULL DEFAULT '' COMMENT '用户ip',
  `country` varchar(20) NOT NULL DEFAULT '' COMMENT '国家',
  `province` varchar(30) NOT NULL DEFAULT '' COMMENT '省份',
  `city` varchar(30) NOT NULL DEFAULT '' COMMENT '城市',
  `dataDay` varchar(30) NOT NULL DEFAULT '' COMMENT '日期',
  `createdAt` datetime NOT NULL COMMENT '创建时间',
  `updatedAt` datetime NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `customer_pv` WRITE;
/*!40000 ALTER TABLE `customer_pv` DISABLE KEYS */;

INSERT INTO `customer_pv` (`id`, `app`, `type`, `simpleUrl`, `referrer`, `projectVersion`, `customerKey`, `pageKey`, `deviceName`, `os`, `browserName`, `brand`, `browserVersion`, `browserInfo`, `monitorIp`, `country`, `province`, `city`, `dataDay`, `createdAt`, `updatedAt`)
VALUES
	(1,'wuc',2,'pages/ceshi/ceshi','','1.0.0','bbe73e82-26a4-4850-8db6-8760d420084c','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-11','2021-01-11 02:58:29','2021-01-11 02:58:29');

/*!40000 ALTER TABLE `customer_pv` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table http_log_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `http_log_info`;

CREATE TABLE `http_log_info` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `app` varchar(30) NOT NULL DEFAULT '',
  `type` tinyint(11) NOT NULL DEFAULT '1' COMMENT '1: web 2: 微信小程序 3: 支付宝小程序',
  `simpleUrl` text NOT NULL COMMENT '当前url',
  `customerKey` varchar(100) NOT NULL DEFAULT '' COMMENT '唯一会话ID',
  `pageKey` varchar(50) NOT NULL DEFAULT '' COMMENT '用户标识ID',
  `deviceName` varchar(100) NOT NULL DEFAULT '' COMMENT '设备名称',
  `os` varchar(20) NOT NULL DEFAULT '' COMMENT '系统信息',
  `browserName` varchar(20) NOT NULL DEFAULT '' COMMENT '浏览器名称',
  `browserVersion` text NOT NULL COMMENT '浏览器版本号',
  `monitorIp` varchar(50) NOT NULL DEFAULT '' COMMENT '用户IP',
  `country` varchar(20) NOT NULL DEFAULT '' COMMENT '国家',
  `province` varchar(30) NOT NULL DEFAULT '' COMMENT '省份',
  `city` varchar(30) NOT NULL DEFAULT '' COMMENT '城市',
  `httpUploadType` varchar(20) NOT NULL DEFAULT '' COMMENT '信息类型 1 http 耗时 2 http error',
  `httpUrl` varchar(300) NOT NULL DEFAULT '' COMMENT 'httpUrl 地址',
  `browserInfo` text NOT NULL COMMENT '浏览器信息',
  `loadTime` varchar(20) NOT NULL DEFAULT '' COMMENT '接口耗时',
  `responseText` text NOT NULL COMMENT '接口返回数据',
  `httpStatus` varchar(3) NOT NULL DEFAULT '' COMMENT '接口状态',
  `dataDay` varchar(30) NOT NULL DEFAULT '' COMMENT '日期',
  `createdAt` datetime NOT NULL COMMENT '创建时间',
  `updatedAt` datetime NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table javascript_error_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `javascript_error_info`;

CREATE TABLE `javascript_error_info` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `app` varchar(30) NOT NULL DEFAULT '',
  `type` tinyint(2) NOT NULL DEFAULT '1' COMMENT '1: web 2: 微信小程序 3: 支付宝小程序',
  `simpleUrl` text NOT NULL COMMENT '当前url',
  `customerKey` varchar(100) NOT NULL DEFAULT '' COMMENT '唯一会话ID',
  `pageKey` varchar(50) NOT NULL DEFAULT '' COMMENT '用户标识ID',
  `deviceName` varchar(100) NOT NULL DEFAULT '' COMMENT '设备名称',
  `os` varchar(20) NOT NULL DEFAULT '' COMMENT '系统信息',
  `browserName` varchar(20) NOT NULL DEFAULT '' COMMENT '浏览器名称',
  `browserVersion` varchar(10000) NOT NULL DEFAULT '' COMMENT '浏览器/小程序 版本号',
  `monitorIp` varchar(50) NOT NULL DEFAULT '' COMMENT '用户IP',
  `country` varchar(20) NOT NULL DEFAULT '' COMMENT '国家',
  `province` varchar(30) NOT NULL DEFAULT '' COMMENT '省份',
  `city` varchar(30) NOT NULL DEFAULT '' COMMENT '城市',
  `uploadType` varchar(20) NOT NULL DEFAULT '' COMMENT '信息类型',
  `errorMessage` text NOT NULL COMMENT 'JS报错信息',
  `errorStack` text NOT NULL COMMENT 'JS报错堆栈',
  `browserInfo` text NOT NULL COMMENT '浏览器信息',
  `dataDay` varchar(11) DEFAULT NULL COMMENT '日期',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `javascript_error_info` WRITE;
/*!40000 ALTER TABLE `javascript_error_info` DISABLE KEYS */;

INSERT INTO `javascript_error_info` (`id`, `app`, `type`, `simpleUrl`, `customerKey`, `pageKey`, `deviceName`, `os`, `browserName`, `browserVersion`, `monitorIp`, `country`, `province`, `city`, `uploadType`, `errorMessage`, `errorStack`, `browserInfo`, `dataDay`, `createdAt`, `updatedAt`)
VALUES
	(1,'wuc',1,'pages/ceshi/ceshi','97b51338-d08b-4f76-9f86-64da50846b45','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:60066/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:60066/appservice/extend/ceshi.js:589:19)\n    at Je.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:674542)','','','2021-01-08','2021-01-08 11:47:08','2021-01-08 11:47:08'),
	(2,'wuc',1,'pages/ceshi/ceshi','aa74c99f-0b7d-471b-b72e-678436bad8f3','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\ne is not defined\nReferenceError: e is not defined\n    at Object.wx._request (http://127.0.0.1:60066/appservice/extend/ceshi.js:833:16)\n    at Je.onLoad (http://127.0.0.1:60066/appservice/pages/ceshi/ceshi.js:24:8)\n    at Je.onLoad (http://127.0.0.1:60066/appservice/extend/ceshi.js:589:19)\n    at Je.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2058868)','','','2021-01-08','2021-01-08 12:16:25','2021-01-08 12:16:25'),
	(3,'wuc',1,'pages/ceshi/ceshi','9b1edf5f-c43e-4e77-81dd-e700d90a0100','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\n_complete is not a function\nTypeError: _complete is not a function\n    at _e.complete (http://127.0.0.1:60066/appservice/extend/ceshi.js:855:9)\n    at Function.i.complete.i.complete (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:1794704)\n    at <api request complete callback function>\n    at http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:121691\n    at k (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:600644)\n    at T (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:599977)\n    at Object.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:1252038)\n    at Object.p.<computed> [as request] (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:882219)\n    at Object.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:661818)\n    at Object.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:1795029)','','','2021-01-08','2021-01-08 12:17:05','2021-01-08 12:17:05'),
	(4,'wuc',1,'pages/ceshi/ceshi','d60a8812-8153-434b-ae60-15eabfbfeefb','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\n_complete is not a function\nTypeError: _complete is not a function\n    at _e.complete (http://127.0.0.1:60066/appservice/extend/ceshi.js:855:24)\n    at Function.i.complete.i.complete (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:1794704)\n    at <api request complete callback function>\n    at http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:121691\n    at k (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:600644)\n    at T (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:599977)\n    at Object.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:1252038)\n    at Object.p.<computed> [as request] (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:882219)\n    at Object.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:661818)\n    at Object.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:1795029)','','','2021-01-08','2021-01-08 12:18:22','2021-01-08 12:18:22'),
	(5,'wuc',1,'pages/ceshi/ceshi','568cd1b1-d288-4c72-88fb-79ebef0e71af','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-11','2021-01-11 02:56:45','2021-01-11 02:56:45'),
	(6,'wuc',1,'pages/ceshi/ceshi','bbe73e82-26a4-4850-8db6-8760d420084c','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-11','2021-01-11 02:58:29','2021-01-11 02:58:29');

/*!40000 ALTER TABLE `javascript_error_info` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table project
# ------------------------------------------------------------

DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `webMonitorId` int(11) NOT NULL COMMENT '监控ID',
  `projectType` int(11) NOT NULL COMMENT '项目类型',
  `projectName` varchar(11) NOT NULL DEFAULT '' COMMENT '项目名称',
  `userId` int(11) NOT NULL COMMENT '用户ID',
  `email` varchar(11) NOT NULL DEFAULT '' COMMENT '邮箱',
  `status` int(1) NOT NULL COMMENT '是否进来 1 记录 0 不记录',
  `createdAt` datetime NOT NULL COMMENT '创建时间',
  `updatedAt` datetime NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table resource_load_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `resource_load_info`;

CREATE TABLE `resource_load_info` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `sourceUrl` text NOT NULL COMMENT '静态资源的请求路径',
  `elementType` varchar(20) NOT NULL DEFAULT '' COMMENT '静态资源的类型',
  `status` varchar(11) NOT NULL DEFAULT '' COMMENT '资源状态',
  `simpleUrl` text COMMENT '当前url',
  `customerKey` varchar(100) NOT NULL DEFAULT '' COMMENT '唯一会话ID',
  `pageKey` varchar(50) NOT NULL DEFAULT '' COMMENT '用户标识ID',
  `deviceName` varchar(100) NOT NULL DEFAULT '' COMMENT '设备名称',
  `os` varchar(20) NOT NULL DEFAULT '' COMMENT '系统信息',
  `browserName` varchar(20) NOT NULL DEFAULT '' COMMENT '浏览器名称',
  `browserVersion` text COMMENT '浏览器版本号',
  `monitorIp` varchar(100) NOT NULL DEFAULT '' COMMENT '用户ip',
  `country` varchar(20) NOT NULL DEFAULT '' COMMENT '国家',
  `province` varchar(30) NOT NULL DEFAULT '' COMMENT '省份',
  `city` varchar(30) NOT NULL DEFAULT '' COMMENT '城市',
  `uploadType` varchar(20) NOT NULL DEFAULT '' COMMENT '错误类型',
  `browserInfo` text COMMENT '浏览器信息',
  `dataDay` varchar(30) NOT NULL DEFAULT '' COMMENT '日期',
  `createdAt` datetime NOT NULL COMMENT '创建时间',
  `updatedAt` datetime NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userType` tinyint(1) NOT NULL COMMENT '1 超级管理员 0 普通会员',
  `nickname` varchar(50) NOT NULL DEFAULT '' COMMENT '登录名称',
  `password` varchar(100) NOT NULL DEFAULT '' COMMENT '登录密码',
  `groupId` tinyint(1) DEFAULT NULL COMMENT '人员分组的ID，权限控制',
  `createdAt` datetime NOT NULL COMMENT '创建时间',
  `updatedAt` datetime NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
