const router = require('express').Router();

const Task = require('./model');

const { checkTasksId, checkTasksPayload } = require('./middleware');

// [GET] /api/task
router.get('/', (req, res, next) => {
  Task.getTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch(next);
});

// [GET] /api/task/:id
router.get('/:id', checkTasksId, (req, res) => {
  res.json(req.task);
});

// [POST] /api/task
router.post('/', checkTasksPayload, async (req, res, next) => {
  Task.createTask(req.body)
    .then((task) => {
      res.json(task);
    })
    .catch(next);
});

module.exports = router;
