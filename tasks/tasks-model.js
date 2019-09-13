const db = require("../data/db-config");

function getTasks(project_id) {
  //   return db("projects as p")
  //     .join("tasks as t", "p.id", "t.project_id")
  //     .select(
  //       "p.name as projectName",
  //       "p.description as projectDescription",
  //       "t.id as taskId",
  //       "t.project_id as projectId",
  //       "t.description as taskDescription",
  //       "t.notes as taskNotes",
  //       "t.completed"
  //     )
  //     .where({ "t.project_id": project_id })
  //     .then(tasks => {
  //         const tasksWithBooleanCompleted = tasks.map(task => {
  //           task.completed = Boolean(task.completed);
  //           return task;
  //         });
  //         return tasksWithBooleanCompleted;
  //       console.log("CHECK", tasks);
  //     });

  return db("projects as p")
    .join("tasks as t")
    .select(
      "p.name as projectName",
      "p.description",
      "t.project_id",
      "t.notes",
      "p.completed as completed"
    )
    .where({ "t.project_id": project_id })
    .then(tasks => {
      return toBoolean(tasks);
    });
}

function addTasks(tasks) {
  return db("tasks")
    .insert(tasks)
    .then(tasks => {
      return tasks;
    });
}

function toBoolean(checkBool) {
  const checkTasks = checkBool.map(bool => {
    bool.completed = Boolean(bool.completed);
    return bool;
  });
  return checkTasks;
}

module.exports = {
  addTasks,
  getTasks
};
