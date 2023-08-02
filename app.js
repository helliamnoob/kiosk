const express = require("express");
const { sequelize } = require("./models");

const app = express();

app.use(express.json());

app.listen(3000, async () => {
  console.log("server started!");
  await sequelize.authenticate();
  console.log("db authenticated!");
});