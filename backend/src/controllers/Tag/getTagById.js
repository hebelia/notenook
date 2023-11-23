const { Tag } = require("../../db");

const getTagById = async (id) => {
  return await Tag.findByPk(id);
};

module.exports = {getTagById};
