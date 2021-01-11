const express = require('express');
const bodyParser = require('body-parser')
// const router = require('./components/message/network');
const router = require('./network/routes');


const app = express();
app.use(bodyParser.json())
// app.use(router);

router(app)

// app.use('/', (req, res) => {
//     res.send('Hola Mundo')
// });

app.use('/app', express.static('public'))

app.listen(3000);

console.log('Escuchando en http://localhost:3000');