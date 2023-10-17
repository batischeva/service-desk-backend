const {Request, Agent, Client, Category, Priority, Status} = require('../models/models.js');
const ApiError = require('../error/apiError.js');

class RequestController {
  async create(req, res, next) {
    try {
      const {description, agentId, clientId, statusId, categoryId, priorityId} = req.body;
      const request = await Request.create({description, agentId: 1, clientId, statusId: 1, categoryId, priorityId: 2});
      return res.json(request);
    } catch(err) {
      next(ApiError.badRequest(err.message));
    }
  }

  async getAll(req, res) {
    let {agentId, clientId, statusId, categoryId, priorityId, limit, page} = req.query;

    page = page || 1;
    limit = limit || 5;
    let offset = page * limit - limit;
    
    let requests;
    if (!agentId && !clientId && !statusId && !categoryId && !priorityId) {
      requests = await Request.findAndCountAll({
        include: [
          {
            model: Agent,
            attributes: {exclude: ['updatedAt', 'createdAt', 'userId']}
          },
          {
            model: Client,
            attributes: {exclude: ['updatedAt', 'createdAt', 'userId']}
          },
          {
            model: Category,
            attributes: {exclude: ['updatedAt', 'createdAt']}
          },
          {
            model: Priority,
            attributes: {exclude: ['updatedAt', 'createdAt']}
          },
          {
            model: Status,
            attributes: {exclude: ['updatedAt', 'createdAt']}
          }
        ],
        limit,
        offset
      });
    }
    if (agentId && !clientId && !statusId && !categoryId && !priorityId) {
      requests = await Request.findAndCountAll({where: {agentId}, limit, offset});
    }
    if (!agentId && clientId && !statusId && !categoryId && !priorityId) {
      requests = await Request.findAndCountAll({where: {clientId}, limit, offset});
    }
    if (!agentId && !clientId && statusId && !categoryId && !priorityId) {
      requests = await Request.findAndCountAll({where: {statusId}, limit, offset});
    }
    if (!agentId && !clientId && !statusId && categoryId && !priorityId) {
      requests = await Request.findAndCountAll({where: {categoryId}, limit, offset});
    }
    if (!agentId && !clientId && !statusId && !categoryId && priorityId) {
      requests = await Request.findAndCountAll({where: {priorityId}, limit, offset});
    }
    return res.json(requests);
  }
  
  async getOne(req, res) {
    const {id} = req.params;
    const request = await Request.findOne({
      where: {id},
      include: [
        {
          model: Agent,
          attributes: {exclude: ['updatedAt', 'createdAt', 'userId']}
        },
        {
          model: Client,
          attributes: {exclude: ['updatedAt', 'createdAt', 'userId']}
        },
        {
          model: Category,
          attributes: {exclude: ['updatedAt', 'createdAt']}
        },
        {
          model: Priority,
          attributes: {exclude: ['updatedAt', 'createdAt']}
        },
        {
          model: Status,
          attributes: {exclude: ['updatedAt', 'createdAt']}
        }
      ]
    });
    return res.json(request);
  }
}

module.exports = new RequestController();