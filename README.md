# web-monitor

### orm

- sequelize

前端监控系统搭建初版

<img src="http://missxiaolin.com/%E5%89%8D%E7%AB%AF%E7%9B%91%E6%8E%A7%E4%BD%93%E7%B3%BB.png" />

### 前端监控模块

<img src="http://missxiaolin.com/%E5%89%8D%E7%AB%AF%E7%9B%91%E6%8E%A7%E6%A8%A1%E5%9D%97.png" />

### 前端监控的基本目的是什么

- 有没有人用
- 用的怎么样
- 有什么异常
- 如何跟踪
- 分析解决
- 提供决策

<img src="http://missxiaolin.com/%E7%9B%91%E6%8E%A71592141625475.jpg" />

### pm2 守护进程

### 安装pm2

~~~
cnpm i pm2 -g
~~~

### 项目创建pm2.jsom

~~~
pm2 start pm2.json
~~~

### 常用pm2 指令

~~~
pm2 start app.js # 启动应用
pm2 start app.js --name="demo" # 启动应用名为demo
pm2 start app.js --watch # 当文件发送变化自动重启应用
pm2 start script.sh # 启动 bash 脚本
pm2 list # 列出PM2启动的应用列表
pm2 show [app-name] # 显示应用的所有信息
pm2 logs # 显示所有应用的程序日志
pm2 logs [app-name] # 显示指定应用程序的日志
pm2 stop all # 停止所有的应用程序
pm2 stor 0 # 停止id为0的应用
pm2 restart all # 重启所有应用
pm2 restart 0 # 重启id为0的应用
pm2 delete all # 关闭删除所有应用
~~~

### server 架构图

<img src="http://missxiaolin.com/jk_20200805.png" />

### 收集

#### log_format配置

~~~
log_format main '$time_local        -       -       $http_x_real_ip $http_host      $status $request_time   $request_length $body_bytes_sent        15d04347-be16-b9ab-0029-24e4b6645950    -       -       9689c3ea-5155-2df7-a719-e90d2dedeb2c    937ba755-116a-18e6-0735-312cba23b00c    $request_method $server_protocol        $request_uri    -       $http_user_agent        -       sample=-&_UC_agent=-&test_device_id=-&-      -       -       -';
~~~

#### 用于接受来自SDK的打点请求

~~~
location = /test.gif {
    empty_gif;
}
~~~

### 测试

http://10.26.15.49/test.gif?a=1

检查access.log，没有问题的话，应该会有如下格式的日志被写入

~~~
05/Aug/2020:20:23:06 +0800        -       -       - www.xl-jk.com      200 0.000   491 43        15d04347-be16-b9ab-0029-24e4b6645950    -       -       9689c3ea-5155-2df7-a719-e90d2dedeb2c    937ba755-116a-18e6-0735-312cba23b00c    GET HTTP/1.1        /test.gif?a=1    -       Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36        -       sample=-&_UC_agent=-&test_device_id=-&-      -       -       -
~~~

### 定时任务

- 任务（@adonisjs/ace）
- 定时脚本执行（node-schedule）
