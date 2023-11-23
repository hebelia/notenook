const { Note } = require("../../db");

const unarchiveNote = async (noteId) => {
  const note = await Note.findByPk(noteId);
  if (!note) throw new Error("Note not found");

  note.isArchived = false;
  await note.save();
  return note;
};

module.exports = { unarchiveNote };
