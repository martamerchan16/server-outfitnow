const router = require("express").Router()

const User = require('./../models/User.model')
const Service = require('./../models/Service.model')

router.get("/users/services/:serviceId", (req, res, next) => {

    const { serviceId: services } = req.params

    User
        .find({ services })
        // .select('hay que hacer un deep , researching')
        .populate('services')
        .then((users) => res.json(users))
        .catch(err => next(err))
})

router.put("/users/:userId", (req, res, next) => {

    const { userId } = req.params
    const { phone, avatar, styles, gallery, aboutMe, services } = req.body

    User
        .findByIdAndUpdate(userId, { phone, avatar, styles, gallery, aboutMe, services })
        .then((service) => res.json(service))
        .catch(err => next(err))
})

router.delete("/users/:userId", (req, res, next) => {

    const { userId } = req.params

    User
        .findByIdAndDelete(userId)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})

module.exports = router
