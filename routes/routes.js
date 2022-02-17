const routes = require("express").Router(); //metodo pra utilizar as rotas
const TaskController = require("../controller/Taskcontroller") //impostação do metodo

routes.get("/", TaskController.getAllTasks)
routes.post("/create", TaskController.createTask)

module.exports = routes