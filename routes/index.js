module.exports = app => {

    const servicesRoutes = require("./services.routes")
    app.use("/api", servicesRoutes)

    const bookingRoutes = require('./booking.routes')
    app.use('/api', bookingRoutes)
}