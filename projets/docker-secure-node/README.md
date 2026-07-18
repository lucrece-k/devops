Docker Secure Node

Objectif

Ce projet montre comment sécuriser une application Node.js exécutée dans un conteneur Docker en utilisant un utilisateur non privilégié.

Technologies utilisées

 Docker
 Node.js 22
 Express
 Alpine Linux

Structure


docker-secure-node/
├── app.js
├── package.json
├── Dockerfile
├── .dockerignore
└── README.md


Construction de l'image


docker build -t docker-secure-node .


Lancement du conteneur


docker run -d --name secure-node -p 3001:3000 docker-secure-node


Test


curl localhost:3001


Résultat attendu :


Bonjour depuis une application Node.js sécurisée !


Vérification de l'utilisateur


docker exec secure-node whoami


Résultat :


appuser


Notions apprises

 utilisateur non privilégié
 instruction USER
 principe du moindre privilège
 sécurité des conteneurs
 Dockerfile sécurisé
