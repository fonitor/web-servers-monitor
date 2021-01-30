import '@babel/polyfill'
/*
|--------------------------------------------------------------------------
| Ace Setup
|--------------------------------------------------------------------------
|
| Ace is the command line utility to create and run terminal commands.
| Here we setup the environment and register ace commands.
|
*/
import ace from '@adonisjs/ace'

const registedCommandList = [
    './commands/demo', // 命令demo测试
    './commands/task/index', // 定时任务
    './commands/save_log/mqLog', // saveLog
    './commands/js/index', // 统计每隔1分钟js错误
    './commands/http/index', // 统计每隔1分钟http 请求
    './commands/page/index', // 统计每隔5分钟pv
]


// register commands
for (let command of registedCommandList) {
    ace.addCommand(require(command)['default'])
}

// Boot ace to execute commands
ace.wireUpWithCommander()
ace.invoke()

