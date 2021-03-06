const express = require('express')
const multer = require('multer')
const path = require('path')
const config = require('../../config')

const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')


const upload = multer({
    dest: `public/${config.filesRoute}/`
})

router.get('/', (req, res) => {
    const filteredUser = req.query.user || null
    controller.getMessages(filteredUser)
        .then(fullMessage => {
            response.success(req, res, fullMessage, 200)
        })
        .catch(error => {
            response.error(req, res, 'Could not get the messages', 500, error)
        })
});

router.post('/', upload.single('file'), (req, res) => {
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch((error) => {
            response.error(req, res, 'Internal error', 401, error)

        })
});

router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then(fullMessage => {
            response.success(req, res, fullMessage, 200)
        })
        .catch(error => {
            response.error(req, res, 'Internal error', 500, error)
        })
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(deletedMessage => {
            response.success(req, res, 'Message deleted successfully', 200)
        })
        .catch(error => {
            response.error(req, res, 'Internal error, could not delete', 500, error)
        })
})

module.exports = router