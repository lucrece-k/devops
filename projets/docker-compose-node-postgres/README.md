Docker Compose – Node.js + PostgreSQL

Description

Ce projet a été réalisé dans le cadre de mon apprentissage du DevOps.

Il montre comment déployer une application Node.js (Express) et une base de données PostgreSQL à l'aide de Docker Compose.

L'application se connecte automatiquement à PostgreSQL grâce au réseau créé par Docker Compose.



Architecture


Navigateur
      │
      ▼
localhost:3000
      │
      ▼
API Node.js (Express)
      │
      ▼
PostgreSQL




Technologies utilisées

 Docker
 Docker Compose
 Node.js
 Express
 PostgreSQL



Structure du projet


docker-compose-node-postgres/
├── app.js
├── package.json
├── Dockerfile
├── docker-compose.yml
└── README.md




Lancer le projet

Construire l'image et démarrer les conteneurs :


docker compose up -d --build


Vérifier les conteneurs :


docker compose ps




Tester l'application

Depuis un navigateur :


http://localhost:3000


Ou avec curl :


curl localhost:3000


Si tout fonctionne, l'application affiche la version de PostgreSQL, ce qui confirme la connexion entre les deux conteneurs.



Arrêter le projet


docker compose down




Concepts DevOps mis en pratique

 Création d'une image Docker personnalisée
 Docker Compose
 Communication entre plusieurs conteneurs
 Réseau Docker automatique
 Variables d'environnement
 Volume Docker pour la persistance des données
 Connexion d'une application Node.js à PostgreSQL

