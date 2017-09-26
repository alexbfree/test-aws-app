FROM node:alpine

RUN mkdir:app

WORKDIR app

COPY ./package.json /app/package.json

RUN npm install

RUN npm install nodemon -g

COPY . /app

EXPOSE 8080

CMD nodemon app.js