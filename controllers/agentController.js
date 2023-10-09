const {Agent} = require('../models/models.js');
const ApiError = require('../error/apiError.js');

class AgentController {
  async create(req, res, next) {
    try {
      const {last_name, first_name, middle_name, userId, positionId} = req.body;
      const agent = await Agent.create({last_name, first_name, middle_name, userId, positionId});
      return res.json(agent);
    } catch(err) {
      next(ApiError.badRequest(err.message));
    }
  }
  async getAll(req, res) {
    const agents = await Agent.findAll();
    return res.json(agents);
  }
}

module.exports = new AgentController();