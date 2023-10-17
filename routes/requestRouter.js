const Router = require('express');
const router = new Router();
const RequestController = require('../controllers/requestController.js');

router.post('/', RequestController.create);
router.get('/', RequestController.getAll);
router.get('/:id', RequestController.getOne);
router.delete('/delete/:id', RequestController.delete);

module.exports = router;