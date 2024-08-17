const router = require("express").Router()

const Service = require('./../models/Service.model')

router.get("/services", (req, res, next) => {

    Service
        .find()
        .then((services) => res.json(services))
        .catch(err => next(err))
})

router.post("/services", (req, res, next) => {

    const { title, images, packs } = req.body

    Service
        .create({ title, images, packs })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})

module.exports = router
