const routes = require("express").Router();
const TaskController = require("../controller/Taskcontroller")

routes.get("/", TaskController.getAll)

module.exports = routes