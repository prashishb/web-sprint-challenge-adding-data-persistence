const router = require('express').Router();
const Projects = require('./model');

const { checkProjectId, checkProjectPayload } = require('./middleware');

// [GET] /api/projects
router.get('/', (req, res, next) => {
  Projects.getProjects()
    .then((projects) => {
      res.json(projects);
    })
    .catch(next);
});

// [GET] /api/projects/:id
router.get('/:id', checkProjectId, (req, res) => {
  res.json(req.project);
});

// [POST] /api/projects
router.post('/', checkProjectPayload, async (req, res, next) => {
  try {
    const project = await Projects.createProject(req.body);
    res.json(project);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
