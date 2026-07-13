const express = require("express");
const { Client } = require("pg");

const app = express();

app.get("/", async (req, res) => {
  const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    await client.connect();

    const result = await client.query("SELECT version();");

    await client.end();

    res.send(
      `Connexion PostgreSQL réussie !<br><br>${result.rows[0].version}`
    );
  } catch (err) {
    res.send(`Erreur : ${err.message}`);
  }
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Serveur démarré sur le port 3000");
});
