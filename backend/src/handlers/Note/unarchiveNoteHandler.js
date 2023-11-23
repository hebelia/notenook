const { unarchiveNote } = require("../../controllers/Note/unarchiveNote");

const unarchiveNoteHandler = async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await unarchiveNote(noteId);
    res.status(200).json(note);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { unarchiveNoteHandler };
