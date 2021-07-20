FROM node:lts-alpine as build
WORKDIR /usr/src/app
COPY . .
RUN npx yarn install
RUN npx yarn run build save-read-client

FROM nginx:stable-alpine
COPY --from=build /usr/src/app/dist/apps/save-read-client /usr/share/nginx/html
COPY docker/frontend/nginx.conf /etc/nginx/conf.d/default.conf
