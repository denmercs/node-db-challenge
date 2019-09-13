exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .notNullable()
        .unique();
      tbl.string("description");
      tbl.boolean("completed").defaultTo(false);
    })

    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .notNullable()
        .unique();
      tbl.string("description");
    })
    .createTable("project_resources", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("description").notNullable();
      tbl.string("notes");
      // Foreign key
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
