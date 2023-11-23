const {filterNotesByTags} = require("../../controllers/Note/filterNotesByTags");

const filterNotesByTagsHandler = async (req, res) => {
  try {
    const tags = req.query.tags;
    const notes = await filterNotesByTags(tags);
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { filterNotesByTagsHandler };
