const db = require("../data/db-config");

function get() {
  return db("projects").then(projects => {
    const checkCompleted = projects.map(project => {
      project.completed = Boolean(project.completed);
      return projects;
    });

    return checkCompleted;
  });
}

function getById(id) {
  return db("projects")
    .where({ id })
    .then(projects => {
      return projects;
    });
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(project => {
      return project;
    });
}

module.exports = {
  get,
  getById,
  addProject
};
