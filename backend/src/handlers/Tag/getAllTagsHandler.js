const {getAllTags} = require("../../controllers/Tag/getAllTags");

const getAllTagsHandler = async (req, res) => {
  try {
    const tags = await getAllTags();
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {getAllTagsHandler};
