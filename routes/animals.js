const router = require("express").Router();
const {
  getAnimals,
  getAnimal,
  postAnimal,
} = require("../controllers/animalController.js");

router.get("/", getAnimals);
router.get("/:id", getAnimal);
router.post("/", postAnimal);

module.exports = router;
