const Model = require('./model')

function addMessage(message) {
    // list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
}

function getMessages(filteredUser) {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (filteredUser !== null) {
            filter = { user: filteredUser }
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if(error) {
                    return reject(error)
                }
                resolve(populated)
            })
    })

}

async function updateText(id, message) {
    const updatedMessage = await Model.findById(id)

    updatedMessage.message = message

    const newMessage = await updatedMessage.save()
    return newMessage
}

function deleteMessage(id) {
    return Model.deleteOne({ _id: id })
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateText,
    delete: deleteMessage
}