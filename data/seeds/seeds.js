exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_resources")
    .truncate()
    .then(() => knex("resources").truncate())
    .then(() => knex("tasks").truncate())
    .then(() => knex("projects").truncate())
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "react development",
          completed: true,
          description: "lorem ipsum 1"
        },
        {
          name: "react with redux",
          completed: false,
          description: "lorem ipsum 2"
        },
        {
          name: "Javascript",
          completed: true,
          description: "lorem ipsum 3"
        }
      ]);
    })
    .then(function() {
      return knex("tasks").insert([
        {
          description: "test 1",
          notes: "Lorem ipsum description",
          project_id: 1
        },
        {
          description: "test 2",
          notes: "Lorem ipsum description",
          project_id: 1
        },
        {
          description: "test 3",
          notes: "Lorem ipsum description",
          project_id: 2
        }
      ]);
    })
    .then(function() {
      return knex("resources").insert([
        {
          name: "Resource 1",
          description: "Lorem ipsum description"
        },
        {
          name: "Resource 2",
          description: "Lorem ipsum description"
        },
        {
          name: "Resource 3",
          description: "Lorem ipsum description"
        }
      ]);
    })
    .then(function() {
      return knex("project_resources").insert([
        { project_id: 1, resource_id: 1 },
        { project_id: 1, resource_id: 2 },
        { project_id: 2, resource_id: 1 },
        { project_id: 2, resource_id: 2 }
      ]);
    });
};
