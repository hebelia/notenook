const { getAllNotes } = require("../../controllers/Note/getAllNotes");

const getAllNotesHandler = async (req, res) => {
  try {
    const notes = await getAllNotes();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllNotesHandler };