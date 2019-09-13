const db = require("../data/db-config");

/**
 adding resources.
 retrieving a list of resources.
 adding projects.
 retrieving a list of projects.
 adding tasks.
 retrieving a list of tasks.
 */

function get() {
  return db("projects");
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

function getResources() {
  return db("resources");
}

module.exports = {
  get,
  getById,
  addProject,
  getResources
};
