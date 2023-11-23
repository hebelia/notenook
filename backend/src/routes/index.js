const { Router } = require("express");
const { noteRouter } = require("./noteRoute.js");
const { tagRouter } = require("./tagRoute.js");

const router = Router();

router.use("/note", noteRouter);
router.use("/tag", tagRouter);

module.exports = router;
