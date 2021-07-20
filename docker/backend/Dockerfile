FROM node:lts-alpine as stage1
WORKDIR /usr/src/app
COPY . .
RUN npx yarn install
RUN npx yarn run build backend
COPY package.prod.json /usr/src/app/package.json

FROM node:lts-alpine
WORKDIR /usr/src/app
COPY --from=stage1 /usr/src/app/package.json .
COPY --from=stage1 /usr/src/app/dist/apps/backend ./dist/apps/backend
COPY --from=stage1 /usr/src/app/yarn.lock .
RUN npx yarn install
CMD ["node", "dist/apps/backend/main.js"]
