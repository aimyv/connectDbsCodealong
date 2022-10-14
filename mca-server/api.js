const app = require("express")();

const cors = require("cors");
app.use(cors());

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const dogsController = require("./controllers/dogs")

app.use('/dogs', dogsController)

module.exports = app;
