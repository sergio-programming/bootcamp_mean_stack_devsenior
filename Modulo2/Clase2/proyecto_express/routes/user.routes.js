const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { auth, admin } = require('../middlewares/auth.middleware');
const { validateId } = require('../middlewares/error.middleware');
const { validateUserUpdate } = require('../middlewares/validate.middleware');

router.get('/', auth, admin, userController.getAll);
router.get('/:id', auth, admin, validateId, userController.getById);
router.post('/', auth, admin, userController.create);
router.put('/:id', auth, admin, validateId, validateUserUpdate, userController.update);
router.delete('/:id', auth, admin, validateId, userController.delete);

module.exports = router;