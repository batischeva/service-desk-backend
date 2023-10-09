const {Position} = require('../models/models.js');
const ApiError = require('../error/apiError.js');

class PositionController {
  async create(req, res) {
    const {name} = req.body;
    const position = await Position.create({name});
    return res.json(position);
  }
  async getAll(req, res) {
    const positions = await Position.findAll();
    return res.json(positions);
  }
}

module.exports = new PositionController();