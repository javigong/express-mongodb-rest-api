const router = require("express").Router();
const {
  getPlants,
  getPlant,
  postPlant,
} = require("../controllers/plantController.js");

router.get("/", getPlants);
router.get("/:id", getPlant);
router.post("/", postPlant);

module.exports = router;
