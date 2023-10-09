const Router = require('express');
const router = new Router();
const CategoryController = require('../controllers/categoryController.js');

router.post('/', CategoryController.create);
router.get('/', CategoryController.getAll);

module.exports = router;