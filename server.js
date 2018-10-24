const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const articles = require('./routes/api/articles')

const app = express();

//Bodyparser Middleware
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const path = require('path');


//DB Config
const db = require('./config/keys').mongoURI;

//Use Routes
app.use('/api/articles', articles);

//Connect to Mongo
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.get('/', (req, res) => res.send ('Hello'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));