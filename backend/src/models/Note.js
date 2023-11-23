const { DataTypes, UUIDV4 } = require("sequelize");
// const noteColors = require("../utils/noteColors");
module.exports = (sequelize) => {
  sequelize.define(
    "Note",
    {
      ID: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("important", "relevant", "trivial"),
        allowNull: true,
      },
      isArchived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      color: {
        type: DataTypes.ENUM(
          "reef",
          "visvis",
          "candy",
          "tropical",
          "melrose",
          "lilac",
          "gallery",
          "peach",
          "aquamarine"
        ),
        allowNull: false,
        defaultValue: "gallery",
      },
    },
    {
      timestamps: true,
    }
  );
};
