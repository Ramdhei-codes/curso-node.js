const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', (req, res) => {
    controller.getMessages()
        .then(fullMessage => {
            response.success(req, res, fullMessage, 200)
        })
        .catch(error => {
            response.error(req, res, 'Could not get the messages', 500, error)
        })
});

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch((error) => {
            response.error(req, res, error, 401)

        })
});

router.delete('/', (req, res) => {
    response.success(req, res, 'Comment deleted successfully')
})

module.exports = router