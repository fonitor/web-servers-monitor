# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.31)
# Database: web
# Generation Time: 2020-10-20 09:48:00 +0000
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
  `simpleUrl` text COMMENT '当前url',
  `projectVersion` varchar(50) NOT NULL DEFAULT '' COMMENT '项目版本号',
  `customerKey` varchar(100) NOT NULL DEFAULT '' COMMENT '唯一会话ID',
  `pageKey` varchar(50) NOT NULL DEFAULT '' COMMENT '用户标识ID',
  `deviceName` varchar(100) NOT NULL DEFAULT '' COMMENT '设备名称',
  `os` varchar(20) NOT NULL DEFAULT '' COMMENT '系统信息',
  `browserName` varchar(20) NOT NULL DEFAULT '' COMMENT '浏览器名称',
  `browserVersion` text COMMENT '浏览器版本号',
  `browserInfo` text COMMENT '浏览器版信息',
  `monitorIp` varchar(50) NOT NULL DEFAULT '' COMMENT '用户ip',
  `country` varchar(20) NOT NULL DEFAULT '' COMMENT '国家',
  `province` varchar(30) NOT NULL DEFAULT '' COMMENT '省份',
  `city` varchar(30) NOT NULL DEFAULT '' COMMENT '城市',
  `referrer` text COMMENT '页面来源',
  `createdAt` datetime NOT NULL COMMENT '创建时间',
  `updatedAt` datetime NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table http_log_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `http_log_info`;

CREATE TABLE `http_log_info` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `simpleUrl` text COMMENT '当前url',
  `customerKey` varchar(100) NOT NULL DEFAULT '' COMMENT '唯一会话ID',
  `pageKey` varchar(50) NOT NULL DEFAULT '' COMMENT '用户标识ID',
  `deviceName` varchar(100) NOT NULL DEFAULT '' COMMENT '设备名称',
  `os` varchar(20) NOT NULL DEFAULT '' COMMENT '系统信息',
  `browserName` varchar(20) NOT NULL DEFAULT '' COMMENT '浏览器名称',
  `browserVersion` text COMMENT '浏览器版本号',
  `monitorIp` varchar(50) NOT NULL DEFAULT '' COMMENT '用户IP',
  `country` varchar(20) NOT NULL DEFAULT '' COMMENT '国家',
  `province` varchar(30) NOT NULL DEFAULT '' COMMENT '省份',
  `city` varchar(30) NOT NULL DEFAULT '' COMMENT '城市',
  `uploadType` varchar(20) NOT NULL DEFAULT '' COMMENT '信息类型',
  `browserInfo` text COMMENT '浏览器信息',
  `loadTime` varchar(20) NOT NULL DEFAULT '' COMMENT '接口耗时',
  `responseText` text COMMENT '接口返回数据',
  `status` int(3) NOT NULL COMMENT '接口状态',
  `statusText` text COMMENT '状态描述',
  `createdAt` datetime NOT NULL COMMENT '创建时间',
  `updatedAt` datetime NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table javascript_error_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `javascript_error_info`;

CREATE TABLE `javascript_error_info` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `simpleUrl` text COMMENT '当前url',
  `customerKey` varchar(100) NOT NULL DEFAULT '' COMMENT '唯一会话ID',
  `pageKey` varchar(50) NOT NULL DEFAULT '' COMMENT '用户标识ID',
  `deviceName` varchar(100) NOT NULL DEFAULT '' COMMENT '设备名称',
  `os` varchar(20) NOT NULL DEFAULT '' COMMENT '系统信息',
  `browserName` varchar(20) NOT NULL DEFAULT '' COMMENT '浏览器名称',
  `browserVersion` text COMMENT '浏览器版本号',
  `monitorIp` varchar(50) NOT NULL DEFAULT '' COMMENT '用户IP',
  `country` varchar(20) NOT NULL DEFAULT '' COMMENT '国家',
  `province` varchar(30) NOT NULL DEFAULT '' COMMENT '省份',
  `city` varchar(30) NOT NULL DEFAULT '' COMMENT '城市',
  `uploadType` varchar(20) NOT NULL DEFAULT '' COMMENT '信息类型',
  `errorMessage` text COMMENT 'JS报错信息',
  `errorStack` text COMMENT 'JS报错堆栈',
  `browserInfo` text COMMENT '浏览器信息',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `javascript_error_info` WRITE;
/*!40000 ALTER TABLE `javascript_error_info` DISABLE KEYS */;

INSERT INTO `javascript_error_info` (`id`, `simpleUrl`, `customerKey`, `pageKey`, `deviceName`, `os`, `browserName`, `browserVersion`, `monitorIp`, `country`, `province`, `city`, `uploadType`, `errorMessage`, `errorStack`, `browserInfo`, `createdAt`, `updatedAt`)
VALUES
	(1,'http://localhost:8080/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','ReferenceError%3A%20Uncaught%20ReferenceError%3A%20ss%20is%20not%20defined','ReferenceError: ss is not defined\n    at eval (webpack-internal:///./src/main.js:45:15)','','2020-10-03 05:04:44','2020-10-03 05:04:44'),
	(2,'http://localhost:8080/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'','','','','js_error','ReferenceError%3A%20Uncaught%20ReferenceError%3A%20ss%20is%20not%20defined','ReferenceError: ss is not defined\n    at eval (webpack-internal:///./src/main.js:45:15)','','2020-10-04 07:56:03','2020-10-04 07:56:03'),
	(3,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:11:06','2020-10-16 05:11:06'),
	(4,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1004:20)','','2020-10-16 05:14:43','2020-10-16 05:14:43'),
	(5,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:14:43','2020-10-16 05:14:43'),
	(6,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1003:20)','','2020-10-16 05:11:06','2020-10-16 05:11:06'),
	(7,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:19:06','2020-10-16 05:19:06'),
	(8,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1008:20)','','2020-10-16 05:19:06','2020-10-16 05:19:06'),
	(9,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:24:48','2020-10-16 05:24:48'),
	(10,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1008:20)','','2020-10-16 05:24:48','2020-10-16 05:24:48'),
	(11,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:26:58','2020-10-16 05:26:58'),
	(12,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1008:20)','','2020-10-16 05:26:58','2020-10-16 05:26:58'),
	(13,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:27:13','2020-10-16 05:27:13'),
	(14,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1008:20)','','2020-10-16 05:27:13','2020-10-16 05:27:13'),
	(15,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:28:08','2020-10-16 05:28:08'),
	(16,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1008:20)','','2020-10-16 05:28:08','2020-10-16 05:28:08'),
	(17,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:28:40','2020-10-16 05:28:40'),
	(18,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1008:20)','','2020-10-16 05:28:40','2020-10-16 05:28:40'),
	(19,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','PC','web','chrome','86.0.4240.80','117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:29:43','2020-10-16 05:29:43'),
	(20,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','PC','web','chrome','86.0.4240.80','117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1008:20)','','2020-10-16 05:29:44','2020-10-16 05:29:44'),
	(21,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','ReferenceError%3A%20Uncaught%20ReferenceError%3A%20i%20is%20not%20defined','ReferenceError: i is not defined\n    at eval (webpack-internal:///./src/utils/log/httpLog.js:223:14)\n    at XMLHttpRequest.fire (webpack-internal:///./src/utils/log/httpLog.js:195:16)\n    at XMLHttpRequest.eval (webpack-internal:///./src/utils/log/httpLog.js:203:16)','','2020-10-16 05:30:45','2020-10-16 05:30:45'),
	(22,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1012:20)','','2020-10-16 05:30:45','2020-10-16 05:30:45'),
	(23,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','ReferenceError%3A%20Uncaught%20ReferenceError%3A%20i%20is%20not%20defined','ReferenceError: i is not defined\n    at eval (webpack-internal:///./src/utils/log/httpLog.js:223:14)\n    at XMLHttpRequest.fire (webpack-internal:///./src/utils/log/httpLog.js:195:16)\n    at XMLHttpRequest.eval (webpack-internal:///./src/utils/log/httpLog.js:203:16)','','2020-10-16 05:31:41','2020-10-16 05:31:41'),
	(24,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1012:20)','','2020-10-16 05:31:41','2020-10-16 05:31:41'),
	(25,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:33:04','2020-10-16 05:33:04'),
	(26,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1010:20)','','2020-10-16 05:33:04','2020-10-16 05:33:04'),
	(27,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','ReferenceError%3A%20Uncaught%20ReferenceError%3A%20i%20is%20not%20defined','ReferenceError: i is not defined\n    at eval (webpack-internal:///./src/utils/log/httpLog.js:223:14)\n    at XMLHttpRequest.fire (webpack-internal:///./src/utils/log/httpLog.js:195:16)\n    at XMLHttpRequest.eval (webpack-internal:///./src/utils/log/httpLog.js:203:16)','','2020-10-16 05:33:16','2020-10-16 05:33:16'),
	(28,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1012:20)','','2020-10-16 05:33:16','2020-10-16 05:33:16'),
	(29,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','ReferenceError%3A%20Uncaught%20ReferenceError%3A%20i%20is%20not%20defined','ReferenceError: i is not defined\n    at eval (webpack-internal:///./src/utils/log/httpLog.js:224:14)\n    at XMLHttpRequest.fire (webpack-internal:///./src/utils/log/httpLog.js:195:16)\n    at XMLHttpRequest.eval (webpack-internal:///./src/utils/log/httpLog.js:203:16)','','2020-10-16 05:33:38','2020-10-16 05:33:38'),
	(30,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1013:20)','','2020-10-16 05:33:38','2020-10-16 05:33:38'),
	(31,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','ReferenceError%3A%20Uncaught%20ReferenceError%3A%20i%20is%20not%20defined','ReferenceError: i is not defined\n    at eval (webpack-internal:///./src/utils/log/httpLog.js:224:14)\n    at XMLHttpRequest.fire (webpack-internal:///./src/utils/log/httpLog.js:195:16)\n    at XMLHttpRequest.eval (webpack-internal:///./src/utils/log/httpLog.js:203:16)','','2020-10-16 05:34:25','2020-10-16 05:34:25'),
	(32,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1014:20)','','2020-10-16 05:34:25','2020-10-16 05:34:25'),
	(33,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:35:27','2020-10-16 05:35:27'),
	(34,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1015:20)','','2020-10-16 05:35:27','2020-10-16 05:35:27'),
	(35,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:36:41','2020-10-16 05:36:41'),
	(36,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1023:20)','','2020-10-16 05:36:41','2020-10-16 05:36:41'),
	(37,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:37:31','2020-10-16 05:37:31'),
	(38,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1063:20)','','2020-10-16 05:37:31','2020-10-16 05:37:31'),
	(39,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:38:17','2020-10-16 05:38:17'),
	(40,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1064:20)','','2020-10-16 05:38:17','2020-10-16 05:38:17'),
	(41,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:38:39','2020-10-16 05:38:39'),
	(42,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1055:20)','','2020-10-16 05:38:39','2020-10-16 05:38:39'),
	(43,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:38:43','2020-10-16 05:38:43'),
	(44,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1055:20)','','2020-10-16 05:38:43','2020-10-16 05:38:43'),
	(45,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','ReferenceError%3A%20Uncaught%20ReferenceError%3A%20e%20is%20not%20defined','ReferenceError: e is not defined\n    at eval (webpack-internal:///./src/utils/log/httpLog.js:222:21)\n    at XMLHttpRequest.fire (webpack-internal:///./src/utils/log/httpLog.js:195:16)\n    at XMLHttpRequest.eval (webpack-internal:///./src/utils/log/httpLog.js:203:16)','','2020-10-16 05:40:26','2020-10-16 05:40:26'),
	(46,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1055:20)','','2020-10-16 05:40:26','2020-10-16 05:40:26'),
	(47,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','ReferenceError%3A%20Uncaught%20ReferenceError%3A%20e%20is%20not%20defined','ReferenceError: e is not defined\n    at eval (webpack-internal:///./src/utils/log/httpLog.js:223:21)\n    at XMLHttpRequest.fire (webpack-internal:///./src/utils/log/httpLog.js:195:16)\n    at XMLHttpRequest.eval (webpack-internal:///./src/utils/log/httpLog.js:203:16)','','2020-10-16 05:40:35','2020-10-16 05:40:35'),
	(48,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1056:20)','','2020-10-16 05:40:35','2020-10-16 05:40:35'),
	(49,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:41:00','2020-10-16 05:41:00'),
	(50,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1055:20)','','2020-10-16 05:41:00','2020-10-16 05:41:00'),
	(51,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:42:05','2020-10-16 05:42:05'),
	(52,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1055:20)','','2020-10-16 05:42:05','2020-10-16 05:42:05'),
	(53,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 05:56:48','2020-10-16 05:56:48'),
	(54,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1055:20)','','2020-10-16 05:56:48','2020-10-16 05:56:48'),
	(55,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 06:09:57','2020-10-16 06:09:57'),
	(56,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1055:20)','','2020-10-16 06:09:57','2020-10-16 06:09:57'),
	(57,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 06:11:21','2020-10-16 06:11:21'),
	(58,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1055:20)','','2020-10-16 06:11:21','2020-10-16 06:11:21'),
	(59,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 06:11:45','2020-10-16 06:11:45'),
	(60,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1055:20)','','2020-10-16 06:11:45','2020-10-16 06:11:45'),
	(61,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 06:12:11','2020-10-16 06:12:11'),
	(62,'http://localhost:8081/','ae767747-cba5-45ce-8b14-8f22fb1f8186-1602840580872','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1055:20)','','2020-10-16 06:12:11','2020-10-16 06:12:11'),
	(63,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','%3A%20','','','2020-10-16 06:12:26','2020-10-16 06:12:26'),
	(64,'http://localhost:8081/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'117.144.207.139','中国','上海','上海','js_error','UncaughtInPromiseError%3A%20Network%20request%20failed','UncaughtInPromiseError: TypeError: Network request failed\n    at XMLHttpRequest.xhr.onerror (webpack-internal:///./src/utils/log/httpLog.js:1055:20)','','2020-10-16 06:12:26','2020-10-16 06:12:26');

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
