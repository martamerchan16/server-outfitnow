module.exports = app => {

    const servicesRoutes = require("./services.routes")
    app.use("/api", servicesRoutes)
}