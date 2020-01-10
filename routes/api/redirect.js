//Require
const router = require("express").Router();

// @route GET /api/redirect/test
// @desc Test API end point
// @access public
router.get("/test", (req, res) => res.json({ msg: "API is working" }));

module.exports = router;
