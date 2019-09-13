const express = require("express");

const server = express();

server.use(express.json());

const projectRouter = require("./projects/projects-router");
server.use("/projects", projectRouter);

const resourcesRouter = require("./resources/resources-router");
server.use("/resources", resourcesRouter);

const tasksRouter = require("./tasks/tasks-router");
server.use("/tasks", tasksRouter);

const port = process.env.PORT || 5000;
server.listen(port, console.log(`Server on ${port}`));
