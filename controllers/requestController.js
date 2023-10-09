class RequestController {
  async create(req, res) {
    try {
      const {description, agentId, clientId, statusId, categoryId, positionId} = req.body;
      const client = await Client.create({description, agentId, clientId, statusId, categoryId, positionId});
      return res.json(client);
    } catch(err) {
      next(ApiError.badRequest(err.message));
    }
  }
  async getAll(req, res) {
    
  }
  async getOne(req, res) {
    
  }
}

module.exports = new RequestController();