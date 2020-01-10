//Require
const router = require("express").Router();

// @route GET /api/redirect/test
// @desc Test API end point
// @access public
router.get("/test", (req, res) => res.json({ msg: "API is working" }));

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
