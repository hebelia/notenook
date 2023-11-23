require("dotenv").config();
//imports
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
// destructuring of environment variables
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
// sequelize connection
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/notenook`,
  {
    logging: false,
    // logging: console.log, //enables logging of SQL queries
    native: false,
  }
);
// reads models from the models directory
const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// defines models using modelDefiners
modelDefiners.forEach((model) => model(sequelize));
// capitalizes model names and assigns to sequelize.models
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// destructuring models for easier access
const { Note, Tag } = sequelize.models;

Note.belongsToMany(Tag, { through: "Note_Tag" });
Tag.belongsToMany(Note, { through: "Note_Tag" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
