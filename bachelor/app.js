const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

// Connect to the database
mongoose.connect(config.database);

// On database connection
mongoose.connection.on('connected', () => {
    console.log('Connected to Database '+config.database);
})

// On databse connection error
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
})

const app = express();

const users = require('./routes/users');

const reports = require('./routes/reports');

const clients = require('./routes/clients');

const devices = require('./routes/devices');

const testProcedures = require('./routes/testProcedures');

const tools = require('./routes/tools');

const port = 3000;

// Cors middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());

// Passport  middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//
app.use('/users', users);

//
app.use('/clients', clients);

//
app.use('/devices', devices);

app.use('/reports', reports);

//
app.use('/testProcedures', testProcedures);

app.use('/tools', tools);

// Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});


app.get('*', (req, res) => {
    res.send('invalid endpoint')
});

// Start server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});

