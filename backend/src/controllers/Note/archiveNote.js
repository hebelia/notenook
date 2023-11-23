const { Note} = require("../../db");

const archiveNote = async (noteId) => {
  const note = await Note.findByPk(noteId);
  if (!note) throw new Error("Note not found");

  note.isArchived = true;
  await note.save();
  return note;
};

module.exports = { archiveNote };
