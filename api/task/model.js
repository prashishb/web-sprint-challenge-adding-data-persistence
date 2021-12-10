const db = require('../../data/dbConfig');

async function getTasks() {
  const rows = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    )
    .orderBy('t.task_id', 'asc');

  return rows.map((row) => ({
    ...row,
    task_completed: Boolean(row.task_completed),
  }));
}

function getTaskById(task_id) {
  return db('tasks as t').where({ task_id }).first();
}

async function createTask(newTask) {
  const [id] = await db('tasks').insert(newTask);
  const result = await getTaskById(id);
  return {
    ...result,
    task_completed: Boolean(result.task_completed),
  };
}

module.exports = {
  getTasks,
  getTaskById,
  createTask,
};
