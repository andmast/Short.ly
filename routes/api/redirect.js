//Require
const router = require("express").Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// @route GET /api/redirect/test
// @desc Test API end point
// @access public
router.get("/test", (req, res) => res.json({ msg: "API is working" }));

router.get("/links", (req, res) => {
  URL.find({}).then(doc => {
    return res.json(doc);
  });
});

// @route GET /api/redirect/test
// @headers hash
// @desc Redirect user
// @access public
router.get("/", (req, res) => {
  const short = req.headers.hash;

  URL.findOne({ hash: short })
    .then(doc => {
      return res.json({ url: doc.url });
    })
    .catch(err => {
      return res
        .status(400)
        .json({ error: "Sorry this link may have expired" });
    });
});

module.exports = router;
