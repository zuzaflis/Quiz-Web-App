# Quiz Web App - Docker Deployment

This version uses images from Docker Hub — you **do not need the full source code**, but the SQL file to initialize the database is required (`exam_portal.sql`).

## Requirements

- Docker
- Docker Compose
- `exam_portal.sql` file (place it in the same folder as `docker-compose.yml`)

## How to Run

1. Clone the repo (only `docker-compose.yml` and SQL file are needed):

```bash
git clone <your-docker-compose-repo>.git
cd Quiz-Web-App
```
Or download docker-compose.yml and exam_portal.sql


Pull the latest images:

```bash

docker compose pull
```
Start all containers:

```bash
docker compose up -d
```
Frontend application will be available at:

http://localhost:4200

ADMIN/USER
login: user, pass: user
login: admin, pass: admin

To stop and remove containers:

```bash

docker compose down
```
Container Overview
mysql-db — MySQL database initialized with exam_portal.sql

backend-api — Spring Boot backend

frontend-app — Angular/Nginx frontend
