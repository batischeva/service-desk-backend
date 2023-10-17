const Router = require('express');
const router = new Router();
const ClientController = require('../controllers/clientController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js');

router.post('/', ClientController.create);
router.get('/', ClientController.getAll);

module.exports = router;