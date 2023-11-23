const { Tag } = require("../../db");

const updateTag = async (id, updateData) => {
  const tag = await Tag.findByPk(id);
  if (!tag) {
    throw new Error("Tag not found");
  }
  return await tag.update(updateData);
};

module.exports = {updateTag};
