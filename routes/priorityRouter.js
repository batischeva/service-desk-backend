const Router = require('express');
const router = new Router();
const PriorityController = require('../controllers/priorityController.js');

router.post('/', PriorityController.create);
router.get('/', PriorityController.getAll);

module.exports = router;