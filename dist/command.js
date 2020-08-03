"use strict";

require("@babel/polyfill");

var _ace = _interopRequireDefault(require("@adonisjs/ace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
|--------------------------------------------------------------------------
| Ace Setup
|--------------------------------------------------------------------------
|
| Ace is the command line utility to create and run terminal commands.
| Here we setup the environment and register ace commands.
|
*/
const registedCommandList = ['./commands/demo' // 命令demo测试
]; // register commands

for (let command of registedCommandList) {
  _ace.default.addCommand(require(command)['default']);
} // Boot ace to execute commands


_ace.default.wireUpWithCommander();

_ace.default.invoke();