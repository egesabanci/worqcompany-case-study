FROM alpine
WORKDIR ./app

RUN apk add --update nodejs npm
RUN node --version
RUN npm --version

COPY ./database ./database
COPY ./app.js ./app.js
COPY ./db.config.json ./db.config.json
COPY ./package.json ./package.json

RUN ls -a
RUN npm install

EXPOSE 8080:8080
RUN npm run start