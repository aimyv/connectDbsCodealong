const app = require("express")();
const cors = require("cors");

const dogsController = require("./controllers/dogs")

app.use(cors());

app.use('/dogs', dogsController)

module.exports = app;