# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.31)
# Database: web
# Generation Time: 2020-10-03 07:33:36 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table javascript_error_info
# ------------------------------------------------------------

DROP TABLE IF EXISTS `javascript_error_info`;

CREATE TABLE `javascript_error_info` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pageKey` varchar(50) NOT NULL DEFAULT '' COMMENT '用户标识ID',
  `deviceName` varchar(100) NOT NULL DEFAULT '' COMMENT '设备名称',
  `os` varchar(20) NOT NULL DEFAULT '' COMMENT '系统信息',
  `browserName` varchar(20) NOT NULL DEFAULT '' COMMENT '浏览器名称',
  `browserVersion` text NOT NULL COMMENT '浏览器版本号',
  `monitorIp` varchar(50) NOT NULL DEFAULT '' COMMENT '用户IP',
  `country` varchar(20) NOT NULL DEFAULT '' COMMENT '国家',
  `province` varchar(30) NOT NULL DEFAULT '' COMMENT '省份',
  `city` varchar(30) NOT NULL DEFAULT '' COMMENT '城市',
  `infoType` varchar(20) NOT NULL DEFAULT '' COMMENT '信息类型',
  `errorMessage` text NOT NULL COMMENT 'JS报错信息',
  `errorStack` text NOT NULL COMMENT 'JS报错堆栈',
  `browserInfo` text NOT NULL COMMENT '浏览器信息',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# Dump of table project
# ------------------------------------------------------------

DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `web_monitorId` int(11) NOT NULL COMMENT '监控ID',
  `project_type` int(11) NOT NULL COMMENT '项目类型',
  `project_name` varchar(11) NOT NULL DEFAULT '' COMMENT '项目名称',
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `email` varchar(11) NOT NULL DEFAULT '' COMMENT '邮箱',
  `status` int(1) NOT NULL COMMENT '是否进来 1 记录 0 不记录',
  `created_at` datetime NOT NULL COMMENT '创建时间',
  `updated_at` datetime NOT NULL COMMENT '修改时间',
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
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
