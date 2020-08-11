import amqp from 'amqplib'


export default class RabbitMq {
    constructor() {
        this.hosts = ["amqp://localhost"];
        this.index = 0;
        this.length = this.hosts.length;
        this.open = amqp.connect(this.hosts[this.index]);
    }

    /**
     * 消息生产者
     * @param {*} queueName 
     * @param {*} msg 
     * @param {*} errCallBack 
     */
    sendQueueMsg(queueName, msg, errCallBack) {
        
    }

    /**
     * 消息消费者
     * @param {*} queueName 
     * @param {*} receiveCallBack 
     * @param {*} errCallBack 
     */
    receiveQueueMsg(queueName, receiveCallBack, errCallBack) {

    }
}