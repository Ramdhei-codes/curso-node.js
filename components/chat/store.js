const Model = require('./model')

function getChats(userId) {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (userId) {
            filter = {
                users: userId
            }
        }
        Model.find(filter)
            .populate('users')
            .exec((error, populatedData) => {
                if (error) {
                    return reject(error)
                }

                resolve(populatedData)
            })
    })
}

function addChat(usersOfChat) {
    const newChat = new Model(usersOfChat)
    return newChat.save()
}

module.exports = {
    chatList: getChats,
    createChat: addChat
}