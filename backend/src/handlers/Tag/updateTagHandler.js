const {updateTag} = require("../../controllers/Tag/updateTag");

const updateTagHandler = async (req, res) => {
  try {
    const updated = await updateTag(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {updateTagHandler};
