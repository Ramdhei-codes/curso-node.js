const express = require('express');
const bodyParser = require('body-parser')
const db = require('./db')

const uri = 'mongodb://db_user_chatApp:ELdiErfsBOti0uX9@cluster0-shard-00-00.lsr89.mongodb.net:27017,cluster0-shard-00-01.lsr89.mongodb.net:27017,cluster0-shard-00-02.lsr89.mongodb.net:27017/chatApp_db?ssl=true&replicaSet=atlas-m6gydj-shard-0&authSource=admin&retryWrites=true&w=majority'

const router = require('./network/routes');

db(uri)


const app = express();
app.use(bodyParser.json())

router(app)

app.use('/app', express.static('public'))

app.listen(3000);

console.log('Escuchando en http://localhost:3000');