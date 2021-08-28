const express = require("express");
const app = express();
const chalk = require("chalk");
const routes = require("./routes");
const db = require("./db/db");
const cors = require("cors");
const PORT = 3001;

//app.use("/", () => console.log("esa corriendo"));

//Convierte los body request en formato JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    console.log(chalk.magenta("Base de datos conectada"));
    app.listen(PORT, () => {
      chalk.green(console.log(`Puerto arriba en http://localhost:${PORT}`));
    });
  })
  .catch((err) => console.log(err));
