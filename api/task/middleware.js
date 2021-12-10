const Task = require('./model');
const Project = require('../project/model');

exports.checkTasksId = async (req, res, next) => {
  try {
    const task = await Task.getTaskById(req.params.id);
    if (!task) {
      next({
        status: 404,
        message: `Task with id ${req.params.id} does not exist`,
      });
    }
    req.task = task;
    next();
  } catch (err) {
    next(err);
  }
};

exports.checkTasksPayload = async (req, res, next) => {
  if (!req.body.task_description || !req.body.project_id) {
    next({
      status: 400,
      message: 'Task description and project id are required',
    });
  } else {
    const project = await Project.getProjectById(req.body.project_id);
    if (!project) {
      next({
        status: 404,
        message: `Project with id ${req.body.project_id} does not exist`,
      });
    } else {
      next();
    }
  }
};
