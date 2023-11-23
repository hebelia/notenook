const { Note, Tag } = require("../../db");

const updateNote = async (noteId, updateData) => {
  const note = await Note.findByPk(noteId);
  if (!note) {
    throw new Error("Note not found");
  }

  const { tags, ...noteData } = updateData;
  await note.update(noteData);

  if (tags && tags.length > 0) {
    await handleTags(note, tags);
  }

  const updatedNote = await Note.findByPk(noteId, {
    include: [
      {
        model: Tag,
        through: { attributes: [] },
      },
    ],
  });

  return updatedNote;
};

const handleTags = async (note, tags) => {
  for (const tagName of tags) {
    let tag = await Tag.findOne({ where: { name: tagName } });
    if (!tag) {
      tag = await Tag.create({ name: tagName });
    }
    await note.addTag(tag);
  }
};

module.exports = { updateNote };
