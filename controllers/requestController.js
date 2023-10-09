const {Request} = require('../models/models.js');
const ApiError = require('../error/apiError.js');

class RequestController {
  async create(req, res, next) {
    try {
      const {description, agentId, clientId, statusId, categoryId, priorityId} = req.body;
      const request = await Request.create({description, agentId, clientId, statusId, categoryId, priorityId});
      return res.json(request);
    } catch(err) {
      next(ApiError.badRequest(err.message));
    }
  }
  async getAll(req, res) {
    const {agentId, clientId, statusId, categoryId, priorityId} = req.query;
    let requests;
    if (!agentId && !clientId && !statusId && !categoryId && !priorityId) {
      requests = await Request.findAll();
    }
    if (agentId && !clientId && !statusId && !categoryId && !priorityId) {
      requests = await Request.findAll({where: {agentId}});
    }
    if (!agentId && clientId && !statusId && !categoryId && !priorityId) {
      requests = await Request.findAll({where: {clientId}});
    }
    if (!agentId && !clientId && statusId && !categoryId && !priorityId) {
      requests = await Request.findAll({where: {statusId}});
    }
    if (!agentId && !clientId && !statusId && categoryId && !priorityId) {
      requests = await Request.findAll({where: {categoryId}});
    }
    if (!agentId && !clientId && !statusId && !categoryId && priorityId) {
      requests = await Request.findAll({where: {priorityId}});
    }
    return res.json(requests);
  }
  async getOne(req, res) {
    
  }
}

module.exports = new RequestController();