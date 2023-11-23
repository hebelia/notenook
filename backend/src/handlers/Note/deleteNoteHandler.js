const { deleteNote } = require("../../controllers/Note/deleteNote");

const deleteNoteHandler = async (req, res) => {
  try {
    await deleteNote(req.params.id);
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteNoteHandler };
