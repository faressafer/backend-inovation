const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
const app = express();


app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());

//final API Dashbord
const DashboardRouter = require('./routes/Dashboard');
app.use('/dashboard', DashboardRouter);

const PieRouter = require('./routes/pie');
app.use('/pie', PieRouter);

const ContactRouter = require('./routes/contacts');
app.use('/contact', ContactRouter);
const Contact = require('./models/contact');


//API Mobile APP

const ScopeRouter = require('./routes/scopes');
app.use('/Scope', ScopeRouter);
const Scope = require('./models/scope');

const CompanyRouter = require('./routes/companies');
app.use('/company', CompanyRouter);
const Company = require('./models/company');

const IndusGroupRouter = require('./routes/indusgroups');
app.use('/indusgroup', IndusGroupRouter);
const IndusGroup = require('./models/indusgroup');

const DimensionRouter = require('./routes/dimensions');
app.use('/dimension', DimensionRouter);
const Dimension = require('./models/dimension');





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
