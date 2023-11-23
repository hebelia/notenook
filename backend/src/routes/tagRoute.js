const express = require("express");
const { createTagHandler } = require("../handlers/Tag/createTagHandler");
const { getAllTagsHandler } = require("../handlers/Tag/getAllTagsHandler");
const { getTagByIdHandler } = require("../handlers/Tag/getTagByIdHandler");
const { updateTagHandler } = require("../handlers/Tag/updateTagHandler");
const { deleteTagHandler } = require("../handlers/Tag/deleteTagHandler");

const tagRouter = express.Router();

tagRouter.post("/", createTagHandler);
tagRouter.get("/", getAllTagsHandler);
tagRouter.get("/:id", getTagByIdHandler);
tagRouter.put("/:id", updateTagHandler);
tagRouter.delete("/:id", deleteTagHandler);

module.exports = { tagRouter };
