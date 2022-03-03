const routes = require("express").Router(); //metodo pra utilizar as rotas
const TaskController = require("../controller/Taskcontroller") //impostação do metodo

routes.get("/", TaskController.getAllTasks)
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id/:method", TaskController.getById);
routes.post("/updateOne/:id", TaskController.updateOneTask);
routes.get("/deleteOne/:id/", TaskController.deleteOneTask);
routes.get("/check/:id/", TaskController.taskCheck);



module.exports = routes