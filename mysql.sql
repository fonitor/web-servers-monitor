CREATE TABLE `monitors` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '发生时间',
  `app_id` varchar(32) NOT NULL DEFAULT '' COMMENT '应用ID',
  `url` varchar(256) NOT NULL DEFAULT '' COMMENT '页面地址',
  `device_name` varchar(32) NOT NULL DEFAULT '' COMMENT '设备名称',
  `os` varchar(64) NOT NULL DEFAULT '' COMMENT '设备系统',
  `browser_name` varchar(32) NOT NULL DEFAULT '' COMMENT '浏览器名称',
  `browser_version` varchar(32) NOT NULL DEFAULT '' COMMENT '浏览器版本',
  `ip` varchar(16) NOT NULL DEFAULT '' COMMENT 'IP地址',
  `data` json DEFAULT NULL COMMENT '自定义数据',
  `api_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '接口请求时间',
  `api_url` varchar(32) NOT NULL DEFAULT '' COMMENT '接口地址',
  `api_request` text COMMENT '请求数据',
  `api_response` text COMMENT '返回数据',
  `api_status` int(11) unsigned NOT NULL DEFAULT '0' COMMENT 'HTTP码',
  `api_request_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '接口请求时长',
  `exception` text COMMENT '异常信息',
  `exception_type` varchar(32) NOT NULL DEFAULT '' COMMENT '异常类型',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;