FROM node:15-alpine3.10 AS builder

RUN apk --no-cache add curl

RUN mkdir -p /var/www/app
WORKDIR /var/www/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
