const express = require("express");
const app = express();
const chalk = require("chalk");
const routes = require("./routes");
const db = require("./db/db");
const PORT = 3001;

//app.use("/", () => console.log("esa corriendo"));

//Convierte los body request en formato JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Allowing localhost:3000 to request data from server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    console.log(chalk.magenta("Base de datos conectada"));
    app.listen(PORT, () => {
      chalk.green(console.log(`Puerto arriba en http://localhost:${PORT}`));
    });
  })
  .catch((err) => console.log(err));
