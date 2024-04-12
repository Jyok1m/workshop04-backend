var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
	const today = new Date().toString();
	res.json({ result: true, today });
});

module.exports = router;
