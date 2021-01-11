FROM node:15-alpine3.10 AS builder

RUN mkdir -p /var/www/app
WORKDIR /var/www/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4000
