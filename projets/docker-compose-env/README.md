Docker Compose Env

Objectif

Découvrir l'utilisation d'un fichier .env avec Docker Compose afin de centraliser la configuration d'une application.

Technologies utilisées

 Docker
 Docker Compose
 Node.js 22
 Express

Structure


docker-compose-env/
├── app.js
├── package.json
├── Dockerfile
├── docker-compose.yml
├── .env
├── .dockerignore
└── README.md


Lancement


docker compose up -d --build


Test


curl localhost:3003


Résultat attendu :


Bonjour depuis Docker Compose et un fichier .env !


Arrêt


docker compose down


Notions apprises

 Docker Compose
 fichier .env
 env_file
 variables d'environnement
 configuration centralisée
 séparation du code et de la configuration
