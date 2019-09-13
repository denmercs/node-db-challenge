const db = require("../data/db-config");

function getByResourceId(id) {
  return db("resources")
    .where({ id })
    .then(resources => {
      return resources;
    });
}

function addResouce(project) {
  return db("resources")
    .insert(project)
    .then(project => {
      return project;
    });
}

function getResources() {
  return db("resources");
}

module.exports = {
  getResources,
  getByResourceId,
  addResouce
};
