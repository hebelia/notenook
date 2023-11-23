const { Tag } = require("../../db");

const createTag = async (tagData) => {
  const tag = await Tag.create(tagData);
  return tag;
};

module.exports = {createTag};
