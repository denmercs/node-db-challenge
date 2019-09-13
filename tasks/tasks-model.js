const db = require("../data/db-config");

function get() {
  return db("tasks as t").join("project as p", "t.id", "=", "p.id");
}

function addTasks(tasks) {
  return db("tasks")
    .insert(tasks)
    .then(tasks => {
      return tasks;
    });
}

function getTasks() {
  return db("tasks");
}

module.exports = {
  get,
  addTasks,
  getTasks
};
