const { Tag } = require("../../db");
const getAllTags = async () => {
  return await Tag.findAll();
};

module.exports = {getAllTags};
