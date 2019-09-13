const router = require("express").Router();
const Resources = require("./resources-model");

// resources
router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => res.status(200).json(resources))
    .catch(err =>
      res.status(500).json({ message: "error connecting on server" })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Resources.getByResourceId(id)
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

  Resources.addResouce(project)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "error connecting on server" });
    });
});

module.exports = router;
