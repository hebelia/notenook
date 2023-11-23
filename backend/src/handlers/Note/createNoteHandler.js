const { createNote } = require("../../controllers/Note/createNote");

const createNoteHandler = async (req, res) => {
  try {
    const note = await createNote(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createNoteHandler };
