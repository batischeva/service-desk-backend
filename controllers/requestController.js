const {Request, Agent, Client, Category, Priority, Status} = require('../models/models.js');
const ApiError = require('../error/apiError.js');

class RequestController {
  async create(req, res, next) {
    try {
      const {description, agentId, clientId, statusId, categoryId, priorityId} = req.body;
      const request = await Request.create({description, agentId, clientId, statusId: 1, categoryId, priorityId});
      return res.json(request);
    } catch(err) {
      next(ApiError.badRequest(err.message));
    }
  }

  async getAll(req, res) {
    let {agentId, clientId, statusId, categoryId, priorityId} = req.query;
    
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
        exclude: ['updatedAt']
      });
    }
    if (agentId && !clientId && !statusId && !categoryId && !priorityId) {
      requests = await Request.findAndCountAll({where: {agentId}});
    }
    if (!agentId && clientId && !statusId && !categoryId && !priorityId) {
      requests = await Request.findAndCountAll({where: {clientId}});
    }
    if (!agentId && !clientId && statusId && !categoryId && !priorityId) {
      requests = await Request.findAndCountAll({where: {statusId}});
    }
    if (!agentId && !clientId && !statusId && categoryId && !priorityId) {
      requests = await Request.findAndCountAll({where: {categoryId}});
    }
    if (!agentId && !clientId && !statusId && !categoryId && priorityId) {
      requests = await Request.findAndCountAll({where: {priorityId}});
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

  async delete(req, res) {
    const {id} = req.params;
    const request = await Request.destroy({where: {id}});
    return res.json(request);
  }
}

module.exports = new RequestController();