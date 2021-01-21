const Model = require('./model')

function addMessage(message) {
    // list.push(message)
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages(filteredUser) {
    let filter = {}
    if(filteredUser !== null) {
        filter = { user: filteredUser }
    }
    const messages = await Model.find(filter)
    return messages
}

async function updateText(id, message) {
    const updatedMessage = await Model.findById(id)

    updatedMessage.message =  message

    const newMessage = await updatedMessage.save()
    return newMessage
}

function deleteMessage(id) {
    return Model.deleteOne({_id: id})
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateText,
    delete: deleteMessage
}