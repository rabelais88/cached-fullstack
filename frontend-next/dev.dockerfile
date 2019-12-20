# hot-reloading enabled image
FROM node:12-alpine as build
COPY ./package.json /home/node/app/package.json
WORKDIR /home/node/app
RUN yarn install

FROM node:12-alpine
COPY --from=build /home/node/app/node_modules /home/node/app/node_modules
WORKDIR /home/node/app