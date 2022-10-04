const express = require("express");
const router = express.Router();
const {
	signupValidator,
	signinValidator,
	validatorResult,
} = require("../middleware/validator");

//const { signupController, signinController } = require('../controllers/auth');

router.post("/signup", signupValidator, validatorResult);
// router.post('/signin', signinValidator, validatorResult, signinController);

module.exports = router;
