const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
       "mongodb+srv://roots:admin@todolist.1nijp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;