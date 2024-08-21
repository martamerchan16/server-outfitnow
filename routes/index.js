module.exports = app => {

    const servicesRoutes = require("./services.routes")
    app.use("/api", servicesRoutes)

    const bookingRoutes = require('./booking.routes')
    app.use('/api', bookingRoutes)

    const authRoutes = require('./auth.routes')
    app.use('/api', authRoutes)

    const userRoutes = require('./user.routes')
    app.use('/api', userRoutes)

    const styleRoutes = require('./style.routes')
    app.use('/api', styleRoutes)
}