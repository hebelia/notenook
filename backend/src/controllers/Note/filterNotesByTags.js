const { Note, Tag } = require("../../db");

const filterNotesByTags = async (tags) => {
  if (!tags) {
    throw new Error("No tags provided");
  }
  const tagsArray = tags.split(",");

  const notes = await Note.findAll({
    include: [
      {
        model: Tag,
        where: { name: tagsArray },
        through: { attributes: [] },
      },
    ],
  });

  return notes;
};

module.exports = { filterNotesByTags };
