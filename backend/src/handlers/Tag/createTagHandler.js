const {createTag} = require("../../controllers/Tag/createTag");

const createTagHandler = async (req, res) => {
  try {
    const tag = await createTag(req.body);
    res.status(201).json(tag);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {createTagHandler};
