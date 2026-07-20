Docker Tags

Objectif

Ce projet montre comment gérer plusieurs versions d'une même image Docker grâce aux tags. Il permet de comprendre le fonctionnement des versions (v1, v2, latest, stable) et les bonnes pratiques de versionnement.

Technologies utilisées

 Docker
 Node.js 22
 Express
 Alpine Linux

Structure


docker-tags/
├── app.js
├── package.json
├── Dockerfile
├── .dockerignore
└── README.md


Construction de la version 1


docker build -t docker-tags:v1 .


Construction de la version 2

Après avoir modifié app.js :


docker build -t docker-tags:v2 .


Lancer la version 1


docker run -d \
  --name tags-v1 \
  -p 3004:3000 \
  docker-tags:v1


Tester :


curl localhost:3004


Résultat :


Version 1


Lancer la version 2


docker rm -f tags-v1

docker run -d \
  --name tags-v2 \
  -p 3004:3000 \
  docker-tags:v2


Tester :


curl localhost:3004


Résultat :


Version 2


Utiliser le tag latest

Construire l'image :


docker build -t docker-tags:latest .


Ou créer le tag sans reconstruire :


docker tag docker-tags:v2 docker-tags:latest


Créer un tag stable


docker tag docker-tags:v2 docker-tags:stable


Afficher les images


docker images


Les tags v2, latest et stable peuvent partager le même IMAGE ID, car ils pointent vers la même image.

Notions apprises

 Tags Docker
 Versionnement des images
 Différence entre `latest` et les versions explicites
 Création de plusieurs versions (`v1`, `v2`, `v3`)
 Retagger une image avec `docker tag`
 Bonnes pratiques de versionnement
 Versionnement sémantique (`v1.0.0`, `v1.1.0`, `v2.0.0`)
