// Require
const express = require("express");
const mongoose = require("mongoose");

//Init
const app = express();

//Keys
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`MongoDB connected.`))
  .catch(err => console.log(err));

// Path
app.get("/", (req, res) => {
  res.send("Hello World");
});

//Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
