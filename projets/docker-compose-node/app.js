const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Bonjour depuis Node.js et Docker Compose !");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Serveur démarré sur le port 3000");
});
