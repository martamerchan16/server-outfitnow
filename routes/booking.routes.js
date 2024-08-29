const router = require('express').Router()

const Booking = require('./../models/Booking.model')
require('./../models/Service.model')
require('./../models/User.model')

const isAuthenticated = require('./../middleware/verifyToken')
const Service = require('./../models/Service.model')

router.post('/bookings', isAuthenticated, (req, res, next) => {

    const { measurements, deadline, comment, stylist, client, service, pack, latitude, longitude } = req.body
    const { _id } = req.payload

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Booking
        .create({ measurements, deadline, comment, stylist, client: _id, service, pack, location })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})

router.get('/bookings', isAuthenticated, (req, res, next) => {

    Booking
        .find()
        .populate('stylist client service')
        //TODO:.select({ service: 1, pack: 1, deadline: 1, client: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get('/bookings/:bookingId', isAuthenticated, (req, res, next) => {

    const { bookingId } = req.params

    Booking
        .findById(bookingId)
        .populate('stylist client service')
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.put('/bookings/:bookingId', isAuthenticated, (req, res, next) => {

    const { bookingId } = req.params
    const { measurements, deadline, comment, stylist, client, service, pack } = req.body

    Booking
        .findByIdAndUpdate(bookingId, { measurements, deadline, comment, stylist, client, service, pack }, { new: true })
        .then(updatedBooking => res.json(updatedBooking))
        .catch(err => next(err))

})

router.delete('/bookings/:bookingId', isAuthenticated, (req, res, next) => {

    const { bookingId } = req.params

    Booking
        .findByIdAndDelete(bookingId)
        .then(deletedBooking => res.json(deletedBooking))
        .catch(err => next(err))
})

router.get('/bookings/users/:userId', isAuthenticated, (req, res, next) => {

    const { userId: client } = req.params

    Booking
        .find({ client })
        .populate('stylist client service')
        .then(response => res.json(response))
        .catch(err => next(err))


})

router.get('/bookings/stylist/:userId', (req, res, next) => {

    const { userId: stylist } = req.params

    Booking
        .find({ stylist })
        .populate('stylist client service')
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/bookings/services/bookingsData', isAuthenticated, (req, res, next) => {

    let formattedData = []

    Service
        .find()
        .then(allServices => {

            formattedData = allServices.map(elm => {
                return { mongoId: elm._id, id: elm.title, label: elm.title }
            })

            const promises = formattedData.map(elm => Booking.countDocuments({ service: elm.mongoId }))

            Promise
                .all(promises)
                .then(bookingsByService => {

                    formattedData = formattedData.map((eachData, idx) => {
                        return { ...eachData, value: bookingsByService[idx] }
                    })

                    res.json(formattedData)
                })
                .catch(err => next(err))


        })
        .catch(err => next(err))



})

module.exports = router