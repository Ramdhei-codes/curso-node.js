const Model = require('./model')

async function getUsers() {
    const users = await Model.find()
    return users
}

function addUser(user) {
    const newUser = new Model(user)
    return newUser.save()
}

module.exports = {
    add: addUser,
    list: getUsers
}