const store = require('./store')

function getUsers() {
    return store.list()
}

function addUser(name) {
    const newUser = {
        name: name,
    }
    return store.add(newUser)
}

module.exports = {
    addUser,
    getUsers
}