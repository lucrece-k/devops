Docker Env Node

Objectif

Découvrir les variables d'environnement avec Docker afin de rendre une application configurable sans modifier son code source.

Technologies utilisées

 Docker
 Node.js 22
 Express

Structure


docker-env-node/
├── app.js
├── package.json
├── Dockerfile
├── .dockerignore
└── README.md


Construction


docker build -t docker-env-node .


Lancement sans variable


docker run -d --name env-node -p 3002:3000 docker-env-node


Test :


curl localhost:3002


Lancement avec variables


docker rm -f env-node

docker run -d \
  --name env-node \
  -p 3002:4000 \
  -e PORT=4000 \
  -e MESSAGE="Bonjour depuis une variable d'environnement !" \
  docker-env-node


Test


curl localhost:3002


Résultat :


Bonjour depuis une variable d'environnement !


Notions apprises

 variables d'environnement
 option -e
 process.env
 configuration d'une application
 bonnes pratiques de sécurité
