# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.31)
# Database: web
# Generation Time: 2020-10-04 00:44:04 +0000
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



# Dump of table javascript_error_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `javascript_error_info`;

CREATE TABLE `javascript_error_info` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `simpleUrl` text NOT NULL COMMENT '当前url',
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
	(2,'http://localhost:8080/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'','','','','js_error','ReferenceError%3A%20Uncaught%20ReferenceError%3A%20ss%20is%20not%20defined','ReferenceError: ss is not defined\n    at eval (webpack-internal:///./src/main.js:45:15)','','2020-10-04 07:56:03','2020-10-04 07:56:03');

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
	(2,'aHR0cHMlM0ElMkYlMkZmYW55aS5iYWlkdS5jb20lMkZzdGF0aWMlMkZ0cmFuc2xhdGUtbW9iaWxlJTJGcGtnJTJGYWlvX2U4NTllZTdzcy5qcGc=','img','','http://localhost:8080/','4634e624-162d-4b8c-9d08-a3a85fd661fc-1600500588181','','iphone 6/7/8','ios 13.2.3','',NULL,'','','','','resource_load','','2020-10-04 08:35:58','2020-10-04 08:35:58');

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
