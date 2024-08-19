const router = require('express').Router()

const Booking = require('./../models/Booking.model')


router.post('/bookings', (req, res, next) => {

        const { measurements, deadline, comment, stylist, client, service, pack } = req.body

        Booking
                .create({ measurements, deadline, comment, stylist, client, service, pack })
                .then(() => res.sendStatus(201))
                .catch(err => next(err))
})


router.get('/bookings', (req, res, next) => {

        Booking
                .find()
                .populate('stylist', 'client', 'service')
                //.select({ service: 1, pack: 1, deadline: 1, client: 1 })
                .then(response => res.json(response))
                .catch(err => next(err))
})


router.get('/bookings/:bookingId', (req, res, next) => {

        const { bookingId } = req.params

        Booking
                .findById(bookingId)
                .populate('stylist', 'client', 'service')
                .then(response => res.json(response))
                .catch(err => next(err))
})


router.put('/bookings/:bookingId', (req, res, next) => {

        const { bookingId } = req.params
        const { measurements, deadline, comment, stylist, client, service, pack } = req.body

        Booking
                .findByIdAndUpdate(bookingId, { measurements, deadline, comment, stylist, client, service, pack }, { new: true })
                .then(updatedBooking => res.json(updatedBooking))
                .catch(err => next(err))

})


router.delete('/bookings/:bookingId', (req, res, next) => {

        const { bookingId } = req.params

        Booking
                .findByIdAndDelete(bookingId)
                .then(deletedBooking => res.json(deletedBooking))
                .catch(err => next(err))
})


router.get('/bookings/users/:userId', (req, res, next) => {

        const { userId: client } = req.params

        Booking
                .find({ client })
                .populate('stylist', 'client', 'service')
                .then(response => res.json(response))
                .catch(err => next(err))


})


router.get('/bookings/services/:serviceId', (req, res, next) => {
        const { serviceId: services } = req.params

        Booking
                .find({ services })
                .then(response => res.json(response))
                .catch(err => next(err))
})


module.exports = router