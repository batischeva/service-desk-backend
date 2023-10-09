const Router = require('express');
const router = new Router();
const AgentController = require('../controllers/agentController.js');

router.post('/', AgentController.create);
router.get('/', AgentController.getAll);

module.exports = router;