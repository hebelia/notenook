const {getTagById} = require("../../controllers/Tag/getTagById");

const getTagByIdHandler = async (req, res) => {
  try {
    const tag = await getTagById(req.params.id);
    res.status(200).json(tag);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {getTagByIdHandler};
