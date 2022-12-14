const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");
const { authenticatateJWT } = require("../middleware/authenticator");
const upload = require("../middleware/multer");

router.post(
	"/",
	authenticatateJWT,
	upload.single("productImage"),
	productController.create
);
router.get("/", authenticatateJWT, productController.readAll);
router.get("/:productId", productController.read);
router.put(
	"/:productId",
	authenticatateJWT,
	upload.single("productImage"),
	productController.update
);
router.delete("/:productId", productController.delete);

module.exports = router;
