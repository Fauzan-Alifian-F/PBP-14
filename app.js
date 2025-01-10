const express = require("express");
const menuRoute = require("./routes/BookRoute");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.set('view engine', 'ejs');

const webRoutes = require("./routes/web")


app.use("/", webRoutes)

app.use(express.json());

app.use("/hallo",menuRoute);

app.use(errorHandler);

module.exports = app;