const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const filmesRouter = require("./routes/filmes");
const { specs, swaggerUi } = require("./swagger");

const app = express();
const PORT = process.env.PORT;

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erro de conexão com o MongoDB:"));
db.once("open", () => console.log("Conectado ao MongoDB!"));

app.use(bodyParser.json());

app.use("/filmes", filmesRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
