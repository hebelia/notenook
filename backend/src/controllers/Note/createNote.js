const { Note, Tag } = require("../../db");

const createNote = async (noteData) => {
  const { title, content, status, color, tags } = noteData;

  if (!title || !content) {
    throw new Error("Title and content are required.");
  }

  const validColors = [
    "reef",
    "visvis",
    "candy",
    "tropical",
    "melrose",
    "lilac",
    "gallery",
    "peach",
    "aquamarine",
  ];
  const noteColor = validColors.includes(color) ? color : "gallery";

  const validStatuses = ["important", "relevant", "trivial"];
  const noteStatus = validStatuses.includes(status) ? status : null;

  const newNote = await Note.create({
    title,
    content,
    status: noteStatus,
    color: noteColor,
    isArchived: false,
  });

  if (tags && tags.length > 0) {
    for (const tagName of tags) {
      let tag = await Tag.findOne({ where: { name: tagName } });
      if (!tag) {
        tag = await Tag.create({ name: tagName });
      }
      await newNote.addTag(tag);
    }
  }

  return newNote;
};

module.exports = { createNote };
