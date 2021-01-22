const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/:userId', (req, res) => {
    const userId = req.params.userId || null
    controller.getChats(userId)
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(error => {
            response.error(req, res, 'Internal error', 500, error)
        })
})

router.post('/', (req, res) => {
    controller.addChat(req.body.usersIds)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(error => {
            response.error(req, res, 'Internal error', 500, error)
        })
})

module.exports = router