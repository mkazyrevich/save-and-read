FROM node:latest-alpine:latest as build
WORKDIR /usr/src/app
COPY . .
RUN npx yarn install
RUN npx yarn run build

FROM nginx:stable-alpine
