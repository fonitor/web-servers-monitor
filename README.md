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

### 日志监听

- flume
- rsyslog

安装

~~~
yum install rsyslog
yum install rsyslog-kafka.x86_64
~~~

rsyslog配置

编辑配置文件（路径 /etc/rsyslog.conf  ），在配置文件 #### MODULES #### 的下面添加如下配置（或者在 /etc/rsyslogd/ 目录下添加 XXX.conf 配置文件）

~~~
# 加载omkafka和imfile模块
module(load="omkafka")
module(load="imfile")
 
# nginx template
template(name="nginxAccessTemplate" type="string" string="%hostname%<-+>%syslogtag%<-+>%msg%\n")
 
# ruleset
ruleset(name="nginx-kafka") {
    #日志转发kafka
    action (
        type="omkafka"
	    template="nginxAccessTemplate"
        topic="fee-test"
        broker="localhost:9092"
    )
}
 
# 定义消息来源及设置相关的action
input(type="imfile" Tag="nginx-accesslog" File="/var/log/access.log" Ruleset="nginx-kafka")
~~~

配置简单说明：

- localhost:9092 需要修改为你自己的kafka地址（如果为集群多个地址逗号分隔）
- /var/log/access.log 是监控的nginx日志文件
- topic: fee-test后续通过 kafka-manager 创建


修改完配置后运行： rsyslogd -N 1 或者 rsyslogd -dn 查看配置是否报错

然后重启 rsyslog --service rsyslog restart 重启后查看 /var/log/message 中日志是否报错。

参考文档：

- rsyslog v8-stable(https://www.rsyslog.com/doc/v8-stable/index.html)
- 日志收集之rsyslog kafka配置(https://blog.csdn.net/flyfelu/article/details/83150259)
- 日志收集之rsyslog to kafka(https://www.jianshu.com/p/1b7fdb1cff3c)

### 日志消费

- kafka

#### mac 安装kafka

~~~
brew install kafka
~~~

如果缺少JDK8依赖，或安装了JDK10，则需要先通过brew cask插件安装JDK8：

~~~
brew cask install java8
~~~

安装位置

~~~
/usr/local/Cellar/zookeeper
/usr/local/Cellar/kafka
~~~

配置文件位置

~~~
/usr/local/etc/kafka/server.properties
/usr/local/etc/kafka/zookeeper.properties
~~~

启动

~~~
brew services start zookeeper
brew services start kafka
~~~

创建topic

~~~
kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test
~~~

查看创建的topic

~~~
kafka-topics --list --zookeeper localhost:2181
~~~

发送一些消息

~~~
kafka-console-producer --broker-list localhost:9092 --topic test 
~~~

### 定时任务

- 任务（@adonisjs/ace）
- 定时脚本执行（node-schedule）
