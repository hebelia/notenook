const express = require("express");
const { createNoteHandler } = require("../handlers/Note/createNoteHandler");
const { getAllNotesHandler } = require("../handlers/Note/getAllNotesHandler");
const { getNoteByIdHandler } = require("../handlers/Note/getNoteByIdHandler");
const { updateNoteHandler } = require("../handlers/Note/updateNoteHandler");
const { deleteNoteHandler } = require("../handlers/Note/deleteNoteHandler");
const { archiveNoteHandler } = require("../handlers/Note/archiveNoteHandler");
const {
  unarchiveNoteHandler,
} = require("../handlers/Note/unarchiveNoteHandler");

//filters
const {
  filterNotesByTagsHandler,
} = require("../handlers/Note/filterNotesByTagsHandler");

const noteRouter = express.Router();

noteRouter.post("/", createNoteHandler);
noteRouter.get("/filter", filterNotesByTagsHandler);
noteRouter.get("/", getAllNotesHandler);
noteRouter.get("/:id", getNoteByIdHandler);
noteRouter.put("/:id", updateNoteHandler);
noteRouter.delete("/:id", deleteNoteHandler);
noteRouter.post("/:id/archive", archiveNoteHandler);
noteRouter.post("/:id/unarchive", unarchiveNoteHandler);

module.exports = { noteRouter };
