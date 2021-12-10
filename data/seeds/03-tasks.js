const tasks = [
  {
    task_description: 'task 1',
    task_notes: 'task 1 notes',
    task_completed: 0,
    project_id: 1,
  },
  {
    task_description: 'task 2',
    task_notes: 'task 2 notes',
    task_completed: 0,
    project_id: 1,
  },
  {
    task_description: 'task 1',
    task_notes: 'task 1 notes',
    task_completed: 1,
    project_id: 2,
  },
  {
    task_description: 'task 2',
    task_notes: 'task 2 notes',
    task_completed: 0,
    project_id: 2,
  },
];

exports.seed = function (knex) {
  return knex('tasks').insert(tasks);
};
