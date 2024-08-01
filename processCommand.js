const db = require('./dbmethods')

// db commands which can be used in CLI

const processCommand = (command) => {
    switch(command) {
        case 'create':
            db.createTable()
            break
        case 'insert':
            db.insertRow()
            break
        case 'select':
            db.readData()
            break
        case 'update':
            db.updateRow()
            break
        case 'delete':
            db.deleteRow()
            break
        default:
            console.log('Invalid command!')
            break
    }
}

module.exports = processCommand