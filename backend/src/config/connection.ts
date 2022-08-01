import { Sequelize } from "sequelize-typescript";

import { Article } from "../models";

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "orion199868",
  database: "article",
  logging: false,
  models: [Article],
});

export default connection;
