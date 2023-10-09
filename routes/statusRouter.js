const Router = require('express');
const router = new Router();
const StatusController = require('../controllers/statusController.js');

router.post('/', StatusController.create);
router.get('/', StatusController.getAll);

module.exports = router;