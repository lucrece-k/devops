const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Bonjour depuis Docker optimisé v2 !");
});

app.listen(3000, "0.0.0.0");
