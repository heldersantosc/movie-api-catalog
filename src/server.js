const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const filmesRouter = require("./routes/filmes");
const { specs, swaggerUi } = require("./swagger");

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use("/filmes", filmesRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
