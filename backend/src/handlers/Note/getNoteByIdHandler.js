const { getNoteById } = require("../../controllers/Note/getNoteById");


const getNoteByIdHandler = async (req, res) => {
    try {
      const note = await getNoteById(req.params.id);
      if (note) {
        res.status(200).json(note);
      } else {
        res.status(404).json({ error: "Note not found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


module.exports = { getNoteByIdHandler };