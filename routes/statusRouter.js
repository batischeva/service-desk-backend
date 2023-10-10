const Router = require('express');
const router = new Router();
const StatusController = require('../controllers/statusController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js');

router.post('/', checkRole('ADMIN'), StatusController.create);
router.get('/', StatusController.getAll);

module.exports = router;