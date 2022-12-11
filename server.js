const express = require("express");
const cors = require("cors");
const path = require("path");
// const https = require('https');
// const fs = require('fs');
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const session = require("express-session");
require("dotenv").config({ path: "./.env" });
const technologies = require("./src/routes/technologies.routes");
const users = require("./src/routes/users.routes");
const documents = require("./src/routes/documents.routes");
const projects = require("./src/routes/projects.routes");

// eslint-disable-next-line no-undef
let uriDB = process.env.DB_URI;
// eslint-disable-next-line no-undef
let secretKey = process.env.EXPRESS_SESSION_SECRET;

const app = express();

// const server = https.createServer(
//   {
//     // eslint-disable-next-line no-undef
//     key: fs.readFileSync(path.join(__dirname, 'cert', '/key.pem')),
//     // eslint-disable-next-line no-undef
//     cert: fs.readFileSync(path.join(__dirname, 'cert', '/cert.pem')),
//   },
//   app
// );

// // eslint-disable-next-line no-undef
// server.listen(process.env.PORT || 8000, () => {
//   console.log('Server is running...');
// });

// eslint-disable-next-line no-undef
const server = app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running...");
});

mongoose.connect(uriDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("autoIndex", true);

const sessionStore = MongoStore.create({
  mongoUrl: uriDB,
  collection: "sessions",
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to the database");
});

db.on("error", (err) => {
  console.log("Error: ", err);
});

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "/client/build")));
app.use(
  session({
    secret: secretKey,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/api", technologies);
app.use("/api", users);
app.use("/api", documents);
app.use("/api", projects);

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.get("*", (req, res) => {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found..." });
});

app.use((err, req, res) => {
  console.log(err);
  res.status(500).json({ message: err });
});

module.exports = server;
