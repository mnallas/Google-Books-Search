const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./Routes/api-routes"));

if (process.env.NODE) {
  app.use(express.static(client / build));
}

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));

// setup mongoose

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// setup routes
