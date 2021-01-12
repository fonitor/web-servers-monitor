# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.31)
# Database: web
# Generation Time: 2021-01-12 12:37:31 +0000
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
	(1,'wuc',2,'pages/ceshi/ceshi','','1.0.0','bbe73e82-26a4-4850-8db6-8760d420084c','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-11','2021-01-11 02:58:29','2021-01-11 02:58:29'),
	(2,'wuc',2,'pages/ceshi/ceshi','','1.0.0','7573fab9-2b31-4058-bf4d-dcad1ab5b821','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-11','2021-01-11 08:44:36','2021-01-11 08:44:36'),
	(3,'wuc',2,'pages/ceshi/ceshi','','1.0.0','48ca1fc1-7d74-467d-9154-9f37f63662d2','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-11','2021-01-11 08:44:38','2021-01-11 08:44:38'),
	(4,'wuc',2,'pages/ceshi/ceshi','','1.0.0','c8a0b10f-f431-4503-8735-8af6d505a11c','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-11','2021-01-11 08:46:03','2021-01-11 08:46:03'),
	(5,'wuc',2,'pages/ceshi/ceshi','','1.0.0','b9441849-3314-44ce-b782-98c2d1be240d','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-11','2021-01-11 08:46:22','2021-01-11 08:46:22'),
	(6,'wuc',2,'pages/ceshi/ceshi','','1.0.0','9568b34c-4f49-454c-90e3-93d7a5805a89','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-11','2021-01-11 09:27:36','2021-01-11 09:27:36'),
	(7,'wuc',2,'pages/ceshi/ceshi','','1.0.0','38d9f37f-02e8-4c02-bd84-27919d8df4cd','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-11','2021-01-11 09:27:37','2021-01-11 09:27:37'),
	(8,'wuc',2,'pages/ceshi/ceshi','','1.0.0','3a90066c-d11c-4880-94cd-314feadf5b21','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-11','2021-01-11 09:27:38','2021-01-11 09:27:38'),
	(9,'wuc',2,'pages/ceshi/ceshi','','1.0.0','96d8108b-9c4a-4845-82fb-178a527f14a5','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-11','2021-01-11 09:27:40','2021-01-11 09:27:40'),
	(10,'wuc',2,'pages/ceshi/ceshi','','1.0.0','7f95f883-c0df-435d-82d2-31aaacbb3264','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-11','2021-01-11 09:27:41','2021-01-11 09:27:41'),
	(11,'wuc',2,'pages/ceshi/ceshi','','1.0.0','6e0abd02-186e-4ccd-8ed1-8898613e5612','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:39:54','2021-01-12 10:39:54'),
	(12,'wuc',2,'pages/ceshi/ceshi','','1.0.0','1f32ad75-476f-48c6-83b2-2e0b104ed3cd','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:39:56','2021-01-12 10:39:56'),
	(13,'wuc',2,'pages/ceshi/ceshi','','1.0.0','791d669d-3460-4ccf-b726-9f9ca7158bc2','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:39:57','2021-01-12 10:39:57'),
	(14,'wuc',2,'pages/ceshi/ceshi','','1.0.0','a64cef99-573a-4a3f-9777-fa01ba095acb','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:39:59','2021-01-12 10:39:59'),
	(15,'wuc',2,'pages/ceshi/ceshi','','1.0.0','6e2c751a-af6c-4d26-9c90-aef98088d2a0','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:40:00','2021-01-12 10:40:00'),
	(16,'wuc',2,'pages/ceshi/ceshi','','1.0.0','5d06fce3-ec1c-470f-a83b-1d002e8309f0','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:40:02','2021-01-12 10:40:02'),
	(17,'wuc',2,'pages/ceshi/ceshi','','1.0.0','c50f3430-eb89-4889-be4e-3869fa93b000','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:40:04','2021-01-12 10:40:04'),
	(18,'wuc',2,'pages/ceshi/ceshi','','1.0.0','ab3210ca-8108-4da6-89b4-3d17af8e21fd','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:40:05','2021-01-12 10:40:05'),
	(19,'wuc',2,'pages/ceshi/ceshi','','1.0.0','7a425cdb-a7bb-4aa6-9fd5-bc6d36bb3815','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:40:07','2021-01-12 10:40:07'),
	(20,'wuc',2,'pages/ceshi/ceshi','','1.0.0','c9672dc2-05f6-4ec9-9e9b-7dacf4acb36a','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:40:08','2021-01-12 10:40:08'),
	(21,'wuc',2,'pages/ceshi/ceshi','','1.0.0','48319781-9178-498f-91eb-8cfc1caa4f51','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:40:10','2021-01-12 10:40:10'),
	(22,'wuc',2,'pages/ceshi/ceshi','','1.0.0','76d65c49-510c-406e-8f74-d2877803e949','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:40:12','2021-01-12 10:40:12'),
	(23,'wuc',2,'pages/ceshi/ceshi','','1.0.0','e60179e9-7ec4-4674-a2d6-e422b4390b55','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:40:13','2021-01-12 10:40:13'),
	(24,'wuc',2,'pages/ceshi/ceshi','','1.0.0','06fbfccc-54e5-4976-97ef-3e55cb8cbcbf','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:40:15','2021-01-12 10:40:15'),
	(25,'wuc',2,'pages/ceshi/ceshi','','1.0.0','f535847b-25ec-4113-ba2a-7a1d716d1529','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:40:17','2021-01-12 10:40:17'),
	(26,'wuc',2,'pages/ceshi/ceshi','','1.0.0','e17e770a-e4be-492d-9a02-90ace1649a33','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:40:18','2021-01-12 10:40:18'),
	(27,'wuc',2,'pages/ceshi/ceshi','','1.0.0','56a32783-e946-4870-8d6f-387a96e0e1e3','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:40:20','2021-01-12 10:40:20'),
	(28,'wuc',2,'pages/ceshi/ceshi','','1.0.0','7b2f40c5-fc9a-4cb9-a27a-2b5db1218e85','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 10:40:21','2021-01-12 10:40:21'),
	(29,'wuc',2,'pages/ceshi/ceshi','','1.0.0','e1734ee0-b5b2-4e01-82a1-b728e54a1811','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 07:11:12','2021-01-12 07:11:12'),
	(30,'wuc',2,'pages/ceshi/ceshi','','1.0.0','6d5b4104-4637-440e-b0fc-77cdbe2cb5ad','','iPhone 6/7/8 Plus','iOS 10.0.1','','','7.0.4','','','','','','2021-01-12','2021-01-12 07:52:20','2021-01-12 07:52:20');

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
  `userId` varchar(50) NOT NULL DEFAULT '' COMMENT '用户标识ID',
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

INSERT INTO `javascript_error_info` (`id`, `app`, `type`, `simpleUrl`, `customerKey`, `userId`, `deviceName`, `os`, `browserName`, `browserVersion`, `monitorIp`, `country`, `province`, `city`, `uploadType`, `errorMessage`, `errorStack`, `browserInfo`, `dataDay`, `createdAt`, `updatedAt`)
VALUES
	(1,'zuc',1,'pages/ceshi/ceshi','97b51338-d08b-4f76-9f86-64da50846b45','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:60066/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:60066/appservice/extend/ceshi.js:589:19)\n    at Je.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:674542)','','','2021-01-08','2021-01-08 11:47:08','2021-01-08 11:47:08'),
	(2,'zuc',1,'pages/ceshi/ceshi','aa74c99f-0b7d-471b-b72e-678436bad8f3','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\ne is not defined\nReferenceError: e is not defined\n    at Object.wx._request (http://127.0.0.1:60066/appservice/extend/ceshi.js:833:16)\n    at Je.onLoad (http://127.0.0.1:60066/appservice/pages/ceshi/ceshi.js:24:8)\n    at Je.onLoad (http://127.0.0.1:60066/appservice/extend/ceshi.js:589:19)\n    at Je.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:2058868)','','','2021-01-08','2021-01-08 12:16:25','2021-01-08 12:16:25'),
	(3,'zuc',1,'pages/ceshi/ceshi','9b1edf5f-c43e-4e77-81dd-e700d90a0100','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\n_complete is not a function\nTypeError: _complete is not a function\n    at _e.complete (http://127.0.0.1:60066/appservice/extend/ceshi.js:855:9)\n    at Function.i.complete.i.complete (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:1794704)\n    at <api request complete callback function>\n    at http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:121691\n    at k (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:600644)\n    at T (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:599977)\n    at Object.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:1252038)\n    at Object.p.<computed> [as request] (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:882219)\n    at Object.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:661818)\n    at Object.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:1795029)','','','2021-01-08','2021-01-08 12:17:05','2021-01-08 12:17:05'),
	(4,'wuc',1,'pages/ceshi/ceshi','d60a8812-8153-434b-ae60-15eabfbfeefb','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\n_complete is not a function\nTypeError: _complete is not a function\n    at _e.complete (http://127.0.0.1:60066/appservice/extend/ceshi.js:855:24)\n    at Function.i.complete.i.complete (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:1794704)\n    at <api request complete callback function>\n    at http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:121691\n    at k (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:600644)\n    at T (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:599977)\n    at Object.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:1252038)\n    at Object.p.<computed> [as request] (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:882219)\n    at Object.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:661818)\n    at Object.<anonymous> (http://127.0.0.1:60066/appservice/__dev__/WAService.js:2:1795029)','','','2021-01-08','2021-01-08 12:18:22','2021-01-08 12:18:22'),
	(5,'wuc',1,'pages/ceshi/ceshi','568cd1b1-d288-4c72-88fb-79ebef0e71af','1','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','上海','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-11','2021-01-11 02:56:45','2021-01-11 02:56:45'),
	(6,'wuc',1,'pages/ceshi/ceshi','bbe73e82-26a4-4850-8db6-8760d420084c','1','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','杭州','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-11','2021-01-11 02:58:29','2021-01-11 02:58:29'),
	(8,'wuc',1,'pages/ceshi/ceshi','b9441849-3314-44ce-b782-98c2d1be240d','2','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','上海','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-11','2021-01-11 08:46:22','2021-01-11 08:46:22'),
	(9,'wuc',1,'pages/ceshi/ceshi','9568b34c-4f49-454c-90e3-93d7a5805a89','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-11','2021-01-11 09:27:36','2021-01-11 09:27:36'),
	(10,'wuc',1,'pages/ceshi/ceshi','38d9f37f-02e8-4c02-bd84-27919d8df4cd','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-11','2021-01-11 09:27:37','2021-01-11 09:27:37'),
	(11,'wuc',1,'pages/ceshi/ceshi','3a90066c-d11c-4880-94cd-314feadf5b21','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-11','2021-01-11 09:27:38','2021-01-11 09:27:38'),
	(12,'wuc',1,'pages/ceshi/ceshi','96d8108b-9c4a-4845-82fb-178a527f14a5','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-11','2021-01-11 09:27:40','2021-01-11 09:27:40'),
	(13,'wuc',1,'pages/ceshi/ceshi','7f95f883-c0df-435d-82d2-31aaacbb3264','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-11','2021-01-11 09:27:41','2021-01-11 09:27:41'),
	(14,'wuc',1,'pages/ceshi/ceshi','6e0abd02-186e-4ccd-8ed1-8898613e5612','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:39:54','2021-01-12 10:39:54'),
	(15,'wuc',1,'pages/ceshi/ceshi','1f32ad75-476f-48c6-83b2-2e0b104ed3cd','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:39:56','2021-01-12 10:39:56'),
	(16,'wuc',1,'pages/ceshi/ceshi','791d669d-3460-4ccf-b726-9f9ca7158bc2','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:39:57','2021-01-12 10:39:57'),
	(17,'wuc',1,'pages/ceshi/ceshi','a64cef99-573a-4a3f-9777-fa01ba095acb','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:39:59','2021-01-12 10:39:59'),
	(18,'wuc',1,'pages/ceshi/ceshi','6e2c751a-af6c-4d26-9c90-aef98088d2a0','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:40:00','2021-01-12 10:40:00'),
	(19,'wuc',1,'pages/ceshi/ceshi','5d06fce3-ec1c-470f-a83b-1d002e8309f0','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:40:02','2021-01-12 10:40:02'),
	(20,'wuc',1,'pages/ceshi/ceshi','c50f3430-eb89-4889-be4e-3869fa93b000','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:40:04','2021-01-12 10:40:04'),
	(21,'wuc',1,'pages/ceshi/ceshi','ab3210ca-8108-4da6-89b4-3d17af8e21fd','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:40:05','2021-01-12 10:40:05'),
	(22,'wuc',1,'pages/ceshi/ceshi','7a425cdb-a7bb-4aa6-9fd5-bc6d36bb3815','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:40:07','2021-01-12 10:40:07'),
	(23,'wuc',1,'pages/ceshi/ceshi','c9672dc2-05f6-4ec9-9e9b-7dacf4acb36a','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:40:08','2021-01-12 10:40:08'),
	(24,'wuc',1,'pages/ceshi/ceshi','48319781-9178-498f-91eb-8cfc1caa4f51','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:40:10','2021-01-12 10:40:10'),
	(25,'wuc',1,'pages/ceshi/ceshi','76d65c49-510c-406e-8f74-d2877803e949','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:40:12','2021-01-12 10:40:12'),
	(26,'wuc',1,'pages/ceshi/ceshi','e60179e9-7ec4-4674-a2d6-e422b4390b55','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:40:13','2021-01-12 10:40:13'),
	(27,'wuc',1,'pages/ceshi/ceshi','06fbfccc-54e5-4976-97ef-3e55cb8cbcbf','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:40:15','2021-01-12 10:40:15'),
	(28,'wuc',1,'pages/ceshi/ceshi','f535847b-25ec-4113-ba2a-7a1d716d1529','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:40:17','2021-01-12 10:40:17'),
	(29,'wuc',1,'pages/ceshi/ceshi','e17e770a-e4be-492d-9a02-90ace1649a33','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:40:18','2021-01-12 10:40:18'),
	(30,'wuc',1,'pages/ceshi/ceshi','56a32783-e946-4870-8d6f-387a96e0e1e3','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:40:20','2021-01-12 10:40:20'),
	(31,'wuc',1,'pages/ceshi/ceshi','7b2f40c5-fc9a-4cb9-a27a-2b5db1218e85','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 10:40:21','2021-01-12 10:40:21'),
	(32,'wuc',1,'pages/ceshi/ceshi','e1734ee0-b5b2-4e01-82a1-b728e54a1811','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 07:11:12','2021-01-12 07:11:12'),
	(33,'wuc',1,'pages/ceshi/ceshi','6d5b4104-4637-440e-b0fc-77cdbe2cb5ad','','iPhone 6/7/8 Plus','iOS 10.0.1','','7.0.4','','','','','js_error','MiniProgramError\na is not defined\nReferenceError: a is not defined\n    at Je.onLoad (http://127.0.0.1:53139/appservice/pages/ceshi/ceshi.js:23:17)\n    at Je.onLoad (http://127.0.0.1:53139/appservice/extend/ceshi.js:569:19)\n    at Je.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2068179)\n    at Je.p.__callPageLifeTime__ (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2067924)\n    at Dt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2083622)\n    at http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087152\n    at Mt (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2087673)\n    at Function.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2096430)\n    at i.<anonymous> (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:2058868)\n    at i.emit (http://127.0.0.1:53139/appservice/__dev__/WAService.js:2:674542)','','','2021-01-12','2021-01-12 07:52:20','2021-01-12 07:52:20');

/*!40000 ALTER TABLE `javascript_error_info` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table js_count
# ------------------------------------------------------------

DROP TABLE IF EXISTS `js_count`;

CREATE TABLE `js_count` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `app` varchar(30) NOT NULL DEFAULT '' COMMENT '项目',
  `type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1 每隔5分钟总数',
  `count` int(11) NOT NULL COMMENT '总数',
  `dataTime` varchar(30) NOT NULL DEFAULT '' COMMENT '当前日期',
  `createdAt` datetime DEFAULT NULL COMMENT '开始时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '结束时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `js_count` WRITE;
/*!40000 ALTER TABLE `js_count` DISABLE KEYS */;

INSERT INTO `js_count` (`id`, `app`, `type`, `count`, `dataTime`, `createdAt`, `updatedAt`)
VALUES
	(1,'',1,29,'2021-01-12','2021-01-12 20:34:56','2021-01-12 20:34:56'),
	(2,'',1,3,'2021-01-12','2021-01-12 20:34:56','2021-01-12 20:34:56');

/*!40000 ALTER TABLE `js_count` ENABLE KEYS */;
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
