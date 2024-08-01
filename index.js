const processCommand = require('./processCommand')
const input = require('./consoleConfig')

console.log("Welcome to MagicDB")

console.log("Available commands: ")
console.log("create, insert, select, update, delete")

console.log("Enter your command: ")
input.prompt()

input.on('line', (command) => {
    processCommand(command)
    input.prompt()
})