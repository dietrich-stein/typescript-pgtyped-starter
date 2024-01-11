# syntax=docker/dockerfile:1

FROM node:lts

ARG PROJECT_OWNER
ENV PROJECT_OWNER=$PROJECT_OWNER

ARG WEBPACK_DEV_SERVER_PORT
ENV WEBPACK_DEV_SERVER_PORT=$WEBPACK_DEV_SERVER_PORT

LABEL maintainer="${PROJECT_OWNER} <${PROJECT_EMAIL}>"

EXPOSE $WEBPACK_DEV_SERVER_PORT

RUN apt-get -y update && \
    apt-get -y upgrade && \
    apt-get -y install gcc autoconf libpng-dev

COPY package.json ./app/
COPY tsconfig.json ./app/
COPY webpack.config.ts ./app/

WORKDIR /app

RUN npm install

CMD npm run start
