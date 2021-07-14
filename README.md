<h1>Background jobs with Node.js and Bull</h1>

<p align="center">
  <img src="https://img.shields.io/badge/GitHub-000000?style=flat&logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express-gray?style=flat&logo=express&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Redis-a31f21?style=flat&logo=redis&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-007ACC?style=flat&logo=docker&logoColor=white"/>
</p>

> Project Status: :warning:


### Topics

:small_blue_diamond: [Project description](#project-description)

:small_blue_diamond: [Functionalities](#functionalities)

:small_blue_diamond: [Prerequisite](#prerequisite)

:small_blue_diamond: [Run](#run)

:small_blue_diamond: [Languages, dependencies and libs](#languages-dependencies-libs)

## Project description

<p align="justify">
  Project to create background jobs for dispatch e-mail notifications with Node.js, Bull and Redis.
</p>

## Functionalities

:heavy_check_mark: Background jobs

## Prerequisite

:warning: [Node](https://nodejs.org/en/download/)

:warning: [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

:warning: [Docker](https://www.docker.com/products/docker-desktop)

## Run :arrow_forward:
At the terminal, clone the project: 

```
git clone https://github.com/karanmelo/queue-node-mail.git
```
Enter the project folder:
```
cd queue-node-mail
```
Install the dependencies:
```
yarn install
```
Run Redis:
```
yarn redis
```
Run the application on the development mode:
```
yarn dev
```

Now the project is accessible at:
> localhost:3333/

## Languages, dependencies and libs :books:
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Bull](https://optimalbits.github.io/bull/)
- [Redis](https://redis.io/)
- [Nodemailer](https://nodemailer.com/about/)
- [Docker](http://docker.com/)