const store = require('./store')

function addMessage(chat, user, message) {
    return new Promise((resolve, reject) => {

        if(!chat ||!user || !message) {
            console.error('[Controller error] invalid data')
            return reject('Invalid data')
        }


        const fullMessage = {
            "chat": chat,
            "user": user,
            "message": message,
            "date": new Date()
        }

        store.add(fullMessage)

        resolve(fullMessage)
    })
}

function getMessages(filteredUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filteredUser))
    })
}

function updateMessage(id, message) {
    return new Promise(async(resolve, reject) => {
        if(!id || !message) {
            return reject('Invalid data')
        }

        const result = await store.update(id, message)
        resolve(result)
    })
}

function deleteMessage(id) {
    return new Promise(async(resolve, reject) => {
        if(!id) {
            return reject('Invalid data')
        }

        store.delete(id)
            .then(() => {
                resolve()
            })
            .catch(error => {
                console.error(error)
            })
    })
}

module.exports =  {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}