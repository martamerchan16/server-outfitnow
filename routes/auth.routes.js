const router = require("express").Router()

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRounds = 10

const User = require('./../models/User.model')
const isAuthenticated = require("../middleware/verifyToken")

router.post('/auth/signup', (req, res, next) => {

    const { email, password, userName, phone, avatar, styles, gallery, aboutMe, services } = req.body

    if (email === '' || password === '' || userName === '') {
        res.status(400).json({ message: "Provide email, password and name" })
        return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!emailRegex.test(email)) {
        res.status(400).json({ message: 'Provide a valid email address.' })
        return
    }

    if (password.length < 5) {
        res.status(400).json({ message: 'Password must have at least 6 characters' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            User
                .create({ userName, email, password: hashedPassword, phone, avatar, styles, gallery, aboutMe, services })
                .then(() => res.sendStatus(201))
                .catch(err => next(err))

        })
        .catch(err => next(err))
})

router.post('/auth/login', (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." });
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "User not found." })
                return
            }

            const passwordCorrect = bcrypt.compareSync(password, foundUser.password)

            if (!passwordCorrect) {
                res.status(401).json({ message: "Incorrect password" })
                return
            }

            const { _id, email, username, role } = foundUser
            const payload = { _id, email, username, role }

            const authToken = jwt.sign(
                payload,
                process.env.TOKEN_SECRET,
                { algorithm: 'HS256', expiresIn: "6h" }
            )

            res.json({ authToken })

        })
        .catch(err => next(err))
})

router.get('/auth/verify', isAuthenticated, (req, res, next) => {
    res.json(req.payload)
})


module.exports = router