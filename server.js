const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');
require('dotenv').config({ path: './.env' });
const technologies = require('./routes/technologies.routes');

let uriDB = process.env.DB_URI;
let secretKey = process.env.EXPRESS_SESSION_SECRET;

const app = express();
const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});

mongoose.connect(uriDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('autoIndex', true);

const sessionStore = MongoStore.create({
  mongoUrl: uriDB,
  collection: 'sessions',
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});

db.on('error', (err) => {
  console.log('Error: ', err);
});

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(
  session({
    secret: secretKey,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/api', technologies);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
});

app.use((err, req, res) => {
  console.log(err);
  res.status(500).json({ message: err });
});

module.exports = server;
