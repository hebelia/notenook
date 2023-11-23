const { archiveNote } = require("../../controllers/Note/archiveNote");

const archiveNoteHandler = async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await archiveNote(noteId);
    res.status(200).json(note);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { archiveNoteHandler };
