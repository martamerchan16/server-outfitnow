const router = require("express").Router()

const User = require('./../models/User.model')
const Service = require('./../models/Service.model')

const isAuthenticated = require('./../middleware/verifyToken')

router.get('/users', (req, res, next) => {

    User
        .find()
        .populate('services styles')
        .then(users => res.json(users))
        .catch(err => next(err))
})

router.get('/users/:userId', isAuthenticated, (req, res, next) => {

    const { userId } = req.params

    User
        .findById(userId)
        .populate('services styles')
        .then(user => res.json(user))
        .catch(err => next(err))
})

router.put("/users/:userId", isAuthenticated, (req, res, next) => {

    const { userId } = req.params
    const { phone, avatar, styles, gallery, aboutMe, services } = req.body

    User
        .findByIdAndUpdate(userId, { phone, avatar, styles, gallery, aboutMe, services }, { new: true })
        .then((user) => res.json(user))
        .catch(err => next(err))
})

router.delete("/users/:userId", isAuthenticated, (req, res, next) => {

    const { userId } = req.params

    User
        .findByIdAndDelete(userId)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})

router.get("/users/services/:serviceId", (req, res, next) => {

    const { serviceId: services } = req.params

    User
        .find({ services })
        // TODO:.select('hay que hacer un deep , researching')
        .populate('services styles')
        .then((users) => res.json(users))
        .catch(err => next(err))
})

router.get('/users/role/:role', (req, res, next) => {

    const { role } = req.params
    const { maxResults } = req.query

    User
        .find({ role: { $regex: role, $options: 'i' } })
        .limit(maxResults)
        .select({ userName: 1, avatar: 1, styles: 1, services: 1, gallery: 1 })
        .populate('services styles')
        .then(specificRole => res.json(specificRole))
        .catch(err => next(err))
})

router.get('/users/role/stylist/:userId', (req, res, next) => {

    const { userId } = req.params

    User
        .findById(userId)
        .select({ userName: 1, avatar: 1, styles: 1, services: 1, gallery: 1, aboutMe: 1, role: 1, location: 1 })
        .populate('services styles')
        .then(user => res.json(user))
        .catch(err => next(err))
})

module.exports = router
