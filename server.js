const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const response = require('./network/response')

const app = express();
app.use(bodyParser.json())
app.use(router);

router.get('/', (req, res) => {
    console.log(req.headers)
    res.header({
        "miHeader": "Benvingut a mi servidor"
    })
    // res.send('Hola mi amigo');
    response.success(req, res, 'Hola amigos')
});

router.get('/comentarios', (req, res) => {
    console.log(req.body)
    console.log(req.query)
    res.send('Lista de comentarios');
});

router.post('/comentarios', (req, res) => {
    // res.status(201).send({
    //     error: "",
    //     message: "Comment created"
    // })
    if(req.query.error === 'ok') {
        response.error(req, res, 'Simulation error', 401)
    } else {
        response.success(req, res, 'Comment created successfully', 201)

    }
});

router.delete('/comentarios', (req, res) => {
    response.success(req, res, 'Comment deleted successfully')
})

// app.use('/', (req, res) => {
//     res.send('Hola Mundo')
// });

app.use('/app', express.static('public'))

app.listen(3000);

console.log('Escuchando en http://localhost:3000');