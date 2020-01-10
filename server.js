// Require
const express = require("express");
const mongoose = require("mongoose");

//Init
const app = express();

// Body parser MiddleWare
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

//Keys
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`MongoDB connected.`))
  .catch(err => console.log(err));

// Routes
const shorten = require("./routes/api/shorten");
app.use("/api/shorten", shorten);

const redirect = require("./routes/api/redirect");
app.use("/api/redirect", redirect);

app.get("/:hash", (req, res) => {
  const hash = req.params.hash;
  URL.findOne({ hash })
    .then(doc => {
      return res.redirect(doc.url);
    })
    .catch(err => {
      return res
        .status(400)
        .json({ error: "Sorry this link may have expired" });
    });
});

// Path
app.get("/", (req, res) => {
  res.send("Hello World");
});

//Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
