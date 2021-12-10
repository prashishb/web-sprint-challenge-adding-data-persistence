const router = require('express').Router();

const Resource = require('./model');

const { checkResourceId, checkResourcePayload } = require('./middleware');

// [GET] /api/resources
router.get('/', (req, res, next) => {
  Resource.getResources()
    .then((resources) => res.json(resources))
    .catch(next);
});

// [GET] /api/resources/:id
router.get('/:id', checkResourceId, (req, res, next) => {
  Resource.getResourceById(req.params.id)
    .then((resource) => res.json(resource))
    .catch(next);
});

// [POST] /api/resources
router.post('/', checkResourcePayload, async (req, res, next) => {
  try {
    const resource = await Resource.createResource(req.body);
    res.json(resource);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
