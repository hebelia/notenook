const { Note } = require("../../db");
const deleteNote = async (noteId) => {
  const note = await Note.findByPk(noteId);
  if (!note) {
    throw new Error("Note not found");
  }

  await note.destroy();
};

module.exports = {deleteNote};
