const express = require('express');
const app = express();
const socket = require('./socket')
const server = require('http').Server(app)

const config = require('./config')
const bodyParser = require('body-parser')
const db = require('./db')


const router = require('./network/routes');

db(config.dbURL)

socket.connect(server)

app.use(bodyParser.json())

router(app)

app.use(config.publicRoute, express.static('public'))

server.listen(3000, function() {
    console.log(`Listening on ${config.host}${config.port}`);
});