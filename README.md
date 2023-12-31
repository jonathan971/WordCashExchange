# WordCashExchange

Vous avez besoin de convertir des devises sans prise de tête ? Vous êtes au bon endroit ! Que ce soit pour un voyage, un achat en ligne, ou juste par curiosité, WorldCashExchange vous simplifie la vie avec des conversions rapides et faciles. On vous donne les taux actuels en un clin d'œil, et tout ça gratuitement.

## Table des matières 🧾

- [Introduction 📃](#Introduction-📃)
- [Configuration ⚙️](#Configuration-⚙️)
- [Installation📥](#installation-📥)
- [Utilisation 📲](#utilisation-📲)
- [Test 🩺](#Test-🩺)
- [Bonus 💯](#Bonus-💯)
- [API 💻](#API-💻)
- [Lien 🔗](#Lien-🔗)
- [Contribuer 🗣️](#contribuer-🗣️)
- [Auteur 👨🏽‍💻](#auteurs-👨🏽‍💻)
- [Licence 📃](#licence)

## Introduction 📃

Ce que nous avons realisé dans ce projet :
 - Web application d'echenage de devise et de gestion de User avec NodeJs en Javascript, HMML qui utilise MongoDB comme base de données
 - Tests unitaire + tests qui couvrent l'API, configuration, connexion
 - 2 pipelines CI/CD avec GitHub Actions (Publish et Changelog)
 - Configuration avec Vagrant et provisionnement avec Ansible
 - Docker image de notre application
 - Orchestration en contenaire avec Docker Compose puis avec Kubernetes
 - Créer un maillage de services à l'aide d'Istio

## Configuration ⚙️

Pour utiliser ou contribuer à SoleyEvazyon, vous devez avoir les outils suivants installés sur votre système :

- #### Node.js
  Un environnement d'exécution JavaScript côté serveur. Téléchargez et installez-le depuis [le site officiel de Node.js](https://nodejs.org/).

## Installation 📥

1. Clonez ce référentiel sur votre ordinateur en utilisant la commande suivante :

```
git clone https://github.com/jonathan971/heyy.git
```

2. Accédez au répertoire du projet :

```
cd userapi
```

3. Installez les dépendances en exécutant la commande suivante :

```
npm install
```

Ou, si vous utilisez yarn :

```
yarn install
```

## Utilisation 📲

Pour lancer l'application, utilisez l'une des commandes suivantes :

1. Construire pour la Production :

```
npm run build
```

2. Lancer l'Application en Production :

```
npm start
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Test 🩺

Vous pouvez tester l'application grâce à Jasmine :
```
npm test
```
## Bonus 💯

Nous avons tenus à réaliser quelques bonus :

- Utilisation de Jasmine pour les tests
- Utilisation de MongoDB pour la base de donnée
- Utilisation de Swagger pour documenter et gerer notre API

## API 💻

Pour notre application, nous avons utilisé une API de conversion de devise : [Exchangerate api](https://www.app.exchangerate-api.com)
Elle se charge de donner la taux de chaque devise en temps réel.

## Lien 🔗


## Contribuer 🗣️

N'hésitez pas à contribuer en ouvrant des problèmes ou en soumettant des demandes de tirage (pull requests) pour améliorer l'application.

## Auteurs 👨🏽‍💻

- [Jonathan VELIN](https://github.com/jonathan971)
- [Mathias NERIS](https://github.com/M5-ux)

## Licence 

Licence MIT

Droit d'auteur (c) 2023 ECE PARIS Jonathan VELIN, Mathias NERIS

Permission accordée, à titre gracieux, à toute personne obtenant une copie de ce logiciel et des fichiers de documentation associés (le "Logiciel"), de traiter le Logiciel sans restriction, y compris, sans s'y limiter, les droits d'utiliser, de copier, de modifier, de fusionner, de publier, de distribuer, de sous-licencier et/ou de vendre des copies du Logiciel, et d'autoriser les personnes auxquelles le Logiciel est fourni à le faire, sous réserve des conditions suivantes :

L'avis de droit d'auteur ci-dessus et cet avis de permission doivent être inclus dans toutes les copies ou parties substantielles du Logiciel.

LE LOGICIEL EST FOURNI "TEL QUEL", SANS GARANTIE D'AUCUNE SORTE, EXPRESSE OU IMPLICITE, Y COMPRIS, MAIS SANS S'Y LIMITER, LES GARANTIES DE QUALITÉ MARCHANDE, D'ADAPTATION À UN USAGE PARTICULIER ET D'ABSENCE DE CONTREFAÇON. EN AUCUN CAS, LES AUTEURS OU LES TITULAIRES DES DROITS D'AUTEUR NE SERONT RESPONSABLES DE TOUTE RÉCLAMATION, DOMMAGES OU AUTRE RESPONSABILITÉ, QUE CE SOIT DANS UNE ACTION DE CONTRAT, DE TORT OU AUTRE, DÉCOULANT DE, HORS OU EN RELATION AVEC LE LOGICIEL OU L'UTILISATION OU D'AUTRES NÉGOCIATIONS DANS LE LOGICIEL.
