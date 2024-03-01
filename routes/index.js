const deviceRouter = require("./device");

function route(app) {
    app.use("/api/device", deviceRouter);
}

module.exports = route;
