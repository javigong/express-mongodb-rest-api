const router = require("express").Router();

const animalRouter = require("./animals.js");
const plantRouter = require("./plants.js");

router.use("/animals", animalRouter);
router.use("/plants", plantRouter);

module.exports = router;
