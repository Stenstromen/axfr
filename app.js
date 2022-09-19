const express = require("express");
const compression = require("compression");
const ejs = require("ejs");
const app = express();
const axfrRouter = require("./routers/axfr.router");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(compression());
app.use(axfrRouter);

app.listen(8080, () => {
    console.log("Server listening on localhost:8080")
})