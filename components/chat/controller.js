const store = require('./store')

function getChats(userId) {
    return store.chatList(userId)
}

function addChat(usersIdsArray) {
    return new Promise(async(resolve, reject) => {
        if(usersIdsArray.length <= 1) {
            return reject('There must be two or more members in a chat')
        }

        const usersIds = {
            users: usersIdsArray
        }

        const newChat = store.createChat(usersIds)
        resolve(newChat)
    })
}

module.exports = {
    getChats,
    addChat
}