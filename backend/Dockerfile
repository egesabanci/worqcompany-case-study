FROM node:16
WORKDIR ./app
EXPOSE 8080

RUN npm i -g npm@latest

COPY ./database ./database
COPY ./app.js ./app.js
COPY ./db.config.json ./db.config.json
COPY ./package.json ./package.json

RUN npm install
CMD ["npm", "run", "start"]