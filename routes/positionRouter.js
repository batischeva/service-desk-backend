const Router = require('express');
const router = new Router();
const PositionController = require('../controllers/positionController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js');

router.post('/', checkRole('ADMIN'), PositionController.create);
router.get('/', PositionController.getAll);

module.exports = router;