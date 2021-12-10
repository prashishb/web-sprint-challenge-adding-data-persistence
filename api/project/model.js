const db = require('../../data/dbConfig');

async function getProjects() {
  const projects = await db('projects');
  return projects.map((project) => ({
    ...project,
    project_completed: Boolean(project.project_completed),
  }));
}

async function getProjectById(project_id) {
  const project = await db('projects').where({ project_id }).first();
  if (project) {
    return {
      ...project,
      project_completed: Boolean(project.project_completed),
    };
  } else {
    return null;
  }
}

async function createProject(newProject) {
  const [id] = await db('projects').insert(newProject);
  const result = await getProjectById(id);
  if (result) {
    return {
      ...result,
      project_completed: Boolean(result.project_completed),
    };
  } else {
    return null;
  }
}

module.exports = {
  getProjects,
  getProjectById,
  createProject,
};
