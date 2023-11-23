const { Note, Tag } = require("../../db");

const getAllNotes = async () => {
  return await Note.findAll({
    include: [
      {
        model: Tag,
        attributes: ["ID", "name", "color"],
        through: {
          attributes: [],
        },
      },
    ],
  });
};

module.exports = { getAllNotes };
