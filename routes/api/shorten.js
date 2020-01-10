//Require
const router = require("express").Router();
const uniqid = require("uniqid");

router.get("/test", (req, res) => res.json({ msg: "API is working" }));

module.exports = router;
