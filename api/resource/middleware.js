const Resource = require('./model');

exports.checkResourceId = async (req, res, next) => {
  try {
    const resource = await Resource.getResourceById(req.params.id);
    if (!resource) {
      next({
        status: 404,
        message: `Resource with id ${req.params.id} not found`,
      });
    }
    req.resource = resource;
    next();
  } catch (err) {
    next(err);
  }
};

exports.checkResourcePayload = (req, res, next) => {
  const { resource_name } = req.body;
  if (!resource_name) {
    next({
      status: 400,
      message: 'Resource name is required',
    });
  } else {
    next();
  }
};
