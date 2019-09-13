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
          description: "lorem ipsum"
        },
        {
          name: "react with redux",
          completed: false,
          description: "lorem ipsum"
        },
        {
          name: "Javascript",
          completed: true,
          description: "lorem ipsum"
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
          project_id: 2
        },
        {
          description: "test 3",
          notes: "Lorem ipsum description",
          project_id: 1
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
    });
};
