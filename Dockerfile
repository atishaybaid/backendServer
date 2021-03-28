FROM node:12.21.0-alpine3.12

EXPOSE 3000:3000

RUN mkdir -p /usr/src/backendServer
WORKDIR  /usr/src/backendServer
COPY package.json package.json

RUN yarn install
COPY . .
RUN yarn build

CMD [ "yarn", "start" ]
