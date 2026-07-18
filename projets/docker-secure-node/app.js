const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Bonjour depuis une application Node.js sécurisée !");
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Serveur lancé sur le port 3000");
});
