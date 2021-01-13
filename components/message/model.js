const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
    user: String,
    message: String,
    date: Date
})

const model = mongoose.model('Message', messageSchema)

module.exports = model