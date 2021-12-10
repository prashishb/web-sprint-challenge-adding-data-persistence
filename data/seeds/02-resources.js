const resources = [
  {
    resource_name: 'Project 1 - Resource 1',
    resource_description: 'This is the first resource for project 1',
  },
  {
    resource_name: 'Project 1 - Resource 2',
    resource_description: 'This is the second resource for project 1',
  },
  {
    resource_name: 'Project 2 - Resource 1',
    resource_description: 'This is the first resource for project 2',
  },
  {
    resource_name: 'Project 2 - Resource 2',
    resource_description: 'This is the second resource for project 2',
  },
];

exports.seed = function (knex) {
  return knex('resources').insert(resources);
};
