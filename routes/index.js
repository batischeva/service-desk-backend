const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter.js');
const requestRouter = require('./requestRouter.js');
const agentRouter = require('./agentRouter.js');
const clientRouter = require('./clientRouter.js');

router.use('/user', userRouter);
router.use('/request', requestRouter);
router.use('/agent', agentRouter);
router.use('/client', clientRouter);

module.exports = router;