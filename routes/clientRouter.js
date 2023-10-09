const Router = require('express');
const router = new Router();
const ClientController = require('../controllers/clientController.js');

router.post('/', ClientController.create);
router.get('/', ClientController.getAll);

module.exports = router;