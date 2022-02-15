const routes = require("express").Router(); //metodo pra utilizar as rotas
const TaskController = require("../controller/Taskcontroller") //impostação do metodo

routes.get("/", TaskController.getAll)

module.exports = routes