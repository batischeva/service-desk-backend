const Router = require('express');
const router = new Router();
const CategoryController = require('../controllers/categoryController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js');

router.post('/', checkRole('ADMIN'), CategoryController.create);
router.get('/', CategoryController.getAll);

module.exports = router;