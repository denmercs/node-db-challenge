const db = require("../data/db-config");

function get() {
  return db("projects").then(projects => {
    return toBoolean(projects);
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

function getTasks(project_id) {
  return db("projects as p")
    .join("tasks as t")
    .select(
      // "p.name as projectName",
      // "p.description",
      // "t.project_id",
      // "t.notes",
      // "p.completed as completed"
      "p.name as projectName",
      "p.description as projectDescription",
      "t.id as taskId",
      "t.project_id as projectId",
      "t.description as taskDescription",
      "t.notes as taskNotes",
      "p.completed"
    )
    .where({ "t.project_id": project_id })
    .then(tasks => {
      return toBoolean(tasks);
    });
}

function addTasks(project_id, taskBody) {
  return db("tasks")
    .insert({ project_id: project_id, ...taskBody })
    .then(newTasks => {
      return newTasks;
    });
}

function toBoolean(checkBool) {
  const checkProject = checkBool.map(bool => {
    bool.completed = Boolean(bool.completed);
    return bool;
  });
  return checkProject;
}

module.exports = {
  get,
  getById,
  addProject,
  getTasks,
  addTasks
};
