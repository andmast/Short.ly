//Require
const router = require("express").Router();
const shortid = require("shortid");

//Picking charcter set for shortid generation
shortid.characters(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"
);

// Load URL Model
const URL = require("../../models/Urls");

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// @route GET /api/shorten/test
// @desc Test API end point
// @access public
router.get("/test", (req, res) => res.json({ msg: "API is working" }));

// @route POST /api/shorten
// @desc Post a URL to shorten
// @access public
router.post("/", (req, res) => {
  let urlData;
  if (req.body.url) {
    urlData = req.body.url;
  }
  console.log("URL is : ", urlData);

  const shortlyLink = new URL({
    url: urlData,
    hash: shortid.generate()
  });

  shortlyLink
    .save()
    .then(() => res.json(shortlyLink))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
