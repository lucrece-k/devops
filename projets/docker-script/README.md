# Docker Script Demo

Petit projet réalisé dans le cadre de mon apprentissage DevOps.

## Objectif

Créer une image Docker personnalisée à partir d'Ubuntu qui :

* crée un répertoire de travail `/app`
* copie un script Bash dans l'image
* rend le script exécutable
* exécute automatiquement le script au démarrage du conteneur

## Fichiers

* `Dockerfile`
* `hello.sh`

## Construction de l'image

```bash
docker build -t mon-script .
```

## Exécution

```bash
docker run --rm mon-script
```

## Exemple de sortie

```text
Bonjour depuis mon script Docker !
Thu Jul 9 10:10:24 UTC 2026
```

## Compétences pratiquées

* Docker images
* Docker containers
* Dockerfile
* FROM
* WORKDIR
* COPY
* RUN
* CMD
* Permissions Linux (`chmod +x`)



