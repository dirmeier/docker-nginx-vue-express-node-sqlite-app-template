FROM node:latest as build-stage

RUN mkdir -p /app/client

WORKDIR /app/client
COPY client/package*.json  \
  client/.eslintrc.js \
  client/babel.config.js ./
COPY client/public ./public
COPY client/src ./src
RUN npm install
RUN npm run build

WORKDIR /app
COPY package*.json app.js create_db.js ./
COPY db ./db
RUN npm install
RUN npm run db

EXPOSE 4000
CMD [ "npm", "run", "start" ]
