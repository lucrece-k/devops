const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || "Bonjour !";

app.get("/", (req, res) => {
    res.send(message);
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Serveur lancé sur le port ${port}`);
});
