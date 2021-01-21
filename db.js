const db = require('mongoose')

db.Promise = global.Promise

function connect(connectionURL) {
    db.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('[db] conectado con éxito')
    })
    .catch(error => {
        console.error(error.message)
    })
}

module.exports = connect


