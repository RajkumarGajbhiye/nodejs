import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("Connected to the server!");
});
app.listen(3000, () => console.log("Running in 3k..."));
