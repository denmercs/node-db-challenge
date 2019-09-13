const router = require("express").Router();
const Tasks = require("./tasks-model");

// tasks
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Tasks.getTasks(id)
    .then(tasks => res.status(200).json(tasks))
    .catch(err =>
      res.status(500).json({ message: "error connecting on server" })
    );
});

router.post("/", (req, res) => {
  const tasks = req.body;

  Tasks.addTasks(tasks)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "error connecting on server" });
    });
});

module.exports = router;
