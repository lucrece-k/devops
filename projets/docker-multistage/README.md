Docker Multi-Stage

Description

Ce projet illustre l'utilisation d'un Dockerfile multi-stage afin de construire une image Docker plus légère et optimisée.

L'application est une API Node.js très simple qui répond avec le message :

 Bonjour depuis une image optimisée !

L'objectif est de comprendre comment séparer la phase de construction (*build*) de la phase d'exécution (*runtime*) afin de réduire la taille de l'image finale.



Structure du projet


docker-multistage/
├── app.js
├── package.json
├── Dockerfile
├── .dockerignore
└── README.md




Construire l'image


docker build -t docker-multistage .




Lancer le conteneur


docker run -d --name multistage -p 3000:3000 docker-multistage




Tester l'application

Depuis un navigateur :


http://localhost:3000


Ou avec curl :


curl localhost:3000


Résultat attendu :


Bonjour depuis une image optimisée !




Notions abordées
 Dockerfile optimisé
 Build multi-stage
 Cache Docker
 Image node:22-alpine
 COPY --from=build`
 .dockerignore
 Optimisation des temps de build



Technologies

 Docker
 Node.js 22
 Express



Objectif 

Ce projet a été réalisé dans le cadre de mon apprentissage DevOps afin de découvrir les bonnes pratiques d'optimisation des images Docker utilisées en environnement professionnel.
