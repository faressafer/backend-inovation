const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
const app = express();


app.use(bodyParser.json());

mongoose.connect('mongodb+srv://fares:fares@farescluster.ys3ggbm.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'NOVATIONCITY',
})
    .then(() => {
        console.log('connection database is ready');
    })
    .catch((err) => {
        console.log(err);
    })



app.listen(4000, () => {
    console.log('serveur in running in http://localhost:4000');
});
