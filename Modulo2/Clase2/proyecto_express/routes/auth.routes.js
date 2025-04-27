const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { auth } = require('../middlewares/auth.middleware');
const { validateUser, validateLogin } = require('../middlewares/validate.middleware');

router.post('/register', validateUser, authController.register);
router.post('/login', validateLogin, authController.login);
router.get('/me', auth, authController.getMe);

module.exports = router;