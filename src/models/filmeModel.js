const { Sequelize, DataTypes } = require("sequelize");

const POSTGRES_DB = process.env.POSTGRES_DB;
const POSTGRES_URL = process.env.POSTGRES_URL;
const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;

const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
  host: POSTGRES_URL,
  dialect: "postgres",
});

const Filme = sequelize.define(
  "Filme",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
    },
    adult: DataTypes.BOOLEAN,
    backdrop_path: DataTypes.STRING,
    genre_ids: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    original_language: DataTypes.STRING,
    original_title: DataTypes.STRING,
    overview: DataTypes.TEXT,
    popularity: DataTypes.FLOAT,
    poster_path: DataTypes.STRING,
    release_date: DataTypes.DATE,
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video: DataTypes.BOOLEAN,
    vote_average: DataTypes.FLOAT,
    vote_count: DataTypes.INTEGER,
    comments: DataTypes.TEXT,
  },
  {
    tableName: "filmes",
    timestamps: false,
  }
);

sequelize.sync().then(() => {
  console.log("Conectado ao Postgres!");
});

module.exports = { Filme };
