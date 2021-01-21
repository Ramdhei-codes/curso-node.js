const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', (req, res) => {
    controller.getUsers()
        .then(data => {
            response.success(req, res, data, 200)
        })
        .catch(error => {
            response.error(req, res, 'Internal error', 500, error)
        })
})

router.post('/', (req, res) => {
    controller.addUser(req.body.username)
        .then(data => {
            response.success(req, res, data, 201)
        })
        .catch(error => {
            response.error(req, res, 'Internal error', 500, error)
        })
})

module.exports = router