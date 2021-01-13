const db = require('mongoose')
const Model = require('./model')

const uri = 'mongodb://db_user_chatApp:ELdiErfsBOti0uX9@cluster0-shard-00-00.lsr89.mongodb.net:27017,cluster0-shard-00-01.lsr89.mongodb.net:27017,cluster0-shard-00-02.lsr89.mongodb.net:27017/chatApp_db?ssl=true&replicaSet=atlas-m6gydj-shard-0&authSource=admin&retryWrites=true&w=majority'

db.Promise = global.Promise

db.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {

        console.log('[db] conectado con éxito')
    })
    .catch(error => {
        console.error(error.message)
    })


function addMessage(message) {
    // list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages() {
    // return list
    const messages = await Model.find()
    return messages
}

module.exports = {
    add: addMessage,
    list: getMessages
}