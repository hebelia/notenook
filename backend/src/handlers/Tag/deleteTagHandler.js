const { deleteTag } = require("../../controllers/Tag/deleteTag");

const deleteTagHandler = async (req, res) => {
  try {
    await deleteTag(req.params.id);
    res.status(200).json({ message: "Tag deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteTagHandler };
