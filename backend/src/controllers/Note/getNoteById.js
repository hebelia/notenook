const { Note, Tag } = require("../../db");

const getNoteById = async (id) => {
  return await Note.findByPk(id, {
    include: [
      {
        model: Tag,
        through: {
          attributes: [],
        },
      },
    ],
  });
};

module.exports = { getNoteById };
