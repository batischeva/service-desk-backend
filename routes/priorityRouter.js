const Router = require('express');
const router = new Router();
const PriorityController = require('../controllers/priorityController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js');

router.post('/', PriorityController.create);
router.get('/', PriorityController.getAll);

module.exports = router;