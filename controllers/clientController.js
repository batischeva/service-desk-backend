const {Client} = require('../models/models.js');
const ApiError = require('../error/apiError.js');

class ClientController {
  async create(req, res, next) {
    try {
      const {last_name, first_name, middle_name, userId, positionId} = req.body;
      const client = await Client.create({last_name, first_name, middle_name, userId, positionId});
      return res.json(client);
    } catch(err) {
      next(ApiError.badRequest(err.message));
    }
  }
  async getAll(req, res) {
    const clients = await Client.findAll();
    return res.json(clients);
  }
}

module.exports = new ClientController();