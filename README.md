# Overview
<div style = "display: flex;">
  <img src = "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src = "https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E">
  <img src = "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src = "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white">
  <img src = "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">
  <img src = "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
</div>

This repository contains, basic To-do application which is created with NodeJS (Express) and PostgresQL for backend and ReactJS (with ViteJS compiler) for frontend sections. Also, backend has been dockerized and published on Docker Hub.

# Quick Local Setup (Unix-based OS)
Clone the repository and `cd` into the project directory:
```
>>> git clone https://www.github.com/egesabanci/worqcompany-case-study
```
Run the PostgresQL via Docker on port `172.17.0.1:5432`:
```
>>> bash run-psql-container.sh
```
Run the Express Backend via Docker on port `0.0.0.0:8080`, this command will pull the `egesabanci/worqcompany-case-api` image from the Docker Hub and runs on the `localserver`:
```
>>> bash run-node-container.sh
```
Finally, `cd` into the `frontend` directory and run the UI on port `localhost:3000`:
```
>>> cd frontend/
>>> npm run start
```
Now the UI has been started to serve on `localhost:3000`, go to `http://localhost:3000` and you can use the app.

# Dockerized Backend (ExpressJS)
Dockerized application backend can be found on Docker Hub ([here](https://hub.docker.com/r/egesabanci/worqcompany-case-api)).

# Application UI Overview
![Application UI Overview](https://raw.githubusercontent.com/egesabanci/worqcompany-case-study/master/assets/application-ui-overview.png?token=GHSAT0AAAAAABMKUTO2Y7KS2WO7JRLTY564YQIMUFA)