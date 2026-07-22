Docker Health Check

Objectif

Découvrir les Health Checks Docker afin de vérifier automatiquement qu'une application fonctionne correctement.



Technologies

 Docker
 Docker Compose
 Node.js 22
 Express



Structure du projet


docker-healthcheck/
├── app.js
├── package.json
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── README.md




Construction de l'image


docker build -t docker-healthcheck .




Lancer le conteneur


docker run -d \
  --name health-app \
  -p 3006:3000 \
  docker-healthcheck




Vérifier l'application


curl localhost:3006


Résultat :


Application en bonne santé !




Vérifier le Health Check


docker ps


Exemple :


Up (healthy)


Afficher les informations détaillées :


docker inspect health-app --format='{{json .State.Health}}'




Docker Compose

Lancer le projet :


docker compose up -d


Afficher les services :


docker compose ps




Concepts appris

 HEALTHCHECK
 Docker Compose Health Check
 interval
 timeout retries
 healthy / unhealthy
 depends_on
 condition: service_healthy
 diagnostic avec docker inspect- diagnostic avec docker compose logs
 différence entre localhost et 127.0.0.1



Ce que j'ai appris

 Vérifier automatiquement l'état d'une application.
 Comprendre la différence entre un conteneur Running et Healthy.
 Diagnostiquer un Health Check en échec.
 Utiliser les logs Docker pour identifier une erreur.
 Attendre qu'un service soit prêt avant d'en démarrer un autre.


