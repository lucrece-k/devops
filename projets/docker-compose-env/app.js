const express = require("express");

const app = express();

const port = process.env.PORT;
const message = process.env.MESSAGE;

app.get("/", (req, res) => {
    res.send(message);
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Serveur lancé sur ${port}`);
});
