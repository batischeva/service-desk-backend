const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter.js');
const requestRouter = require('./requestRouter.js');
const agentRouter = require('./agentRouter.js');
const clientRouter = require('./clientRouter.js');
const statusRouter = require('./statusRouter.js');
const categoryRouter = require('./categoryRouter.js');
const priorityRouter = require('./priorityRouter.js');

router.use('/user', userRouter);
router.use('/request', requestRouter);
router.use('/agent', agentRouter);
router.use('/client', clientRouter);
router.use('/status', statusRouter);
router.use('/category', categoryRouter);
router.use('/priority', priorityRouter);

module.exports = router;