const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Bienvenue sur mon application !");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.listen(3000, "0.0.0.0");
