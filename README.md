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

docker 相关

- Docker以及Docker Compose的安装请参照[官网文档](https://docs.docker.com/get-docker/)
- 通过docker-compose的方式部署（若对kafka以及docker不熟悉，请先了解相关知识）。相关配置参见：[Docker compose Kafka](https://gist.github.com/alphawq/1c2dc14cbc303e32ec45c64e2d764284#docker-compose-kafka-zookeeper-and-kafka-manager), [Zookeeper and Kafka manager](https://gist.github.com/alphawq/1c2dc14cbc303e32ec45c64e2d764284#docker-compose-kafka-zookeeper-and-kafka-manager)

### 定时任务

- 任务（@adonisjs/ace）
- 定时脚本执行（node-schedule）

#### node-schedule

Cron风格定时器

~~~
const schedule = require('node-schedule');

const  scheduleCronstyle = ()=>{
  //每分钟的第30秒定时执行一次:
    schedule.scheduleJob('30 * * * * *',()=>{
        console.log('scheduleCronstyle:' + new Date());
    }); 
}

scheduleCronstyle();
~~~

规则参数讲解 *代表通配符

~~~
*  *  *  *  *  *
┬ ┬ ┬ ┬ ┬ ┬
│ │ │ │ │  |
│ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
│ │ │ │ └───── month (1 - 12)
│ │ │ └────────── day of month (1 - 31)
│ │ └─────────────── hour (0 - 23)
│ └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
~~~

6个占位符从左到右分别代表：秒、分、时、日、月、周几

*表示通配符，匹配任意，当秒是*时，表示任意秒数都触发，其它类推

下面可以看看以下传入参数分别代表的意思

~~~
每分钟的第30秒触发： '30 * * * * *'

每小时的1分30秒触发 ：'30 1 * * * *'

每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'

每月的1日1点1分30秒触发 ：'30 1 1 1 * *'

2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'

每周1的1点1分30秒触发 ：'30 1 1 * * 1'
~~~

每个参数还可以传入数值范围:

~~~
const task1 = ()=>{
  //每分钟的1-10秒都会触发，其它通配符依次类推
  schedule.scheduleJob('1-10 * * * * *', ()=>{
    console.log('scheduleCronstyle:'+ new Date());
  })
}

task1()
~~~

对象文本语法定时器

~~~
const schedule = require('node-schedule');

function scheduleObjectLiteralSyntax(){

    //dayOfWeek
    //month
    //dayOfMonth
    //hour
    //minute
    //second
      //每周一的下午16：11分触发，其它组合可以根据我代码中的注释参数名自由组合
    schedule.scheduleJob({hour: 16, minute: 11, dayOfWeek: 1}, function(){
        console.log('scheduleObjectLiteralSyntax:' + new Date());
    });
   
}

scheduleObjectLiteralSyntax();
~~~

取消定时器

调用 定时器对象的cancl()方法即可

~~~
const schedule = require('node-schedule');

function scheduleCancel(){

    var counter = 1;
    const j = schedule.scheduleJob('* * * * * *', function(){
        
        console.log('定时器触发次数：' + counter);
        counter++;
        
    });

    setTimeout(function() {
        console.log('定时器取消')
      // 定时器取消
        j.cancel();   
    }, 5000);
    
}

scheduleCancel();
~~~

### 页面性能监控

页面性能

前面都是错误的一些监控，接下来项目的一些性能，点击热力图如何绘制？

<img src="http://missxiaolin.com/image2020-8-9_16-27-37.png" />
<img src="http://missxiaolin.com/image2020-8-9_16-29-16.png" />

通常我们都是通过浏览器的performmance对象来获取常规的性能指标（如上图所示，perfommance 流程图及兼容性）

- navigationStart 浏览器处理当前网页启动时间
- fetchStart 浏览器发起HTTP请求读取温度的毫秒时间戳
- domainLookupStart 域名查询开始时的时间戳
- connectStart HTTP请求开始向服务器发送的时间戳
- connectEnd 浏览器与服务器连接建立（握手和认证过程结束）的毫秒时间戳
- requestStart 浏览器向服务发出HTTP请求时的时间戳，或者开始读取本地缓存的时间
- resonseStart 浏览器从服务器（或读取本地缓存）收到第一个字节时的时间戳
- responseEnd 浏览器从服务器收到最后一个字节时的时间戳
- domLoding 浏览器开始解析网页dom结构的时间
- domInteractice 网页dom树创建完成开始加载内嵌资源的时间
- domContentLodedEventStart 网页domContentLoaded 事件发生时的时间戳
- domContentLoadedEvendEnd 网页所有需要执行的脚本执行完成时的时间，domReady的时间
- loadEventStart 当前网页load事件的回调函数开始执行的时间戳
- loadEventEnd 当前网页load 事件的回调函数结束的时间戳

等等当然这只是其中一份数据，那么通过这份数据我们可以检测那些信息呢：

- dns查询耗时   dns解析耗时     domainLookupEnd - domainLookupStart
- 请求响应耗时  网络请求耗时    responseStart - requestStart	
- DOM 解析耗时	dom解析耗时	domInteractive - responseEnd	
- 内容传输耗时  TCP连接耗时 responseEnd - responseStart	
- 资源加载耗时  资源加载耗时    loadEventStart - domContentLoadedEventEnd
- DOM_READY耗时 dom阶段渲染耗时 domContentLoadedEventEnd - fetchStart	
- 首次渲染耗时  首次渲染时间/白屏时间   responseEnd - fetchStart	
- 首次可交互耗时    首次可交互时间  domInteractve - fetcgStart	
- 首包时间耗时  首包时间    responseStart - domainLookupStart
- 页面完全加载耗时  页面完全加载时间    loadEventStart - fetchStart	
- SSL连接耗时   SSL安全连接耗时 connectEnd - secureConnectionStart
- TCP连接耗时   TCP连接耗时 connectEnd - connectStart

这部分值已经能反应一些问题：

- DNS查询耗时可以对开发者的CND服务器公祖是否正常做出反馈
- 请求响应耗时能对出返回模板中同步数据的情况作出反馈
- 由DOM解析耗时可以观察我们的DOM结构是否合理，以及是否有JavaScript阻塞我们的页面解析
- 内容传输耗时可以检测出我们的网络是否正常
- 资源加载耗时一般情况下是文档下载时间，主要观察一下文档流体积是否过大
- DOM_READY 耗时通常是DOM树解析完成后，网页内资源加载完成的时间
- 首次渲染耗时表述的是浏览器去加载文档到用户能看到第一帧非空图像，也叫白屏时间
- 首次交互耗时是dom树解析完成的时间
- 首包时间耗时是浏览器对文档发起查找DNS（域名系统）表的请求，到请求返回给浏览器第一个字节数据的时间，这个时间通常反馈的是DNS（域名系统）解析查询的时间
- 页面完全加载耗时指的是下载整个页面的总时间，一般情况下指浏览器对一个URL（统一资源定位符，是对可以从互联网上得到的资源的位置和访问方法的一种简-介的表示，是互联网上标准资源的地址）发起请求到把这个URL上的所需文档下载下来的时间。这个数据主要受到网络环境、文档大小的影响
- SSL连接耗时反馈的是数据安全性、完整性建立耗时
- TCP连接耗时指的是建立连接过程中的耗时，TCP协议主要工作与传输层，是一种UDP更为安全的传输协议