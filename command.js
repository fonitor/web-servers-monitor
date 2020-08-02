require('babel-register')({
    presets: ['env']
})

var ace = require('@adonisjs/ace')


/*
|--------------------------------------------------------------------------
| Ace Setup
|--------------------------------------------------------------------------
|
| Ace is the command line utility to create and run terminal commands.
| Here we setup the environment and register ace commands.
|
*/

const registedCommandList = [
    './commands/demo', // 命令demo测试
]


// register commands
for (let command of registedCommandList) {
    ace.addCommand(require(command)['default'])
}

// Boot ace to execute commands
ace.wireUpWithCommander()
ace.invoke()

