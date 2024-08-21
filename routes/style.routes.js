const router = require('express').Router()

const Style = require('./../models/Style.model')

router.post('/styles', (req, res, next) => {
    const { style } = req.body

    Style
        .create({ style })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})

router.get('/styles', (req, res, next) => {

    Style
        .find()
        .then(styles => res.json(styles))
        .catch(err => next(err))
})

module.exports = router