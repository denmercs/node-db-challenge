const router = require("express").Router();
const Projects = require("./projects-model");

// projects
router.get("/", (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err =>
      res.status(500).json({ message: "error connecting on server" })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Projects.getById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: "could not find the project given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "error connecting on server" });
    });
});

router.post("/", (req, res) => {
  const project = req.body;

  Projects.addProject(project)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "error connecting on server" });
    });
});

module.exports = router;
