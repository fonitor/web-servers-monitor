# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.31)
# Database: web
# Generation Time: 2021-01-08 04:06:07 +0000
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
  `createdAt` datetime NOT NULL COMMENT '创建时间',
  `updatedAt` datetime NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `customer_pv` WRITE;
/*!40000 ALTER TABLE `customer_pv` DISABLE KEYS */;

INSERT INTO `customer_pv` (`id`, `app`, `type`, `simpleUrl`, `referrer`, `projectVersion`, `customerKey`, `pageKey`, `deviceName`, `os`, `browserName`, `brand`, `browserVersion`, `browserInfo`, `monitorIp`, `country`, `province`, `city`, `createdAt`, `updatedAt`)
VALUES
	(1,'wuc',2,'pages/ceshi/ceshi','','1.0.0','da024981-42d7-4e83-93a6-159f67fdf5d9','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-08 11:32:18','2021-01-08 11:32:18'),
	(2,'wuc',2,'pages/index/index','pages/ceshi/ceshi','1.0.0','da024981-42d7-4e83-93a6-159f67fdf5d9','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-08 11:33:08','2021-01-08 11:33:08'),
	(3,'wuc',2,'pages/ceshi/ceshi','','1.0.0','6fad6db6-3c40-4e2a-8d61-f9cb9941a4c0','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-08 11:40:10','2021-01-08 11:40:10'),
	(4,'wuc',2,'pages/ceshi/ceshi','','1.0.0','170bf5de-0940-47fb-a3d2-76cf1a2fb1a1','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-08 11:42:03','2021-01-08 11:42:03'),
	(5,'wuc',2,'pages/ceshi/ceshi','','1.0.0','ae37e3bf-e506-4ea8-bbd0-8220a3924bd2','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-08 11:44:39','2021-01-08 11:44:39'),
	(6,'wuc',2,'pages/ceshi/ceshi','','1.0.0','880ca04b-4260-4b8b-a1da-b56f38c52a71','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-08 11:45:20','2021-01-08 11:45:20'),
	(7,'wuc',2,'pages/ceshi/ceshi','','1.0.0','b8afb6b8-6f47-461e-aedf-d7cd467e5d94','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-08 11:46:10','2021-01-08 11:46:10'),
	(8,'wuc',2,'pages/ceshi/ceshi','','1.0.0','97b51338-d08b-4f76-9f86-64da50846b45','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-08 11:47:08','2021-01-08 11:47:08'),
	(9,'wuc',2,'pages/ceshi/ceshi','','1.0.0','e6a3e980-7e53-4265-bf93-91600447d62d','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-08 11:50:54','2021-01-08 11:50:54');

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
  `uploadType` varchar(20) NOT NULL DEFAULT '' COMMENT '信息类型 1 http 耗时 2 http error',
  `browserInfo` text NOT NULL COMMENT '浏览器信息',
  `loadTime` varchar(20) NOT NULL DEFAULT '' COMMENT '接口耗时',
  `responseText` text NOT NULL COMMENT '接口返回数据',
  `status` int(3) NOT NULL COMMENT '接口状态',
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
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `javascript_error_info` WRITE;
/*!40000 ALTER TABLE `javascript_error_info` DISABLE KEYS */;

INSERT INTO `javascript_error_info` (`id`, `app`, `type`, `simpleUrl`, `customerKey`, `pageKey`, `deviceName`, `os`, `browserName`, `browserVersion`, `monitorIp`, `country`, `province`, `city`, `uploadType`, `errorMessage`, `errorStack`, `browserInfo`, `createdAt`, `updatedAt`)
VALUES
	(1,'wuc',1,'pages/ceshi/ceshi','97b51338-d08b-4f76-9f86-64da50846b45','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:60066/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:60066/appservice/extend/ceshi.js:589:19)\n    at Je.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:674542)','','','2021-01-08 11:47:08','2021-01-08 11:47:08');

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
  `createdAt` datetime NOT NULL COMMENT '创建时间',
  `updatedAt` datetime NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `resource_load_info` WRITE;
/*!40000 ALTER TABLE `resource_load_info` DISABLE KEYS */;

INSERT INTO `resource_load_info` (`id`, `sourceUrl`, `elementType`, `status`, `simpleUrl`, `customerKey`, `pageKey`, `deviceName`, `os`, `browserName`, `browserVersion`, `monitorIp`, `country`, `province`, `city`, `uploadType`, `browserInfo`, `createdAt`, `updatedAt`)
VALUES
	(1,'aHR0cCUzQSUyRiUyRnB2LnNvaHUuY29tJTJGY2l0eWpzb24lM0ZpZSUzRHV0Zi04','script','','http://localhost:8080/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'','','','','resource_load','','2020-10-04 08:35:58','2020-10-04 08:35:58'),
	(2,'aHR0cHMlM0ElMkYlMkZmYW55aS5iYWlkdS5jb20lMkZzdGF0aWMlMkZ0cmFuc2xhdGUtbW9iaWxlJTJGcGtnJTJGYWlvX2U4NTllZTdzcy5qcGc=','img','','http://localhost:8080/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'','','','','resource_load','','2020-10-04 08:35:58','2020-10-04 08:35:58'),
	(3,'aHR0cCUzQSUyRiUyRnB2LnNvaHUuY29tJTJGY2l0eWpzb24lM0ZpZSUzRHV0Zi04','script','','http://localhost:8080/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'','','','','resource_load','','2020-10-04 08:44:45','2020-10-04 08:44:45'),
	(4,'aHR0cHMlM0ElMkYlMkZmYW55aS5iYWlkdS5jb20lMkZzdGF0aWMlMkZ0cmFuc2xhdGUtbW9iaWxlJTJGcGtnJTJGYWlvX2U4NTllZTdzcy5jc3M=','link','','http://localhost:8080/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'','','','','resource_load','','2020-10-04 08:44:45','2020-10-04 08:44:45'),
	(5,'aHR0cHMlM0ElMkYlMkZmYW55aS5iYWlkdS5jb20lMkZzdGF0aWMlMkZ0cmFuc2xhdGUtbW9iaWxlJTJGcGtnJTJGYWlvX2U4NTllZTdzcy5qcGc=','img','','http://localhost:8080/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'','','','','resource_load','','2020-10-04 08:44:45','2020-10-04 08:44:45');

/*!40000 ALTER TABLE `resource_load_info` ENABLE KEYS */;
UNLOCK TABLES;


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
