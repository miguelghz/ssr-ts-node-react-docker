FROM node:10-alpine
MAINTAINER miguelghz

WORKDIR app
COPY package.json ./

RUN apk update && apk upgrade && apk add --no-cache git
RUN npm install --production

ENV PORT=80
EXPOSE 80 443

COPY . .
RUN npm update

CMD node server.js