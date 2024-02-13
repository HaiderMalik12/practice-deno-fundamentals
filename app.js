import express from "npm:express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hell from express");
});

app.listen(3000);
