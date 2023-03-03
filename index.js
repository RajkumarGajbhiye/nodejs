const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Connected to the server!");
});
app.get("/friends", (req, res) => {
  res.send("Hellow friends!");
});

app.listen(3000, () => console.log("Running in 3k..."));
module.exports = app
