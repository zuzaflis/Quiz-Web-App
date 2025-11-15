# Build stage
FROM node:18 AS build
WORKDIR /app

COPY package*.json ./
RUN npm config set fetch-retries 5
RUN npm config set fetch-timeout 600000
RUN npm ci --legacy-peer-deps

COPY . .
RUN npx nx reset
RUN npx nx build frontend --configuration production

# Serve stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
