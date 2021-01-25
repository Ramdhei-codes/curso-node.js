const express = require('express');
const app = express();
const socket = require('./socket')
const server = require('http').Server(app)
const bodyParser = require('body-parser')
const db = require('./db')

const uri = 'mongodb://db_user_chatApp:ELdiErfsBOti0uX9@cluster0-shard-00-00.lsr89.mongodb.net:27017,cluster0-shard-00-01.lsr89.mongodb.net:27017,cluster0-shard-00-02.lsr89.mongodb.net:27017/chatApp_db?ssl=true&replicaSet=atlas-m6gydj-shard-0&authSource=admin&retryWrites=true&w=majority'

const router = require('./network/routes');

db(uri)

socket.connect(server)

app.use(bodyParser.json())

router(app)

app.use('/', express.static('public'))

server.listen(3000, function() {
    console.log('Escuchando en http://localhost:3000');
});