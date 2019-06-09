const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const userAuth = require('./routes/api/userAuth');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


// DB Config

const db = require('./config/dbConfig').mongoURI;

// Connect to mongoDB 

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected Successfully'))
    .catch(err => console.log(err));

const app = express();

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Body parser middleware

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

//Use Routes
app.use('/api/userAuth', userAuth);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));