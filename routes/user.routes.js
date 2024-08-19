const router = require("express").Router()

const User = require('./../models/User.model')

router.get('/users', (req, res, next) => {

    User
        .find()
        .then(users => res.json(users))
        .catch(err => next(err))
})


router.get('/users/:userId', (req, res, next) => {

    const { userId } = req.params


    User
        .findById(userId)
        .then(user => res.json(user))
        .catch(err => next(err))
})


router.get('/users/role/:role', (req, res, next) => {

    const { role } = req.params


    User
        .find({ role: { $regex: role, $options: 'i' } })
        .then(specificRole => res.json(specificRole))
        .catch(err => next(err))
})


module.exports = router