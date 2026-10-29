import express from "express";
import bolo from "./bolo.js";
const app = express();

app.get("/", (requisicao, resposta) => {
  resposta.send(bolo);
});
app.listen(3000, () => console.log("servidor rodando com sucesso"));
