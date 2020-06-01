const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

process.on('unhandledRejection', function(err) {
    console.log(err);
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection successful');
});

const usersRouter = require('./routes/users');
const bankAuthRouter = require('./routes/bank-authentication');
const loanAppRouter = require('./routes/loan-application');

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log('Server is running on: ' + port);
});