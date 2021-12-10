const Project = require('./model');

exports.checkProjectId = async (req, res, next) => {
  try {
    const project = await Project.getProjectById(req.params.id);
    if (!project) {
      next({
        status: 404,
        message: `Project with id ${req.params.id} not found`,
      });
    } else {
      req.project = project;
      next();
    }
  } catch (err) {
    next(err);
  }
};

exports.checkProjectPayload = (req, res, next) => {
  const { project_name } = req.body;
  if (!project_name) {
    next({
      status: 400,
      message: 'Project Name is required',
    });
  } else {
    next();
  }
};
