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
    './commands/save_log/nginxLog', // 每一分钟读取Nginx日志文件，并解析
    './commands/task/index'
]


// register commands
for (let command of registedCommandList) {
    ace.addCommand(require(command)['default'])
}

// Boot ace to execute commands
ace.wireUpWithCommander()
ace.invoke()

