const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const filmesRouter = require("./routes/filmes");
const { specs, swaggerUi } = require("./swagger");
const { sequelize } = require("./models/filmeModel");

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use("/filmes", filmesRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Conectado ao Postgres!");
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
