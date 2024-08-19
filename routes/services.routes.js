const router = require("express").Router()

const Service = require('./../models/Service.model')

router.post("/services", (req, res, next) => {

    const { title, images, packs } = req.body

    Service
        .create({ title, images, packs })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})

router.get("/services", (req, res, next) => {

    Service
        .find()
        .then((services) => res.json(services))
        .catch(err => next(err))
})

router.get("/services/search", (req, res, next) => {

    const { title } = req.query

    Service
        .find({ title: { $regex: title, $options: 'i' } })
        .then((service) => res.json(service))
        .catch(err => next(err))
})

router.get("/services/:serviceId", (req, res, next) => {

    const { serviceId } = req.params

    Service
        .findById(serviceId)
        .then((service) => res.json(service))
        .catch(err => next(err))
})

router.put("/services/:serviceId", (req, res, next) => {

    const { serviceId } = req.params
    const { title, images, packs } = req.body

    Service
        .findByIdAndUpdate(serviceId, { title, images, packs })
        .then((service) => res.json(service))
        .catch(err => next(err))
})

router.delete("/services/:serviceId", (req, res, next) => {

    const { serviceId } = req.params

    Service
        .findByIdAndDelete(serviceId)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})

module.exports = router
