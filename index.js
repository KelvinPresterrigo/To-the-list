const express = require("express"); // require busca o express
const path = require("path"); //direcionar as pastas
const routes = require("./routes/routes");
const connectToDb = require("./database/db");

connectToDb();
const app = express(); //express é uma função dentro de app
const port = 3000; //retirada do

//rotas
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); //Arquivos estaticos para rodar o ejs no public
app.use(express.urlencoded());
app.use(routes);

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
