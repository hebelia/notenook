const { updateNote } = require("../../controllers/Note/updateNote");

const updateNoteHandler = async (req, res) => {
  try {
    const updated = await updateNote(req.params.id, req.body);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  updateNoteHandler,
};
