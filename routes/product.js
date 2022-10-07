const express = require("express");
const router = express.Router();
const productyController = require("../controllers/product");
const { authenticatateJWT } = require("../middleware/authenticator");
const upload = require("../middleware/multer");

router.post(
	"/",
	authenticatateJWT,
	upload.single("productImage"),
	productyController.create
);
router.get("/", authenticatateJWT, productyController.readAll);

module.exports = router;
