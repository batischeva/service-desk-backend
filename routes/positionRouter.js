const Router = require('express');
const router = new Router();
const PositionController = require('../controllers/positionController.js');

router.post('/', PositionController.create);
router.get('/', PositionController.getAll);

module.exports = router;