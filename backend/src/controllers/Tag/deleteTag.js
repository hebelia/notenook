const { Tag } = require("../../db");

const deleteTag = async (id) => {
  const tag = await Tag.findByPk(id);
  if (!tag) {
    throw new Error("Tag not found");
  }
  await tag.destroy();
};

module.exports = {deleteTag};
