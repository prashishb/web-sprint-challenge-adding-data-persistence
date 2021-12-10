const projects = [
  {
    project_name: 'Project 1',
    project_description: 'this is project 1',
    project_completed: 0,
  },
  {
    project_name: 'Project 2',
    project_description: 'this is project 2',
    project_completed: 1,
  },
];

exports.seed = function (knex) {
  return knex('projects').insert(projects);
};
